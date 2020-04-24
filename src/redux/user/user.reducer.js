import userActionsTypes from "./user.types";

const initialState = {
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionsTypes.GOOGLE_SIGN_IN_SUCCESS:
    case userActionsTypes.EMAIL_SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload, error: null };
    case userActionsTypes.GOOGLE_SIGN_IN_FAILURE:
    case userActionsTypes.EMAIL_SIGN_IN_FAILURE:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default userReducer;
