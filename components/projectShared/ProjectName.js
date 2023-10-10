import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from '@mui/material/';
import { styled } from '@mui/material/styles';
import { covers } from '../../components/Covers';
import { greyColor } from '../../utils/colors';
import FadeIn from "../../components/style/FadeIn";

const PREFIX = 'ProjectName';

const classes = {
  title: `${PREFIX}-title`,
  text: `${PREFIX}-text`
};

const Root = styled('span')(() => ({
  [`& .${classes.title}`]: {
    color: greyColor,
    paddingBottom: "0.5em",
  },

  [`& .${classes.text}`]: {
    fontWeight: 300,
  }
}));

const ProjectName = ({ index }) => {
  return (
    <Root>
      <Grid item xs={12}>
        <FadeIn>
          <Typography variant="subtitle2" className={classes.title}>
            PROJECT
          </Typography>
          <Typography
            variant="subtitle2"
            className={classes.text}
            style={{ fontWeight: 400, paddingRight: "0.5em", overflowWrap: 'break-word' }}
          >
            {covers[index].project}
          </Typography>
        </FadeIn>
      </Grid>
    </Root>
  )
};

ProjectName.propTypes = {
  index: PropTypes.string
};

export default ProjectName;
