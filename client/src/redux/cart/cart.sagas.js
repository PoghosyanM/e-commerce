import { takeLatest, put, call, all } from "redux-saga/effects";
import { clearCart } from "./cart.actions";
import userActionsTypes from "../user/user.types";

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(userActionsTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
