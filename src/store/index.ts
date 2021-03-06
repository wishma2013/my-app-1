import { RootAction, RootState, Services } from 'MyTypes';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';

import { composeEnhancers } from './utils';
import rootReducer from './root-reducer';
// import rootEpic from './root-epic';
import services from '../services';

//导航热替换组件时，恢复状态的工具 2020-03-19 17:15:06
import resetEnhancer from '../enhancer/reset.js';

// browser history
export const history = createBrowserHistory();

export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Services
>({
  dependencies: services,
});

const routerMiddleware = createRouterMiddleware(history);

// configure middlewares
const middlewares = [epicMiddleware, routerMiddleware];
// const middlewares = [routerMiddleware];
// compose enhancers
const enhancer = composeEnhancers(resetEnhancer, applyMiddleware(...middlewares));

// rehydrate state on app start
const initialState = {};

// create store
const store = createStore(rootReducer(history), initialState, enhancer);
// epicMiddleware.run(rootEpic);

// export store singleton instance
export default store;
