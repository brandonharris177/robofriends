import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 
import { searchRobots, requestRobots } from './reducers';
import { createLogger } from "redux-logger"
import thunk_middleware from "redux-thunk";

const logger = createLogger();

const rootReducers = combineReducers({ searchRobots, requestRobots})

const store = createStore(rootReducers, applyMiddleware(thunk_middleware, logger))

ReactDOM.render(
    <Provider store = {store}> 
        <App /> 
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
