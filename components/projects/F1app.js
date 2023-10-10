import React from "react";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";

import { Grid } from '@mui/material/';

import { covers } from '../../components/Covers';
import FadeIn from "../style/FadeIn";
import MultiFormatPhoto from "../../components/photos/MultiFormatPhoto";
import { greyBorderColor } from "../../utils/colors";
import { MOBILE } from "../../utils/constants";

const PREFIX = 'F1app';

const classes = {
  grid: `${PREFIX}-grid`,
  image: `${PREFIX}-image`
};

const Root = styled('div')(() => ({
  [`& .${classes.grid}`]: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    margin: "2em 0 1em 0",
    [`@media (max-width:${MOBILE})`]: {
      justifyContent: "center",
    },
    /* IpadPro  Portrait */
    '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)': {
      justifyContent: "center",
    },
  },

  [`& .${classes.image}`]: {
    width: "100%",
    border: `1px solid ${greyBorderColor}`
  }
}));

export default function F1app(props) {

  const name = props.name

  return (
    (<Root>
      <Grid className={classes.grid}>
        <FadeIn>
          <MultiFormatPhoto
            alt="f1screen"
            className={classes.image}
            url={covers[name].url2}
            photoPath={`/projects/${name}`}
          />
        </FadeIn>
      </Grid>
    </Root>)
  );
}

F1app.propTypes = {
  name: PropTypes.string.isRequired,
};