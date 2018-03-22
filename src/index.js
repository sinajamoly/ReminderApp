import ReactDom from 'react-dom';
import React from 'react';
import App from './component/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer/index';
import './index.css';

const store =createStore(reducer);

ReactDom.render(<Provider store={store}><App/></Provider>,document.getElementById('root'));