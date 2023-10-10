import React from "react";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";

import { Grid, Typography } from '@mui/material/';

import ColorSwatch from "./ColorSwatch";
import { covers } from '../../components/Covers';
import { greyColor } from '../../utils/colors';
import FadeIn from "../../components/style/FadeIn";

const PREFIX = 'Colors';

const classes = {
  gridColors: `${PREFIX}-gridColors`,
  title: `${PREFIX}-title`
};

const Root = styled('div')(() => ({
  [`& .${classes.gridColors}`]: {
    margin: "1em 0em",
    textAlign: "center",
    display: "flex",
  },

  [`& .${classes.title}`]: {
    marginTop: "2em",
    color: greyColor,
    paddingBottom: "0.5em",
  }
}));

export default function Colors(props) {


  const name = props.name;

  return (
    (<Root>
      <Grid
        container
        alignItems="center"
      >
        <Grid
          item
          xs={12}
        >
          <FadeIn>
            <Typography variant="subtitle2" className={classes.title}>
              COLOR PALETTE
            </Typography>
          </FadeIn>
        </Grid>
        {covers[name].colors.map((color, index) =>
          <Grid
            key={color}
            item
            xs={6} sm={4} md={3} lg={2}
            className={classes.gridColors}
          >
            <FadeIn>
              <ColorSwatch name={name} colorIndex={index} />
            </FadeIn>
          </Grid>
        )}
      </Grid>
    </Root>)
  );
}

Colors.propTypes = {
  name: PropTypes.string.isRequired,
};