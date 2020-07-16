import React from "react";
import PropTypes from "prop-types";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core/';


const useStyles = makeStyles(() => ({
  launch: {
    color: "black",
    fontWeight: 500,
    paddingBottom: "0.1em",
    marginBottom: "2em",
    '@media (max-width:600px)': {
      fontSize: "1.1rem",
      width: "unset",
      borderBottom: "1px solid black",
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
      background: "black",
      transition: "width .3s",
      marginTop: "0.1em",
      '@media (max-width:600px)': {
        background: "white",
      },
    },
  },
}))

export default function Launch(props) {
  
  const classes = useStyles();
  
  return (
    <>
      <Link
        href={props.href}
        style={{textDecoration: 'none'}}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography variant="subtitle2" className={classes.launch}>
          Launch the website
        </Typography>
      </Link>
    </>
  )
}

Launch.propTypes = {
  href: PropTypes.string.isRequired,
};