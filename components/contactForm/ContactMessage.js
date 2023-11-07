
import React from "react";
import PropTypes from "prop-types";

const ContactMessage = ({ disabled, className, onChange, value, labelClassName }) => {
  return (
    <>
      <label className={labelClassName}>
        Message
        <textarea
          name="message"
          id="message"
          disabled={disabled}
          className={className}
          onChange={onChange}
          placeholder="Message"
          required
          rows={6}
          cols={40}
          minLength={10}
          maxLength={1000}
          value={value}
        />
      </label>
    </>
  );
}

ContactMessage.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  labelClassName: PropTypes.string
};

export default ContactMessage;
