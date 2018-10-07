import React from 'react';
import ReactDOM from 'react-dom';
import demoImage from '../assets/tech.jpg';
import { Alert } from '../../src/index';
import MessageBarUsage from './MessageBarUsage';

ReactDOM.render(
	<div style={{ width: '500px', margin: '50px auto' }}>
		<Alert type="primary" className="mt-20">
			SEcondaary
		</Alert>
		<MessageBarUsage />
	</div>,
	document.getElementById('root')
);
