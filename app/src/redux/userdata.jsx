import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
// import { decode } from "jsonwebtoken";
const counterSlice = createSlice({
  name: "userdata",
  initialState: {
    name: "",
    email: "",
    uid: "",
    token: "",
    isLoggedIn: false,
    isSignup: false,
    isLoading: false,
    error: null,
    // theme: "light",
  },
  reducers: {
    signinStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    signupStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    signinSuccess: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      localStorage.setItem("auth-token", action.payload);

    },
    signupSuccess: (state, action) => {
      state.isLoading = false;
      state.isSignup = true;
    },
    updatename: (state, action) => {
      state.name = action.payload;
    },
    signinFailure: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    signupfailure: (state, action) => {
      state.isLoading = false;
      state.isSignup = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.name = "";
      state.email = "";
      state.uid = "";
      state.favorite = [];
    },
  },
});

export const {
  signinFailure,
  signupStart,
  signupSuccess,
  signupfailure,
  updatename,
  logout,
  signinStart,
  signinSuccess,
} = counterSlice.actions;

export const Signin = (email, password) => async (dispatch) => {
  dispatch(signinStart());
  try {
    const data = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const res = await data.json();
    if (res.token) {
      dispatch(signinSuccess(res.token));
      toast.success("login successfully");
    } else {
      dispatch(signinFailure(res.error));
      toast.error(res.error);
    }
  } catch (error) {
    console.log(error);
    dispatch(signinFailure(error.message));
  }
};
export const signup = (email, password, username) => async (dispatch) => {
  dispatch(signupStart());
  try {
    const data = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, username }),
    });
    const res = await data.json();
    if (res.token) {
      toast.success("signup successfully");
      dispatch(signupSuccess());
    } else {
      dispatch(signupfailure(res.error));
      toast.error(res.error);
    }
  } catch (error) {
    console.log(error);
    dispatch(signupfailure(error.message));
  }
};
// export const updateuserdata = (quote) => async (dispatch, getstate) => {
//   const { userdata } = getstate();

//   userdata.favorite.includes(quote._id)
//     ? dispatch(Removefavorite(quote._id))
//     : dispatch(Addfavoriate(quote._id));
//   try {
//     const data = await fetch("http://localhost:3000/", {
//       headers: {
//         "Cache-Control": "no-cache",
//       },
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ userdata, quote }),
//     });
//     const res = await data.json();
//     if (res.error) {
//       toast.error(res.error);
//     }
//   } catch (error) {
//     dispatch(signinFailure(error.message));
//     toast.error(error.message);
//   }
// };

export default counterSlice.reducer;
