import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const render = () => {
	let route = window.location.hash.substr(1);
	ReactDOM.render(<App route={route} />, document.getElementById('root'));
}

window.addEventListener('hashcange', render);
render();
registerServiceWorker();
