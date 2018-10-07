import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ type, placeholder, className, options, ...props }) => {
  if (type === 'select') {
    return (
      <div className={`cm-select-input ${className}`}>
        <select {...props}>
          {options.map(({ value, name }, index) => (
            <option key={`${name}-${index}`} value={value}>
              {name}
            </option>
          ))}
        </select>
      </div>
    );
  } else if (type === 'textarea') {
    return (
      <textarea
        className={className}
        placeholder={placeholder || 'Enter text'}
        {...props}
      />
    );
  } else if (type === 'file') {
    return (
      <div className="cm-file-input">
        <div className="file-input-label">{placeholder || 'Upload a file'}</div>
        <input type={type} />
      </div>
    );
  } else {
    return (
      <input
        type={type}
        className={className}
        placeholder={placeholder || `Enter ${type}`}
        {...props}
      />
    );
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
  placeholder: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

FormInput.defaultProps = {
  placeholder: '',
  className: '',
  options: [{ value: '', name: 'Select an option' }],
};

export default FormInput;
