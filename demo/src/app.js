import React from 'react';
import ReactDOM from 'react-dom';
import demoImage from '../assets/tech.jpg';
import MessageBarUsage from './MessageBarUsage';
import { Alert, Sidebar, Header, CSSMintHeader, Steps, FormInput } from '../../src/index';

ReactDOM.render(
	<div style={{ width: '500px', margin: '50px auto' }}>
		<Alert type="primary" className="mt-20">
			SEcondaary
		</Alert>
		<MessageBarUsage />
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '400px',
        justifyContent: 'space-between',
      }}
    >
      <FormInput
        type="text"
        placeholder="text input"
        onChange={event => {
          console.log(event.target.value);
        }}
      />

      <div>
        <span>Left</span>
        <FormInput type="radio" value="left" name="side" />
        <span>Right</span>
        <FormInput type="radio" value="right" name="side" />
      </div>

      <div>
        <span>Single</span>
        <FormInput type="checkbox" value="single" name="numbers" />
        <span>Multiple</span>
        <FormInput type="checkbox" value="multiple" name="numbers" />
      </div>

      <FormInput type="file" />

      <FormInput type="file" placeholder="upload image" />

      <FormInput
        type="select"
        options={[{ value: '0', name: 'zero' }, { value: '1', name: 'one' }]}
      />

      <FormInput type="select" />

      <FormInput type="textarea" />

      <FormInput type="password" />
    </form>
  
		<div className="box">
		<h3>GitHub Header</h3>
			<Header links={['one', 'two', 'three', 'four']}/>
		</div>

		<div className="box">
			<h3>CSSMintHeader</h3>
			<CSSMintHeader links={['one', 'two', 'three', 'four']} />
		</div>
  
		<Sidebar link={'Anil Kumar'}></Sidebar>
		<Steps steps={[
      { title: 'Signup' },
      { title: 'Login' },
      { title: 'Profile' },
      { title: 'Something' },
      { title: 'Signup' },
      { title: 'Login' },
      { title: 'Profile' },
      { title: 'Something' },
    ]} active={3}></Steps>
	</div>,
	document.getElementById('root')
);
