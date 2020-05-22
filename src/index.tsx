//add by eilir 2020-03-25 20:13:28
//把这行导入移动到顶部 - by eilir 2020-03-28 09:52:06
import Enter from './enter'
import * as React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { endpoints, rootElement, helpPhone, appName } from './constants/ActorAppConstants'
import defaultLogHandler from './utils/defaultLogHandler';

console.log("index.tsx ", "开始引入了-import Actor from 'actor-js'");
if (window.location.hash !== '#/deactivated') {
  // if (crosstab.supported) crosstab.broadcast(ACTOR_INIT_EVENT, {});
  // var client = new Actor();
  const app = new Enter({
    // delegate,
    endpoints: [
      'wss://ws-mtproto.example.com'
    ],
    isExperimental: true,
    facebook: 'actorapp',
    twitter: 'actorapp',
    homePage: 'https://actor.im'
  });
  
  app.start();
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
