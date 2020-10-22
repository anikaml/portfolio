import React from "react";
import PropTypes from "prop-types";

import { covers } from '../../components/Covers';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core/';
import FadeIn from "../../containers/style/FadeIn";


const useStyles = makeStyles(() => ({
  launch: {
    color: props => covers[props.index].colors[0],
    fontWeight: 500,
    paddingBottom: "0.1em",
    marginBottom: "2em",
    '@media (max-width:600px)': {
      fontSize: "1.1rem",
      width: "unset",
      borderBottom: "1px solid black",
      paddingTop: '1em',
    },
    // underline from left to right and back
    display: "inline-block",
    "&:hover:after": {
      width: "100%",
    },
    "&:after": {
      content: "''",
      display: "block",
      width: "0%",
      height: "2px",
      background: props => covers[props.index].colors[0],
      transition: "width .3s",
      marginTop: "0.1em",
      '@media (max-width:600px)': {
        background: "white",
      },
    },
  },
}))

export default function Launch(props) {
  
  const classes = useStyles(props);
  
  return (
    <>
      <FadeIn>
        <Link
          href={covers[props.index].href}
          style={{textDecoration: 'none'}}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="h6" className={classes.launch}>
            Visit the website
          </Typography>
        </Link>
      </FadeIn>
    </>
  )
}

Launch.propTypes = {
  index: PropTypes.string.isRequired,
};