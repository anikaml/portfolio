import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";
import { Button, CircularProgress } from '@mui/material/';
import DoneIcon from '@mui/icons-material/Done';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { shadowColor, successColor, errorColor } from "../../utils/colors";
import theme from '../../utils/theme';

const PREFIX = 'SubmitButton';

const classes = {
  buttonDiv: `${PREFIX}-buttonDiv`,
  submitButton: `${PREFIX}-submitButton`
};

const Root = styled('div')(() => ({
  [`& .${classes.buttonDiv}`]: {
    marginTop: "1em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  [`& .${classes.submitButton}`]: {
    borderRadius: '25px',
    width: 250,
    fontSize: "1.25em",
    textTransform: "none",
    padding: "0.25em 2em",
    boxShadow: `0px 3px 1px -2px ${shadowColor}, 0px 2px 2px 0px ${shadowColor}, 0px 1px 5px 0px ${shadowColor}`,
    transition: 'all .2s ease-in-out',
    '&:hover': {
      filter: `drop-shadow(5px 5px 10px rgba(0,0,0,.25))`,
    },
    '@media (max-width:900px)': {
      width: 'auto'
    }
  }
}));

export default function SubmitButton(props) {

  let submitButton = (
    <div className={classes.buttonDiv}>
      {props.isLoading ? (
        <Button
          disabled={props.isLoading}
          className={props.className ? props.className : classes.submitButton}
        >
          <CircularProgress
            size={33}
          />
        </Button>
      ) : (
        <Button
          disabled={props.isLoading}
          className={props.className ? props.className : classes.submitButton}
          type="submit"
          variant={props.variant ? props.variant : "contained"}
          color={props.color ? props.color : "primary"}
          disableElevation
          style={{ backgroundColor: props.success ? successColor : props.error ? errorColor : theme.palette.primary.main, borderRadius: '25px' }}
          endIcon={props.success ? <DoneIcon /> : props.error ? <PriorityHighIcon /> : <ArrowForwardIosIcon />}
          aria-label="Submit"
        >
          {props.children}
        </Button>
      )
      }
    </div>
  )

  return (
    (<Root>
      {submitButton}
    </Root>)
  );
}

SubmitButton.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
  progressCircularColor: PropTypes.string,
  success: PropTypes.bool,
  error: PropTypes.bool,
  variant: PropTypes.string,
};



