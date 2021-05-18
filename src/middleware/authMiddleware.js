import { AUTHENTICATE, logIn, logInError } from "../actions";
import {apiLogIn} from '../api';

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const {email, password} = action.payload;
    const data = await apiLogIn(email, password)
    if(data.success){
      store.dispatch(logIn(data.token));
    } else {
      store.dispatch(logInError(data.error));
    }
  } else {
    next(action);
  }
};
