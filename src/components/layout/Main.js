import React from "react";
import { styled } from '@mui/material/styles';
import { isMobile } from 'react-device-detect';
import SVG from 'react-inlinesvg';
import { Container } from '@mui/material/';
import Illustration from "./Illustration";
import Trails from './Trails';
import Scroll from "./Scroll";

const PREFIX = 'Main';

const classes = {
  container: `${PREFIX}-container`,
  containerMobile: `${PREFIX}-containerMobile`,
  trailsContainer: `${PREFIX}-trailsContainer`,
  illustration: `${PREFIX}-illustration`,
  icon: `${PREFIX}-icon`
};

const Root = styled('div')(() => ({
  [`& .${classes.container}`]: {
    display: "flex",
    justifyContent: "center",
    margin: "2em",
    padding: "4em 2em",
    height: 'calc(100vh - 64px)',
    '@media (max-width:900px)': {
      flexWrap: "wrap",
      height: '100%',
      margin: "1em",
      padding: "2em",
    },
  },

  [`& .${classes.containerMobile}`]: {
    height: 'auto',
    flexWrap: "wrap",
    margin: "1em",
    padding: "0em",
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  [`& .${classes.trailsContainer}`]: {
    margin: "2em auto",
    paddingLeft: "4em",
    '@media (max-width:900px)': {
      height: "unset",
      padding: 0,
      margin: "2em",
      width: "auto",
    },
  },

  [`& .${classes.illustration}`]: {
    overflow: "visible",
    textAlign: "center",
    height: "auto",
    maxWidth: '50vw',
    margin: '0 auto',
    '@media (max-width:900px)': {
      maxWidth: '80vw',
    },
  },

  [`& .${classes.icon}`]: {
    maxWidth: "-webkit-fill-available",
    height: "auto",
    maxHeight: '40vh',
  }
}));

export default function Main() {
  const illustration = (<SVG
    src={process.env.PUBLIC_URL + "/icons/mobile_full.svg"}
    className={classes.icon}
  />)

  return (
    <Root>
      <div className={isMobile ? classes.containerMobile : classes.container}>
        <div className={classes.text}>
          <Container maxWidth="lg" className={classes.trailsContainer}>
            <Trails />
          </Container>
        </div>
        <div className={classes.illustration}>
          {isMobile ? illustration : <Illustration />}
        </div>
        {isMobile ? null : <Scroll />}
      </div>
    </Root>
  );
}