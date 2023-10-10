import React from "react";
import { styled } from '@mui/material/styles';
import { keyframes } from "@emotion/react";
import { isMobileOnly } from 'react-device-detect';
import { Browser } from 'react-kawaii';
import Typography from '@mui/material/Typography';

const PREFIX = 'NotFound';

const classes = {
  errorDiv: `${PREFIX}-errorDiv`,
  errorTyph: `${PREFIX}-errorTyph`,
  browser: `${PREFIX}-browser`
};

const float = keyframes({
  '0%': {
    transform: 'translatey(0px)'
  },
  '50%': {
    transform: 'translatey(-20px)'
  },
  '100%': {
    transform: 'translatey(0px)'
  }
});

const Root = styled('div')(() => ({
  [`& .${classes.errorDiv}`]: {
    height: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    '@media (max-width:600px)': {
      padding: "1em",
    }
  },

  [`& .${classes.errorTyph}`]: {
    color: "grey",
    marginTop: "2em",
    textAlign: "center",
    lineHeight: "1.5em",
  },

  [`& .${classes.browser}`]: {
    animationName: float,
    animation: `${float} 6s ease-in-out infinite`,
  }
}));

export default function NotFound() {
  return (
    (<Root>
      <div className={classes.errorDiv}>
        <Browser size={isMobileOnly ? 100 : 200} mood="ko" color="#4bc0c0" className={classes.browser} />
        <Typography variant="subtitle1" className={classes.errorTyph} >
          Sorry, page not found!
        </Typography>
      </div>
    </Root>)
  );
}