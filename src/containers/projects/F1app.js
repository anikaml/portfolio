import React from "react";
import PropTypes from "prop-types";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';

import { covers } from '../../components/Covers';
import FadeIn from "../style/FadeIn";
import MultiFormatPhoto from "../../components/photos/MultiFormatPhoto";
import { greyBorderColor } from "../../utils/colors";

const useStyles = makeStyles(() => ({
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    margin: "2em 0 1em 0",
    '@media (max-width:900px)': {
      justifyContent: "center",
    },
     /* IpadPro  Portrait */
     '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)': {
      justifyContent: "center",
    },
  },
  image: {
    width: "100%",
    border: `1px solid ${greyBorderColor}`
  },
}))

export default function F1app(props) {
  const classes = useStyles();
  const name = props.name
  
  return (
    <>
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
    </>
  )
}

F1app.propTypes = {
  name: PropTypes.string.isRequired,
};