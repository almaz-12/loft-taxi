import { AUTHENTICATE, logIn } from "../actions";
import apiLogIn from '../api'

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const {email, password} = action.payload;
    const success = await apiLogIn(email, password)
    if(success){
      store.dispatch(logIn())
    }
  } else {
    next(action);
  }
};