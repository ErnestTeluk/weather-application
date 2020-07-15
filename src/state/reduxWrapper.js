import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "state/reducers";

const windowGlobal = typeof window !== "undefined" && window;
const composeEnhancers =
  windowGlobal.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = () =>
  createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

// eslint-disable-next-line react/prop-types
export default ({ element }) => <Provider store={store()}>{element}</Provider>;
