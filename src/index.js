import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/index.js'
import './index.css';
import App from './components/App';
import ScreensRoot from './screens/Root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ScreensRoot />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
