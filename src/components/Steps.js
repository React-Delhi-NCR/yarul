import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Steps.css';

export default class Steps extends Component {

  render() {
    const { steps, active } = this.props;
    return (
      <div>
        <ul className="progressbar">
          {
            steps.map((item, i) => {
              return (
                <li
                  key={i} style={{ width: (100 / steps.length) + '%' }}
                  className={i < active ? 'active' : null}
                >
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