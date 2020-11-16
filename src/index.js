import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 
import { searchRobots } from './reducers';

const rootReducers = combineReducers({ searchRobots})

const store = createStore(rootReducers)

ReactDOM.render(
    <Provider store = {store}> 
        <App /> 
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
