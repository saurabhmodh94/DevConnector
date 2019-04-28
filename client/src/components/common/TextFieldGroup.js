import React from 'react';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled,
  className,
  required,
  id,
  checked
}) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={id ? id : ''}>{label}</label>}
      <input
        type={type}
        className={`form-control form-control-lg ${
          className ? className : ''
        } ${error ? 'is-invalid' : ''}`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        id={id}
        checked={checked}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  required: PropTypes.bool,
  id: PropTypes.string,
  checked: PropTypes.bool
};

TextFieldGroup.defaultProps = {
  type: 'text'
}; // tip

export default TextFieldGroup;
