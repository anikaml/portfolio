import React from "react";
import { styled } from '@mui/material/styles';
import Image from 'next/image'
import { Container } from '@mui/material/';
import Illustration from "./Illustration";
import Trails from './Trails';
import Scroll from "./Scroll";
import { MOBILE, MOBILE_SM } from "../../utils/constants";

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
    [`@media (max-width:${MOBILE})`]: {
      flexWrap: "wrap",
      height: '100%',
      margin: "1em",
      padding: "2em",
    },
    [`@media (max-width:${MOBILE_SM})`]: {
      height: 'auto',
      flexWrap: "wrap",
      margin: "1em",
      padding: "0em",
      flexDirection: 'column',
      justifyContent: 'space-between',
    }
  },

  [`& .${classes.trailsContainer}`]: {
    margin: "2em auto",
    paddingLeft: "4em",
    width: '50vw',
    [`@media (max-width:${MOBILE})`]: {
      height: "unset",
      padding: 0,
      margin: "2em",
      width: "auto",
    },
  },

  [`& .${classes.illustration}`]: {
    overflow: "visible",
    textAlign: "center",
    width: '100%',
    margin: '0 auto',
    [`@media (max-width:${MOBILE})`]: {
      maxWidth: '80vw',
    },
  },

  [`& .${classes.icon}`]: {
    display: 'none',
    position: 'relative',
    [`@media (max-width:${MOBILE_SM})`]: {
      display: 'block',
      maxWidth: "-webkit-fill-available",
      height: "20em",
      maxHeight: '40vh',
    }
  }
}));

export default function Main() {
  const illustration = (<div className={classes.icon}><Image
    src="/icons/mobile_full.svg"
    fill
    alt="Mobile picture"
    priority
  /></div>)

  return (
    <Root>
      <div className={classes.container}>
        <div className={classes.text}>
          <Container maxWidth="lg" className={classes.trailsContainer}>
            <Trails />
          </Container>
        </div>
        <div className={classes.illustration}>
          {illustration}
          <Illustration />
        </div>
        <Scroll />
      </div>
    </Root>
  );
}