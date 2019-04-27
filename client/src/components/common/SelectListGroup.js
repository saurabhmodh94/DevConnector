import React from 'react';
import PropTypes from 'prop-types';

const SelectListGroup = ({
  name,
  value,
  error,
  info,
  onChange,
  options,
  label,
  disabled,
  className,
  required,
  id
}) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="form-group">
      {label && <label htmlFor={id ? id : ''}>{label}</label>}
      <select
        className={`form-control form-control-lg ${
          className ? className : ''
        } ${error ? 'is-invalid' : ''}`}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        id={id}
      >
        {selectOptions}
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  required: PropTypes.bool,
  id: PropTypes.string
};

export default SelectListGroup;
