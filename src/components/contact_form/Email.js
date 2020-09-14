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
    },
  },
}))

export default function Email(props) {
  const classes = useStyles();
  return (
    <TextValidator
      className={props.className ? props.className : classes.textField}
      color={props.color ? props.color : "secondary"}
      disabled={props.disabled}
      errorMessages={['Email is required', 'Please enter a valid email']}
      helperText={props.helperText ? props.helperText : null}
      id="email"
      label="Email"
      onChange={props.onChange}
      type="email"
      validators={['required', 'isEmail']}
      value={props.value}
      variant={props.variant ? props.variant : "standard" }
    />
  );
}

Email.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  helperText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  variant: PropTypes.string,
};