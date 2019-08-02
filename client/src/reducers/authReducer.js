import { SIGN_IN, SIGN_OUT } from "../actions/types";

const defaultAuthStatus = {
  isSignedIn: false
};

export default (authStatus = defaultAuthStatus, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        isSignedIn: true,
        userId: action.payload
      };
    case SIGN_OUT:
      return {
        isSignedIn: false
      };
    default:
      return authStatus;
  }
};
