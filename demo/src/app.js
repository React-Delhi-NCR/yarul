import React from 'react';
import ReactDOM from 'react-dom';
import demoImage from '../assets/tech.jpg';
import { Alert, FormInput } from '../../src/index';

ReactDOM.render(
  <div style={{ width: '500px', margin: '50px auto' }}>
    <Alert type="primary" className="mt-20">
      Primary Alert
    </Alert>
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

      <FormInput
        type="select"
        options={[{ value: '0', name: 'zero' }, { value: '1', name: 'one' }]}
      />

      <FormInput type="textarea" />

      <FormInput type="password" placeholder="password" />
    </form>
  </div>,
  document.getElementById('root')
);
