import Actor from 'actor-js';
import { endpoints, rootElement, helpPhone, appName } from './constants/ActorAppConstants'
import defaultLogHandler from './utils/defaultLogHandler';
import assignDeep from 'assign-deep';

export let messenger: Actor;

export default class Enter{
    static defaultOptions = {
        endpoints,
        rootElement,
        appName,
        helpPhone,
        homePage: null,
        twitter: null,
        facebook: null,
        delegate: null,
        forceLocale: null,
        features: {
          calls: true,
          search: false,
          editing: false
        },
        routes: null,
        isExperimental: false,
        logHandler: defaultLogHandler
      };
    constructor(options = {}) {
        assignDeep(this, Enter.defaultOptions, options);
    
        // if (!this.delegate) {
        //   this.delegate = new SDKDelegate();
        // }
    
        // DelegateContainer.set(this.delegate);
    
        // if (this.delegate.l18n) extendL18n();
    
        // SharedContainer.set(this);
    }

    start(){
        messenger = Actor.create({
        endpoints: Enter.defaultOptions.endpoints,
        logHandler: Enter.defaultOptions.logHandler
      });
    }
}