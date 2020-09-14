
import React from "react";
import PropTypes from "prop-types";

import { TextValidator} from 'react-material-ui-form-validator';
import { makeStyles } from '@material-ui/core/styles';

import { greyColor } from '../../utils/colors';

const useStyles = makeStyles(() => ({
  textField: {
    width: "100%",
    borderRadius: "4px",
    transition: "box-shadow 150ms ease",
    '& .MuiInput-underline:before': { // field underline
      borderBottom: `1px solid ${greyColor}`,
    },
    '& .MuiInputLabel-formControl': {
      color: greyColor,
    },
    '& .MuiIconButton-label': {
      color: greyColor,
    },
    '& .MuiFormHelperText-root ': {
      color: greyColor,
    }
  },
}))

export default function ContactMessage(props) {
  const classes = useStyles();
  return (
    <TextValidator
      className={props.className ? props.className : classes.textField}
      color={props.color ? props.color : "secondary"}
      disabled={props.disabled}
      errorMessages={['Message is required', 'Message too long']}
      id="message"
      label="Message"
      margin="normal"
      multiline
      onChange={props.onChange}
      rows={4}
      rowsMax={8}
      type="text"
      validators={['required', 'maxStringLength:800']}
      value={props.value}
      variant={props.variant ? props.variant : "standard"}
    />
  );
}

ContactMessage.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  variant: PropTypes.string,
};