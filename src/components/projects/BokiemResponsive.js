import React from "react";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";
import { Grid } from '@mui/material/';
import { covers } from '../../components/Covers';
import FadeIn from "../../containers/style/FadeIn";
import MultiFormatPhoto from "../photos/MultiFormatPhoto";
import { isMobileOnly } from "react-device-detect";

const PREFIX = 'BokiemResponsive';

const classes = {
  img: `${PREFIX}-img`,
  gridContainer: `${PREFIX}-gridContainer`
};

const Root = styled('div')(() => ({
  [`& .${classes.img}`]: {
    maxHeight: isMobileOnly ? 150 : 300,
    padding: '0.5em',
    display: 'block',
  },

  [`& .${classes.gridContainer}`]: {
    display: "flex",
    justifyContent: "center",
    flexWrap: 'wrap',
  }
}));

export default function BokiemResponsive(props) {

  const { name } = props;

  return (
    (<Root>
      <Grid item className={classes.gridContainer}>
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
    </Root>)
  );
}

BokiemResponsive.propTypes = {
  name: PropTypes.string.isRequired,
};