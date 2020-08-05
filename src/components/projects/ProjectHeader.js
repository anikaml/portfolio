import React from "react";
import PropTypes from "prop-types";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core/';

import { covers } from '../../components/Covers';
import { greyColor } from '../../utils/colors';
import FadeIn from "../../containers/style/FadeIn";

const useStyles = makeStyles(() => ({
  grid: {
    display: "flex",
  },
  title: {
    color: greyColor,
    paddingBottom: "0.5em",
  },
  text: {
    fontWeight: 300,
  },
}))

export default function ProjectHeader(props) {
  
  const classes = useStyles();
  
  return (
    <>
      <Grid
        container
        className={classes.grid}
        spacing={2}
      >
        <Grid item xs={12} sm={3}>
        <FadeIn>
          <Typography variant="subtitle2" className={classes.title}>
            PROJECT
          </Typography>
          <Typography variant="subtitle2" className={classes.text} style={{fontWeight: 500, paddingRight: "0.5em"}}>
            {covers[props.index].project}
          </Typography>
          </FadeIn>
        </Grid>
        <Grid item xs={12} sm={9} zeroMinWidth>
        <FadeIn>
          <Typography variant="subtitle2" className={classes.title}>
            DETAILS
          </Typography>
          <Typography variant="subtitle2" className={classes.text}>
            {covers[props.index].details}
          </Typography>
          </FadeIn>
        </Grid>
      </Grid>
    </>
  )
}

ProjectHeader.propTypes = {
  index: PropTypes.string.isRequired,
};