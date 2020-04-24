import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "./../../firebase/firebase.utils";
import { takeLatest, call, put, all } from "redux-saga/effects";
import userActionsTypes from "./user.types";
import { googleSignInSuccess, googleSignInFailure } from "./user.actions";

function* signInWithGoolge() {
  try {
    let { user } = yield auth.signInWithPopup(googleProvider);
    let userRef = yield call(createUserProfileDocument, user);
    const { id, data } = yield userRef.get();
    yield put(googleSignInSuccess({ id, ...data }));

    console.log(user);
  } catch (error) {
    yield googleSignInFailure(error);
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(userActionsTypes.GOOGLE_SIGN_IN_START, signInWithGoolge);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
