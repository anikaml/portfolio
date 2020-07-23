import React from "react";
import PropTypes from "prop-types";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';

import { covers } from '../Covers';
import { Chip, Typography } from "@material-ui/core";
import { greyColor, shadowColor } from '../../utils/colors';

const useStyles = makeStyles(() => ({
  title: {
    marginTop: "2em",
    color: greyColor,
    paddingBottom: "0.5em",
  },
  chip: {
    margin: "0.35em 0.5em",
    padding: "0 0.5em",
    backgroundColor: "white",
    boxShadow: `0px 1px 5px 1px ${shadowColor}`,
  }
}))

export default function TechStack(props) {
  
  const classes = useStyles();
  const name = props.name;
  
  return (
    <>
      <Typography variant="subtitle2" className={classes.title}>
        TECH STACK
      </Typography>
      {covers[name].tech_stack.map((stack, index) => 
        <Chip
          label={covers[name].tech_stack[index]}
          size="small"
          className={classes.chip}
          classes={{
            root: classes.root
          }}
        />
      )}
    </>
  )
}

TechStack.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string.isRequired,
};