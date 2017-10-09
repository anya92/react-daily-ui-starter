import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './styles/styles.sass';
import App from './components/App';

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('root')
	)
};

render(App);

if (module.hot) {
	module.hot.accept('./components/App', () => { render(App) })
}
