import { createStore, applyMiddleware } from "redux";
import reducer from "./ui/components/reducers";
import authMiddleware from "./ui/components/middleware";

export const store = createStore(reducer,applyMiddleware(authMiddleware));
