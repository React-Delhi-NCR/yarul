import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ links, className, ...props }) => {
	return (
    <header className="cm-header">
        <div className="cm-logo cm-text-large">
          <a href="#">Logo</a>
        </div>
        <nav className="cm-nav">
        <ul>
          {
            links.map(
              (link, i) => {
                return 	(
                  <li key={i}>
                    <a href="#">Link 1</a>
                  </li>
                )
              }
            )
          }
        </ul>
        </nav>
    </header>
	);
};

Header.defaultProps = {
	type: '',
	className: ''
};

Header.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string
};

export default Header;
