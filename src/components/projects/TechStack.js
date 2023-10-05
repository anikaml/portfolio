import React from "react";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";

import { covers } from '../Covers';
import { Chip, Typography } from "@mui/material";
import { greyColor, shadowColor } from '../../utils/colors';
import FadeIn from "../../containers/style/FadeIn";

const PREFIX = 'TechStack';

const classes = {
  title: `${PREFIX}-title`,
  chip: `${PREFIX}-chip`
};

const Root = styled('div')(() => ({
  [`& .${classes.title}`]: {
    marginTop: "2em",
    color: greyColor,
    paddingBottom: "0.5em",
  },

  [`& .${classes.chip}`]: {
    margin: "0.35em 0.5em",
    padding: "0 0.5em",
    backgroundColor: "white",
    boxShadow: `0px 1px 5px 1px ${shadowColor}`,
  }
}));

export default function TechStack(props) {


  const name = props.name;

  return (
    (<Root>
      <FadeIn>
        <Typography variant="subtitle2" className={classes.title}>
          TECH STACK
        </Typography>
      </FadeIn>
      <FadeIn>
        {covers[name].tech_stack.map((stack, index) =>
          <Chip
            key={stack}
            label={covers[name].tech_stack[index]}
            size="small"
            className={classes.chip}
            classes={{
              root: classes.root
            }}
          />
        )}
      </FadeIn>
    </Root>)
  );
}

TechStack.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string.isRequired,
};