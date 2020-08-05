import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { useMorph } from 'react-morph';
import { isMobileOnly } from 'react-device-detect';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core/';

import { covers } from '../../components/Covers';
import FadeIn from "../../containers/style/FadeIn";

const useStyles = makeStyles(() => ({
  container: {
    margin: "4em",
    width: "auto",
    '@media (max-width:600px)': {
      margin: "1em",
    },
  },
  image: {
    width: "100%",
  },
  text: {
    textAlign: "center",
    margin: "2em 0",
  },
  responsiveMorph: {
    height: 200,
    width: 200,
  },
  morphDiv: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "10em",
  },
}))

export default function BokiemResponsiveMorph(props) {
  const classes = useStyles();
  const morph = useMorph();
  const [toggle, setToggle] = useState(true);
 
  const name = props.name;

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle(!toggle)
    }, 3000);
    return () => clearInterval(interval);
  }, [toggle]);
  
  return (
    <>
      <Grid
        container
        justify="center"
      >
        <Grid item xs={12} >
          <FadeIn>
          <Typography variant="h4" className={classes.text}>
              Responsive Design
            </Typography>
          </FadeIn>
        </Grid>
        <Grid item xs={12} className={classes.morphDiv}>
          <FadeIn>
            <>
            {toggle && 
              <img
                {...morph}
                src={process.env.PUBLIC_URL + covers[name].url2}
                alt="desktop"
                height={isMobileOnly ? "150" : "300"}
                className={classes.img}
              />
            }
            {!toggle && 
              <img
                {...morph}
                src={process.env.PUBLIC_URL + covers[name].url3}
                alt="mobile"
                height={isMobileOnly ? "150" : "300"}
                className={classes.img}
              />
            }
            </>
          </FadeIn>
        </Grid>
      </Grid>
    </>
  )
}

BokiemResponsiveMorph.propTypes = {
  name: PropTypes.string.isRequired,
};