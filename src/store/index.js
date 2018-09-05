import { createStore, compose, applyMiddleware } from "redux";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const historyMiddleware = routerMiddleware(createHistory());
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk), applyMiddleware(historyMiddleware))
);

export default store;
