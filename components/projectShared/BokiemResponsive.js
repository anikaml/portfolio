import React from "react";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";
import { Grid } from '@mui/material/';
import { covers } from '../../components/Covers';
import FadeIn from "../../components/style/FadeIn";
import MultiFormatPhoto from "../photos/MultiFormatPhoto";
import { MOBILE, MOBILE_SM } from "../../utils/constants";

const PREFIX = 'BokiemResponsive';

const classes = {
  imgDesktop: `${PREFIX}-imgDesktop`,
  imgMobile: `${PREFIX}-imgMobile`,
  gridContainer: `${PREFIX}-gridContainer`
};

const Root = styled('div')(() => ({
  [`& .${classes.imgDesktop}`]: {
    height: 300,
    marginRight: '0.5em',
    [`@media (max-width:${MOBILE})`]: {
      height: 200,
    },
    [`@media (max-width:${MOBILE_SM})`]: {
      height: 100,
    }
  },

  [`& .${classes.imgMobile}`]: {
    height: 300,
    [`@media (max-width:${MOBILE})`]: {
      height: 200,
    },
    [`@media (max-width:${MOBILE_SM})`]: {
      height: 100,
    }
  },

  [`& .${classes.gridContainer}`]: {
    display: "flex",
    justifyContent: "center",
    flexWrap: 'wrap',
    alignItems: 'center'
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
            className={classes.imgDesktop}
            url={covers[name].url2}
            photoPath={`/projects/${name}`}
          />
        </FadeIn>
        <FadeIn>
          <MultiFormatPhoto
            alt="mobile"
            className={classes.imgMobile}
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