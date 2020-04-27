import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducers from "./ducks";

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
