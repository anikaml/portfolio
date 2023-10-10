import React from "react";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";
import { covers } from '../../components/Covers';
import { Link, Typography } from '@mui/material/';
import FadeIn from "../../components/style/FadeIn";

const PREFIX = 'Launch';

const classes = {
  launch: `${PREFIX}-launch`
};

const Root = styled('span', {
  shouldForwardProp: (prop) => prop !== "projectName"
})(({ projectName }) => ({

  [`& .${classes.launch}`]: {
    color: covers[projectName].colors[0],
    fontWeight: 500,
    paddingBottom: "0.1em",
    marginBottom: "1em",
    '@media (max-width:600px)': {
      paddingBottom: "0em",
      fontSize: "1.1rem",
      width: "unset",
      borderBottom: `1px solid ${covers[projectName].colors[0]}`,
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
      background: covers[projectName].colors[0],
      transition: "width .3s",
      marginTop: "0.1em",
      '@media (max-width:600px)': {
        background: "white",
      }
    }
  }
}));

export default function Launch(props) {
  return (
    (<Root projectName={props.index}>
      {covers[props.index].href &&
        <FadeIn>
          <Link
            href={covers[props.index].href}
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography variant="h6" className={classes.launch}>
              Visit the website
            </Typography>
          </Link>
        </FadeIn>
      }
    </Root>)
  );
}

Launch.propTypes = {
  index: PropTypes.string.isRequired,
};