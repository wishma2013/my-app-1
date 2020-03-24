import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import { LOGOUT, LOGIN } from './constants';

export type LoginAction = ActionType<typeof actions>;

export type LoginState = {
  readonly reduxLogin: number;
};

export default combineReducers<LoginState, LoginAction>({
  reduxLogin: (state = 0, action) => {
    switch (action.type) {
      case LOGIN:
        return state + 1; // action: { type: "LOGIN"; }

      case LOGOUT:
        return state + action.payload; // action: { type: "LOGOUT"; payload: number; }

      default:
        return state;
    }
  },
});
