import React  from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './redux/store';
import App from './App/App';

const initApplication = (
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
);

ReactDom.render(initApplication, document.getElementById('root'));




