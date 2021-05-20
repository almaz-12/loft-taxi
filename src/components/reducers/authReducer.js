import { LOG_IN, LOG_OUT, LOG_IN_ERROR } from "../actions";

const initState = {
  isLoggedIn: !!localStorage.getItem("token"),
  token: localStorage.getItem("token"),
  error: null
};

export default function(state = initState, action) {
  switch (action.type) {
    case LOG_IN: {
      return {...state, isLoggedIn: true, token: action.payload }
    }
    case LOG_IN_ERROR: {
      return {...state, isLoggedIn: false, error: action.payload, token: null }
    }
    case LOG_OUT: {
      return {isLoggedIn: false}
    }
    default:
      return state;
  }
}
