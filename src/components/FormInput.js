import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ type, label, className, options, ...props }) => {
  if (type === 'select') {
    return (
      <div className={`cm-select-input ${className}`}>
        <select {...props}>
          {options.map(({ value, name }, index) => (
            <option key={`${name}-${index}`} value={value}>{name}</option>
          ))}
        </select>
      </div>
    );
  } else if (type === 'textarea') {
    return <textarea className={className} {...props} />;
  } else if (type === 'file') {
    return (
      <div className="cm-file-input">
        <div className="file-input-label">{label}</div>
        <input type={type} />
      </div>
    );
  } else {
    return <input type={type} className={className} {...props} />;
  }
};

FormInput.propTypes = {
  type: PropTypes.oneOf([
    'text',
    'radio',
    'checkbox',
    'number',
    'search',
    'email',
    'password',
    'url',
    'tel',
    'file',
    'select',
    'textarea',
  ]).isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

FormInput.defaultProps = {
  label: 'Upload a file',
  className: '',
};

export default FormInput;
