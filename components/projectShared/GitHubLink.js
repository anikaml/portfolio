import React from "react";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";
import { Link, Typography } from '@mui/material/';
import GitHubIcon from '@mui/icons-material/GitHub';
import { covers } from '../../components/Covers';
import FadeIn from "../../components/style/FadeIn";


const PREFIX = 'GitHubLink';

const classes = {
  github: `${PREFIX}-github`
};

const Root = styled('span', {
  shouldForwardProp: (prop) => prop !== "projectName"
})(({ projectName }) => ({
  [`& .${classes.github}`]: {
    color: covers[projectName].colors[1],
    fontWeight: 500,
    paddingBottom: "0.1em",
    marginBottom: "1.5em",
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
      background: covers[projectName].colors[1],
      transition: "width .3s",
      marginTop: "0.1em",
      '@media (max-width:600px)': {
        background: "white",
      },
    },
  }
}));

export default function GitHubLink(props) {
  return (
    (<Root projectName={props.index}>
      {covers[props.index].github && (<FadeIn>
        <Link
          href={covers[props.index].github}
          style={{ textDecoration: 'none' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="subtitle2" className={classes.github}>
            <GitHubIcon fontSize="small" style={{ verticalAlign: 'middle', paddingBottom: 3 }} />
            {"Project's GitHub"}
          </Typography>
        </Link>
      </FadeIn>)}
    </Root>)
  );
}

GitHubLink.propTypes = {
  index: PropTypes.string.isRequired,
  iconOnly: PropTypes.bool
};