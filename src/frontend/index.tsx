import React from 'react';

import App from './containers/App';
import { Provider } from 'react-redux';
import getStore from './store';
import {createRoot} from 'react-dom/client'






const rootContainer = document.getElementById('root')


const root = createRoot( rootContainer!)

root.render(
    <Provider store ={getStore()}>
        <App/>
        </Provider>

);
