import React from 'react';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  onChange,
  rows,
  cols,
  disabled,
  className,
  required,
  id
}) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={id ? id : ''}>{label}</label>}
      <textarea
        className={`form-control form-control-lg ${
          className ? className : ''
        } ${error ? 'is-invalid' : ''}`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        cols={cols}
        disabled={disabled}
        required={required}
        id={id}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.string,
  cols: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  required: PropTypes.bool,
  id: PropTypes.string
};

export default TextAreaFieldGroup;
