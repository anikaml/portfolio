import React from "react";
import PropTypes from "prop-types";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { greyColor } from "../../utils/colors";

const useStyles = makeStyles(() => ({
  about: {
    margin: "0 2em",
    '@media (max-width:900px)': {
      margin: "0 1em",
    },
  },
  underline: { 
    display: "inline-block",
    position: "relative",
    borderBottom: "2px solid rgba(0, 0, 0, 0)",
    color: greyColor,
    textTransform: "none",
    '@media (max-width:767px)': {
      // fontSize: "unset",
      fontSize: 18,
    },
    "&:before": {
      content: "''",
      display: "block",
      position: "absolute",
      bottom: "-2px",
      left: "0",
      height: "5px",
      width: "100%",
      //background: "linear-gradient(-90deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
      background: "linear-gradient(-90deg, #FF9F79, #E5A4ED, #B684F1, #B0C0F4)",
      backgroundSize: "400% 400%",
      animation: "$gradient 5s ease infinite",
      transformOrigin: "right top",
      transform: "scale(0, 1)",
      transition: "color 0.1s, transform 0.3s ease-out",
    },
    "&:hover:before": {
      transformOrigin: "left top",
      transform: "scale(1, 1)",
    }
  },
  "@keyframes gradient": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    }
  }
}));

export default function NavLink(props) {
  const classes = useStyles(); 

    return (
      <Link
        href={`/#${props.title.toLowerCase()}`}
        style={{ textDecoration: 'none'}}
        rel="noopener noreferrer"
      >
        <Typography 
          variant="button" 
          className={props.middle ? `${classes.underline} ${classes.about}` : `${classes.underline}`}
        >
          {props.title}
        </Typography> 
      </Link>
    )       
  }

  NavLink.propTypes = {
    middle: PropTypes.bool,
    title: PropTypes.string.isRequired,
  };