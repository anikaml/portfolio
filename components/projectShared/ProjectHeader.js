import React from "react";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";

import { Grid, Typography } from '@mui/material/';

import { covers } from '../../components/Covers';
import { greyColor } from '../../utils/colors';
import FadeIn from "../../components/style/FadeIn";

const PREFIX = 'ProjectHeader';

const classes = {
  grid: `${PREFIX}-grid`,
  title: `${PREFIX}-title`,
  text: `${PREFIX}-text`
};

const Root = styled('span')(() => ({
  [`& .${classes.grid}`]: {
    display: "flex",
  },

  [`& .${classes.title}`]: {
    color: greyColor,
    paddingBottom: "0.5em",
  },

  [`& .${classes.text}`]: {
    // fontWeight: 300,
    fontSize: '1.25rem',
    lineHeight: '1.6rem'
  }
}));

export default function ProjectHeader(props) {
  return (
    (<Root>
      <Grid
        container
        className={classes.grid}
        spacing={2}
      >
        <Grid item xs={12} sm={9} zeroMinWidth>
          <FadeIn>
            <Typography variant="subtitle2" className={classes.title}>
              DETAILS
            </Typography>
            <Typography variant="body1" className={classes.text}>
              {covers[props.index].details}
            </Typography>
          </FadeIn>
        </Grid>
      </Grid>
    </Root>)
  );
}

ProjectHeader.propTypes = {
  index: PropTypes.string.isRequired,
};