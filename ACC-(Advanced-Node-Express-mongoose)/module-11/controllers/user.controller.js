const {
  signupService,
  findUserByEmail,
  findUserByToken,
} = require('../services/user.service');
const { sendMailWithGmail, sendMailWithMailGun } = require('../utils/email');
const { generateToken } = require('../utils/token');

exports.signup = async (req, res) => {
  try {
    const user = await signupService(req.body);

    const token = user.generateConfirmationToken();

    await user.save({ validateBeforeSave: false });

    const mailData = {
      to: [user.email],
      subject: 'Verify your Account',
      text: `Thank you for creating your account. Please confirm your account here: ${
        req.protocol
      }://${req.get('host')}${req.originalUrl}/confirmation/${token}`,
    };

    await sendMailWithMailGun(mailData);

    res.status(200).json({
      status: 'success',
      message: 'Successfully signed up',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      error,
    });
  }
};

/**
 * 1. Check if Email and password are given
 * 2. Load user with email
 * 3. if not user send res
 * 4. compare password
 * 5. if password not correct send res
 * 6. check if user is active
 * 7. if not active send res
 * 8. generate token
 * 9. send user and token
 */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        status: 'fail',
        error: 'Please provide your credentials',
      });
    }

    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        status: 'fail',
        error: 'No user found. Please create an account',
      });
    }

    const isPasswordValid = user.comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(403).json({
        status: 'fail',
        error: 'Password is not correct',
      });
    }

    if (user.status != 'active') {
      return res.status(401).json({
        status: 'fail',
        error: 'Your account is not active yet.',
      });
    }

    const token = generateToken(user);

    const { password: pwd, ...others } = user.toObject();

    res.status(200).json({
      status: 'success',
      message: 'Successfully logged in',
      data: {
        user: others,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      error,
    });
  }
};

exports.getMe = async (req, res) => {
  try {
    const user = await findUserByEmail(req.user?.email);

    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      error,
    });
  }
};

exports.confirmEmail = async (req, res) => {
  try {
    const { token } = req.params;

    const user = await findUserByToken(token);

    if (!user) {
      return res.status(403).json({
        status: 'fail',
        error: 'Invalid token',
      });
    }

    const expired = new Date() > new Date(user.confirmationTokenExpires);

    if (expired) {
      return res.status(401).json({
        status: 'fail',
        error: 'Token expired',
      });
    }

    user.status = 'active';
    user.confirmationToken = undefined;
    user.confirmationTokenExpires = undefined;

    user.save({ validateBeforeSave: false });

    res.status(200).json({
      status: 'success',
      message: 'Successfully activated your account.',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      error,
    });
  }
};
