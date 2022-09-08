const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: process.env.MAIL_PASS,
  },
});
function sendMail(orders) {
  const { address, name, email, product, price, quantity } = orders;

  const mailOptions = {
    from: '',
    to: email,
    subject: `Your order  ${product} is successfully booked`,
    text: 'Your product will be shifted within 7 days',
    html: `
      <div> 
        <p>Hello, Sir</p>
        <h4>Your product will be shifted in this address ${address}</h4>
        <h4>Quantity: ${quantity}</h4>
        <h4>Total Price: ${price * quantity} Tk BDT.</h4>
        <p>Sincerely</p>
        <p>Total Car Care Ltd. </p>
        <h4 className="mt-5">Our Address</h4>
        <p>Muradpur ,Ctg</p>
        <p>Bangladesh</p>     
     
      </div>
    `,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log('something is wrong', err);
    } else {
      // console.log('Email sent', data);
    }
  });
}

module.exports = sendMail;
