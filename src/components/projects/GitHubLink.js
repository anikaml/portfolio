import React from "react";
import PropTypes from "prop-types";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core/';
import GitHubIcon from '@material-ui/icons/GitHub';

import { covers } from '../../components/Covers';
import FadeIn from "../../containers/style/FadeIn";


const useStyles = makeStyles(() => ({
  github: {
    color: props => covers[props.index].colors[1],
    fontWeight: 500,
    paddingBottom: "0.1em",
    marginBottom: "2em",
    '@media (max-width:600px)': {
      fontSize: "1.1rem",
      width: "unset",
      marginBottom: "1em",
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
      background: props => covers[props.index].colors[1],
      transition: "width .3s",
      marginTop: "0.1em",
      '@media (max-width:600px)': {
        background: "white",
      },
    },
  },
}))

export default function GitHubLink(props) {
  
  const classes = useStyles(props);
  
  return (
    <>
     {covers[props.index].github && (<FadeIn>
        <Link
          href={covers[props.index].github}
          style={{textDecoration: 'none'}}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="subtitle2" className={classes.github}>
            <GitHubIcon fontSize="small" style={{paddingTop: "0.25em"}}/>
            {` Project's GitHub`}
          </Typography>
        </Link>
      </FadeIn>)}
    </>
  )
}

GitHubLink.propTypes = {
  index: PropTypes.string.isRequired,
};