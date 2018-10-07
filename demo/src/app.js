import React from 'react';
import ReactDOM from 'react-dom';
import demoImage from '../assets/tech.jpg';

import { Steps } from '../../src/index';

ReactDOM.render(
	<div>
    <h1>Hello</h1>
		<Steps steps={[
      { title: 'Signup' },
      { title: 'Login' },
      { title: 'Profile' },
      { title: 'Something' },
      { title: 'Signup' },
      { title: 'Login' },
      { title: 'Profile' },
      { title: 'Something' },
    ]} active={3}>

		</Steps>
	</div>,
	document.getElementById('root')
);
