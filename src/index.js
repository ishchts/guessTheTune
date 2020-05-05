import React  from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import api from './API/api';

// console.log(api.get('/questions').then(res => console.log(res)));

import store from './redux/store';
import App from './App/App';

const initApplication = (
	<Provider store={store} >
		<App />
	</Provider>
);

render(initApplication, document.getElementById('root'));




