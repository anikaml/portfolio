import React, { Component } from "react";
import PropTypes from "prop-types";
//import { Parallax } from 'react-scroll-parallax';

//import SVG from 'react-inlinesvg';

// Material UI Components
import { withStyles } from '@material-ui/core/styles';

//import Typography from '@material-ui/core/Typography';
import Illustration from "./Illustration";
//import Trails from './Trails';
import AboutText from "./AboutText";

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
    // flexWrap: "wrap",
    margin: "2em",
    padding: "2em",
    '@media (max-width:800px)': {
      flexWrap: "wrap",
    },
  },
  text: {

  },
  illustration: {
     overflow: "hidden",
  },
  
});

class Main extends Component {

  render() {
    const { classes } = this.props;    

    return (
      <React.Fragment>
        <div className={classes.container}>
          <div className={classes.text}>
            <AboutText />
          </div>
          <div className={classes.illustration}>
            <Illustration />
          </div>
        </div>
      </React.Fragment>
    )       
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Main);