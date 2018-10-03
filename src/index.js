import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import './custom.scss';
import './styles/customToggleSwitch.css';
import './styles/toggleSwitch.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
