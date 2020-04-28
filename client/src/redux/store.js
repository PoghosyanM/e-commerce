import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root.reducer";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootSagas from "./root-sagas";
const sagasMiddleware = createSagaMiddleware();

const middlewares = [sagasMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagasMiddleware.run(rootSagas);
const persistor = persistStore(store);

export default { store, persistor };
