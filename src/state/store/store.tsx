import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "../reducer/combinedReducers";

const middleware = [thunk];

// this will allow to render the states onto reduxdevtool
const composeEnhancer =
  (window && (window as any)).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  {},
  composeEnhancer(applyMiddleware(...middleware))
);
