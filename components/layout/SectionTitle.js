import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";
import { Parallax } from 'react-scroll-parallax';
import { Typography } from '@mui/material/';
import { MOBILE, MOBILE_SM } from '../../utils/constants';

const PREFIX = 'SectionTitle';

const classes = {
  title: `${PREFIX}-title`,
  wrapper: `${PREFIX}-wrapper`
};

const Root = styled('div')(() => ({
  [`& .${classes.title}`]: {
    fontWeight: 500,
    fontSize: 'calc(54px + (54 - 20) * ((100vw - 300px) / (1600 - 300)))',
    transform: 'translate(10px, 35px)',
    display: "inline",
    position: "relative",
    paddingLeft: "0.5em",
    maxWidth: '10rem',
    zIndex: 10,
    [`@media (max-width:${MOBILE})`]: {
      fontSize: '4rem'
    },
    [`@media (max-width:${MOBILE_SM})`]: {
      fontSize: 'calc(40px + 18 * ((100vw - 320px) / 680))',
    },
  },

  [`& .${classes.wrapper}`]: {
    position: "relative",
    margin: "1em 0",
    display: "inline-block",
    [`@media (max-width:${MOBILE_SM})`]: {
      paddingLeft: '3rem'
    },
  }
}));

export default function SectionTitle(props) {
  return (
    (<Root>
      <div id={props.id} className={classes.wrapper}>
        <Parallax translateX={[-30, 0]} style={{ margin: 0 }}>
          <Typography variant="h1" className={classes.title} style={{ WebkitTextStroke: props.stroke ? '1px white' : 'unset' }}>
            {props.title}
          </Typography>
        </Parallax>
      </div>
    </Root>)
  );
}

SectionTitle.propTypes = {
  id: PropTypes.string,
  stroke: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

