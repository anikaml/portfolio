import React, { Component } from "react";
import PropTypes from "prop-types";
//import { Parallax } from 'react-scroll-parallax';

//import SVG from 'react-inlinesvg';

// Material UI Components
import { withStyles } from '@material-ui/core/styles';

//import Typography from '@material-ui/core/Typography';
import Illustration from "./Illustration";
import Trails from './Trails';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
    flexWrap: "wrap",
    margin: "2em",
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
            <Trails />
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