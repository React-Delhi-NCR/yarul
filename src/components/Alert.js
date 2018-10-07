import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ type, className, ...props }) => {
	return (
		<div className={`cm-alert ${type} ${className}`} {...props}>
			{props.children}
		</div>
	);
};

Alert.defaultProps = {
	type: '',
	className: ''
};

Alert.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string
};

export default Alert;
