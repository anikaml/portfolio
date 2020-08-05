import React from "react";
import PropTypes from "prop-types";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core/';

import ColorSwatch from "./ColorSwatch";
import { covers } from '../../components/Covers';
import { greyColor } from '../../utils/colors';
import FadeIn from "../../containers/style/FadeIn";

const useStyles = makeStyles(() => ({
  gridColors: {
    margin: "1em 0em",
    textAlign: "center",
    display: "flex",
  },
  title: {
    marginTop: "2em",
    color: greyColor,
    paddingBottom: "0.5em",
  }
}))

export default function Colors(props) {
  
  const classes = useStyles();
  const name = props.name;
  
  return (
    <>
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
              <ColorSwatch name={name} colorIndex={index}/>
            </FadeIn>
          </Grid>
        )}
      </Grid>
    </>
  )
}

Colors.propTypes = {
  name: PropTypes.string.isRequired,
};