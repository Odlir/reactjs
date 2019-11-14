import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import App from "./App";
import Movies from "./components/movies";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Movies />, document.getElementById('root'));
serviceWorker.unregister();
