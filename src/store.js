import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import authMiddleware from "./middleware";

export const store = createStore(reducer,applyMiddleware(authMiddleware));
