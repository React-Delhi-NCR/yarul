import React from 'react';
import ReactDOM from 'react-dom';
import demoImage from '../assets/tech.jpg';
import { Alert, Header, CSSMintHeader } from '../../src/index';

ReactDOM.render(
	<div style={{ width: '500px', margin: '50px auto' }}>
		<Alert type="primary" className="mt-20">
			Primary Alert!
		</Alert>

		<div className="box">
		<h3>GitHub Header</h3>
			<Header links={['one', 'two', 'three', 'four']}/>
		</div>

		<div className="box">
			<h3>CSSMintHeader</h3>
			<CSSMintHeader links={['one', 'two', 'three', 'four']} />
		</div>
	</div>,
	document.getElementById('root')
);
