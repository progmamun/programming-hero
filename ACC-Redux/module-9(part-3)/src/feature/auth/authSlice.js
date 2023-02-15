import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";

const initialState = {
  isLoading: true,
  isError: false,
  isSuccess: false,
  user: { email: "", role: "" },
  error: "",
};

export const createUser = createAsyncThunk(
  "auth/createUser",
  async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);

    return data.user.email;
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);

    return data.user.email;
  }
);

export const googleLogin = createAsyncThunk("auth/googleLogin", async () => {
  const googleProvider = new GoogleAuthProvider();
  const data = await signInWithPopup(auth, googleProvider);

  return data.user.email;
});

export const getUser = createAsyncThunk("auth/getUser", async (email) => {
  const res = await fetch(`${process.env.REACT_APP_DEV_URL}/user/${email}`);
  const data = await res.json();

  if (data.status) {
    return data;
  }

  return email;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user.email = payload;
      state.isLoading = false;
    },
    logOut: (state) => {
      state.user = { email: "", role: "" };
    },
    toggleLoading: (state) => {
      state.isLoading = false;
    },
    toggleFalse: (state) => {
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // create user thunk
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.email = action.payload;
      })
      .addCase(createUser.rejected, (state, { error }) => {
        state.user.email = "";
        state.isError = true;
        state.isLoading = false;
        state.error = error.message;
      })
      // login thunk
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.user.email = payload;
      })
      .addCase(loginUser.rejected, (state, { error }) => {
        state.user.email = "";
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.error = error.message;
      })
      .addCase(googleLogin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(googleLogin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.email = payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(googleLogin.rejected, (state, { error }) => {
        state.user.email = "";
        state.isLoading = false;
        state.isError = true;
        state.error = error.message;
      })
      .addCase(getUser.pending, (state) => {
        state.isError = false;
        state.error = "";
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (payload.status) {
          state.user = payload.data;
        } else {
          state.user.email = payload;
        }
        state.isError = false;
        state.error = "";
      })
      .addCase(getUser.rejected, (state, { error }) => {
        state.user.email = "";
        state.isError = true;
        state.isLoading = false;
        state.error = error.message;
      });
  },
});

export const { logOut, setUser, toggleLoading, toggleFalse } =
  authSlice.actions;

export default authSlice.reducer;
