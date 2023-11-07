import React from "react";
import PropTypes from "prop-types";

const Email = ({ disabled, className, onChange, value, labelClassName }) => {
  return (
    <>
      <label className={labelClassName}>
        Email
        <input
          autoFocus
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          disabled={disabled}
          className={className}
          onChange={onChange}
          required
          value={value}
        />
      </label>
    </>
  );
}

Email.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  isLoading: PropTypes.bool
};

export default Email;
