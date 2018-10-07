import React from 'react';
import ReactDOM from 'react-dom';
import demoImage from '../assets/tech.jpg';
import { Alert, Sidebar } from '../../src/index';

ReactDOM.render(
	<div style={{ width: '500px', margin: '50px auto' }}>
		<Alert type="primary" className="mt-20">
			Primary Alert
		</Alert>
		<Sidebar link={'Anil Kumar'}></Sidebar>
	</div>,
	document.getElementById('root')
);
