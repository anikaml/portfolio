import React from "react";
import PropTypes from "prop-types";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';

import { covers } from '../../components/Covers';
import FadeIn from "../../containers/style/FadeIn";
import MultiFormatPhoto from "../photos/MultiFormatPhoto";
import { isMobileOnly } from "react-device-detect";

const useStyles = makeStyles(() => ({
  img: {
    maxHeight: isMobileOnly ? 150 : 300,
    padding: '0.5em',
    display: 'block',
  },
  morphDiv: {
    display: "flex",
    justifyContent: "center",
    flexWrap: 'wrap',
  },
}))

export default function BokiemResponsive(props) {
  const classes = useStyles();
  const name = props.name;
  
  return (
    <>
      <Grid item className={classes.morphDiv}>
        <FadeIn>
          <MultiFormatPhoto
            alt="desktop"
            className={classes.img}
            url={covers[name].url2}
            photoPath={`/projects/${name}`}
          />
        </FadeIn>
        <FadeIn>
          <MultiFormatPhoto
            alt="mobile"
            className={classes.img}
            url={covers[name].url3}
            photoPath={`/projects/${name}`}
          />
        </FadeIn>
      </Grid>
    </>
  )
}

BokiemResponsive.propTypes = {
  name: PropTypes.string.isRequired,
};