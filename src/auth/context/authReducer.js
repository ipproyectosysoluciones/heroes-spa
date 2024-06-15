import { types } from "../types/types";

/* const initialState = {
  logged: false,
  name: '',
  email: '',
}; */

export const authReducer = ( state = {}, action ) => {

  switch ( action.type ) {
    case types.login:
      return {
        ...state,
        logged: true,
        name: action.payload,
      };

    case types.logout:
      return state;
  
    default:
      return state;
  };
};
