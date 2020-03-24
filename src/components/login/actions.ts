/* eslint-disable */
import { LOGIN, LOGOUT } from './constants';
import { createAction } from 'typesafe-actions';
import { LoginBus } from './models';

export const emptyAction = createAction(LOGIN)<void>();
export const payloadLoginAction = createAction(LOGIN)<number>();
export const payloadLogoutAction = createAction(LOGOUT)<number>();
// export const payloadMetaAction = createAction(ADD)<number, string>();

export const payloadCreatorAction = createAction(
  'LOGIN_BUS',
  (login: LoginBus) => login.level
)<string>();
