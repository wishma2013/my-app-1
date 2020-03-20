import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router'
import logo from './logo.svg';
import './App.css';
import store, { history }  from './store';
import Home from './routes/Home';
import Counter from './routes/Counter';

import loadable from '@loadable/component'

//用loadable改写懒加载模块代码  2020-03-19 15:22:59
type AsyncPageProp = {
  page: string;
}
type AsyncPageModule = {
  page: () => React.ComponentType;
  reducer: ({},{}) => {};
  stateKey: string;
  initState: () => void;
}
const win = window;

const AsyncPage = loadable((props: AsyncPageProp) => import(/* webpackChunkName: "AsyncPage" */`./pages/${props.page}`).then(({page, reducer, initState, stateKey}) => page), {
  cacheKey: props => props.page,
});

// const LoadCounter = loadable((props: string) => {
//   return import(/* webpackChunkName: "AsyncPage" */'./pages/CounterPage').then(({page, reducer, initState, stateKey}) => page as unknown as React.ComponentClass<number>);
// })

// const AsyncPage = loadable(
//   (props: AsyncPageProp) => {
//     return import(`./pages/${props.page}`).then((module: AsyncPageModule) =>{
//       const {page, reducer, stateKey, initState} = module;
//       console.log(module);
//       const dehydratedState = (win && win.DEHYDRATED_STATE);
//       const state = store.getState();
//       const mergedState = {...dehydratedState, ...state};
//       const statePromise = mergedState[stateKey]
//         ? Promise.resolve(mergedState[stateKey])
//         : initState();

//       statePromise.then((result) => {
//         store.reset(combineReducers({
//           // ...store._reducers,
//           [stateKey]: reducer
//         }), {
//           ...state,
//           [stateKey]: result
//         });
//       })
//       return page;
//   })
// }
// )


// const getCounterPage = (nextState, callback: Function) => {
//   require.ensure([], function(require) {
//     const {page, reducer, stateKey, initState} = require('./pages/CounterPage.js');
//     const dehydratedState = (win && win.DEHYDRATED_STATE);
//     const state = store.getState();
//     const mergedState = {...dehydratedState, ...state};
//     const statePromise = mergedState[stateKey]
//       ? Promise.resolve(mergedState[stateKey])
//       : initState();

    // statePromise.then((result) => {
    //   store.reset(combineReducers({
    //     ...store._reducers,
    //     [stateKey]: reducer
    //   }), {
    //     ...state,
    //     [stateKey]: result
    //   });

    //   callback(null, page);
    // });
//   }, 'counter');
// };

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
      <img src={logo} className="App-logo" alt="logo" />
        <>{ /* your usual react-router v4/v5 routing */ }
        <Route exact path="/" component={Home} />
        {/* <Route path="/c" component={Counter} /> */}
        <Route path="/c" >
            <AsyncPage page='CounterPage'/>
            {/* <LoadCounter props="0"/> */}
        </Route>
        </>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
