import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/App';
import reducer from './reducers';
import 'todomvc-app-css/index.css';


const store = createStore(reducer)

render(
        <Provider store={store}>
            <App/>
        </Provider>
    , document.getElementById('root')
)