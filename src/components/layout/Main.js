import React, { Component } from "react";
import PropTypes from "prop-types";
//import { Parallax } from 'react-scroll-parallax';

//import SVG from 'react-inlinesvg';

// Material UI Components
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Illustration from "./Illustration";

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
    // maxHeight: "300px",
    // maxWidth: "300px",
    // display: "flex",
    // //height: "300px",
    // //width: "300px",
    // margin: "0 auto",
     overflow: "hidden",
  },
  
});

class Main extends Component {

  render() {
    const { classes } = this.props;    

    return (
      <React.Fragment>
        {/* <Parallax className="custom-class" y={[-20, 20]} >
          <Typography variant="h2">
            Welcome to my website
          </Typography>
        </Parallax>
        <Parallax className="custom-class" x={[-20, 20]} >
        <Typography variant="h2">
          My name is Anika
        </Typography>
        </Parallax> */}
        <div className={classes.container}>
          <div className={classes.text}>
          <Typography variant="h3">
              Architectural Designer
            </Typography>
            <Typography variant="h6" display="inline">
              who become
            </Typography>
            <Typography variant="h3" display="inline">
               Web Designer
            </Typography>
            <Typography variant="h5">
              Living & working in San Diego, California
            </Typography>
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