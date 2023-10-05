import React from "react";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";
import { Typography, } from '@mui/material/';
import BokiemLogo from "../../components/projects/BokiemLogo";
import BokiemResponsive from "../../components/projects/BokiemResponsive";
import FadeIn from "../style/FadeIn";

const PREFIX = 'Bokiem';

const classes = {
  text: `${PREFIX}-text`
};

const Root = styled('div')(() => ({
  [`& .${classes.text}`]: {
    textAlign: "center",
    margin: "2em 0",
  }
}));

export default function Bokiem(props) {

  const name = props.name;

  return (
    <Root>
      <div>
        <FadeIn>
          <Typography variant="h4" className={classes.text}>
            Responsive Design
          </Typography>
        </FadeIn>
        <BokiemResponsive name={name} />
        <BokiemLogo />
      </div>
    </Root>
  );
}

Bokiem.propTypes = {
  name: PropTypes.string.isRequired,
};