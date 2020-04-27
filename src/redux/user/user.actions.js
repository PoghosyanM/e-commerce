import userActionsTypes from "./user.types";

export const googleSignInStart = () => ({
  type: userActionsTypes.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: userActionsTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: userActionsTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: userActionsTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});
