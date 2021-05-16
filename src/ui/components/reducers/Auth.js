import { LOG_IN, LOG_OUT } from "../actions";

const initState = {
  isLoggedIn: false
};

export default function(state = initState, action) {
  switch (action.type) {
    case LOG_IN: {
      return {isLoggedIn: true}
    }
    case LOG_OUT: {
      return {isLoggedIn: false}
    }
    default:
      return state;
  }
}
