import React from 'react';
import PropTypes from "prop-types";

import { motion } from "framer-motion"
import { useMorph } from 'react-morph';

import { Button, CircularProgress } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { shadowColor, successColor, errorColor } from "../../utils/colors";
import theme from '../../utils/theme';

const useStyles = makeStyles(() => ({
  buttonDiv: {
    marginTop: "1em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    borderRadius: 50,
    minWidth: 250,
    fontSize: "1.25em",
    textTransform: "none",
    padding: "0.25em 2em",
    boxShadow: `0px 3px 1px -2px ${shadowColor}, 0px 2px 2px 0px ${shadowColor}, 0px 1px 5px 0px ${shadowColor}`,
    transition: 'all .2s ease-in-out',
    '&:hover': {
      filter: `drop-shadow(5px 5px 10px rgba(0,0,0,.25))`,
    }
  },
}));

export default function SubmitButton(props) {
  const classes = useStyles();
  const morph = useMorph();

  let submitButton = (
    <div className={classes.buttonDiv}>
      {props.isLoading ? (
        <Button {...morph}
          disabled={props.isLoading}
          className={ props.className ? props.className : classes.submitButton }
        >
          <CircularProgress 
            size={33}
          />
        </Button>
         ) : (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
          >
            <Button {...morph}
              disabled={props.isLoading}
              className={ props.className ? props.className : classes.submitButton }
              type="submit"
              variant={ props.variant ? props.variant : "contained" }
              color={ props.color ? props.color : "primary" }
              disableElevation
              style={{backgroundColor: props.success? successColor : props.error? errorColor : theme.palette.primary.main}}
              endIcon={props.success? <DoneIcon/> : props.error? <PriorityHighIcon/> : <ArrowForwardIosIcon/>}
            >
              {props.children}
            </Button>
          </motion.div>
        )
      }
    </div>
  )
 
  return (
    <>
      {submitButton}
    </>
  )
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



