import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Steps.css';

export default class Steps extends Component {

  render() {
    const { steps, active } = this.props;
    return (
      <div className="steps">
        <ul className="progressbar">
          {
            steps.map((item, i) => {
              return (
                <li
                  key={i}
                  className={i < active ? 'active' : null}
                >
                  <div className="before">{i}</div>
                  {item.title}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
};

Steps.propTypes = {
  steps: PropTypes.array,
  current: PropTypes.number,
  variant: PropTypes.string,

};

Steps.defaultProps = {
  list: [],
  current: 1
};