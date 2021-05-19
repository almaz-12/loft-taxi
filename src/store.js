import { createStore, applyMiddleware } from "redux";
import reducer from "./components/reducers";
import authMiddleware from "./components/middleware";

export const store = createStore(reducer,applyMiddleware(authMiddleware));
