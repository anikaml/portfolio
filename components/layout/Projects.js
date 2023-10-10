import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link, Typography } from '@mui/material/';
import IconButton from '@mui/material/IconButton';
import Banner from '../projectShared/Banner';
import { covers } from '../Covers';
import SectionTitle from './SectionTitle';
import FadeIn from '../../components/style/FadeIn';
import { greyBorderColor, greyColor, shadowColor } from '../../utils/colors';

const PREFIX = 'Projects';

const classes = {
  container: `${PREFIX}-container`,
  banner: `${PREFIX}-banner`,
  containerDiv: `${PREFIX}-containerDiv`,
  parallaxDiv: `${PREFIX}-parallaxDiv`,
  text: `${PREFIX}-text`,
  details: `${PREFIX}-details`,
  arrowDiv: `${PREFIX}-arrowDiv`,
  loader: `${PREFIX}-loader`,
  iconButton: `${PREFIX}-iconButton`,
  rootIconButton: `${PREFIX}-rootIconButton`,
  mainDiv: `${PREFIX}-mainDiv`,
  projectsGrid: `${PREFIX}-projectsGrid`,
  gridItem: `${PREFIX}-gridItem`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.container}`]: {
    margin: "3em",
    display: 'flex',
    justifyContent: 'center'
  },

  [`& .${classes.banner}`]: {
    display: "block",
    overflow: "hidden!important",
    overflowY: "hidden",
    transition: "all .2s ease-in-out",
    zIndex: "1",
    borderRadius: "25px",
    '&:hover': {
      transform: "scale(1.05)",
      transition: "0.6s all ease-in-out",
      zIndex: "-1",
      overflow: "hidden",
    },
    '@media (max-width:900px)': {
      height: "30vh",
      zIndex: "-3",
      overflow: "hidden",
      borderRadius: "25px",
      overflowY: "hidden",
    },
  },

  [`& .${classes.parallaxDiv}`]: {
    margin: "1em 0",
    overflow: "hidden",
    border: `1px solid ${greyBorderColor}`,
    borderRadius: '25px',
    '@media (max-width:900px)': {
      height: "30vh",
    },
    /* IpadPro  Portrait */
    [`@media only screen and (min-width: 1024px) and (max-height: 1366px) and
    (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)`]: {
      height: "30vh",
    },
  },

  [`& .${classes.text}`]: {
    width: '90vw',
    paddingRight: "0.5em",
    color: theme.palette.primary.dark,
    display: 'inline',
    '@media (max-width:900px)': {
      display: 'inline-block',
      width: "auto",
    },
  },

  [`& .${classes.details}`]: {
    display: 'inline',
    color: greyColor,
    '@media (max-width:900px)': {
      display: 'inline-block',
      marginTop: "0.25em",
    },
  },

  [`& .${classes.arrowDiv}`]: {
    display: "inline-flex",
    alignItems: 'center',
  },

  [`& .${classes.loader}`]: {
    overflow: 'visible',
    stroke: greyColor,
    strokeWidth: 0.5,
    height: 'auto',
    paddingLeft: '1em',
    cursor: 'pointer',
  },

  [`& .${classes.iconButton}`]: {
    width: '100%',
    padding: 0,
    borderRadius: "25px",
    webkitBorderRadius: "25px",

  },

  [`& .${classes.rootIconButton}`]: {
    borderRadius: "25px",
    "&:hover": {
      background: "transparent",
    }
  },

  [`& .${classes.projectsGrid}`]: {
    display: 'grid',
    gridTemplateColumns: 'minmax(auto, 40vw) minmax(auto, 40vw) ',
    gridTemplateRows: '1fr',
    columnGap: '2em',
    rowGap: '2em',
    '@media (max-width:900px)': {
      gridTemplateColumns: '1fr',
    },
  },

  [`& .${classes.gridItem}`]: {
    padding: "2em",
    boxShadow: `0px 3px 5px 3px ${shadowColor}`,
    borderRadius: "25px"
  }
}));

const d = "M73.77,34.02,85.23,45.48H.68v5.04H85.23L73.77,61.98l3.57,3.57L94.88,48,77.34,30.45Z"

export default function Projects() {
  return (
    (<Root>
      <SectionTitle id="projects" title="Projects" />
      <div className={classes.container}>
        <div className={classes.projectsGrid}>
          {Object.keys(covers).map(project =>
            <div key={covers[project].name} className={classes.gridItem}>
              <div
                className={classes.parallaxDiv}
              >
                <IconButton
                  aria-label={`project-${covers[project].name}`}
                  component={Link}
                  href={`/projects/${covers[project].name}`}
                  disableRipple
                  disableTouchRipple
                  className={classes.iconButton}
                  classes={{
                    'root': classes.rootIconButton,
                  }}
                >
                  <Banner
                    url={`/projects/${project}/${covers[project].url1}`}
                    className={classes.banner}
                  />
                </IconButton>
              </div>
              <>
                <FadeIn>
                  <Link
                    href={`/projects/${covers[project].name}`}
                    style={{ textDecoration: 'none' }}
                    rel="noopener noreferrer"
                    data-testid={`test-link-${covers[project].name}`}
                  >
                    <Typography variant="h6" className={classes.text}>
                      {covers[project].project}
                    </Typography>
                  </Link>
                </FadeIn>
                <FadeIn>
                  <Link
                    href={`/projects/${covers[project].name}`}
                    style={{ textDecoration: 'none' }}
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 1.1 }}
                      className={classes.arrowDiv}
                    >
                      <Typography className={classes.details}>
                        View details
                      </Typography>
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"50px"}
                        height={"50px"}
                        viewBox="0 0 96 96"
                        className={classes.loader}
                        whileTap={{ x: [0, 30] }}
                      >
                        <motion.path
                          d={d}
                          transition={{
                            duration: 1,
                            ease: "easeInOut",
                          }}
                          fill={greyColor}
                        />
                      </motion.svg>
                    </motion.div>
                  </Link>
                </FadeIn>
              </>
            </div>
          )}
        </div>
      </div>
    </Root>)
  );
}

Projects.propTypes = {
  classes: PropTypes.object,
};

