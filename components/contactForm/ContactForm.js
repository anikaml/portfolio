import React, { useState, useEffect, useRef } from "react";
import { styled } from '@mui/material/styles';
import axios from "axios";
import ContactMessage from "./ContactMessage";
import Email from './Email';
import SubmitButton from "./SubmitButton";
import { greyColor, shadowColor } from "../../utils/colors";
import FadeIn from "../style/FadeIn";
import { MOBILE } from "../../utils/constants";

const PREFIX = 'ContactForm';

const classes = {
  container: `${PREFIX}-container`,
  label: `${PREFIX}-label`,
  input: `${PREFIX}-input`,
  email: `${PREFIX}-email`,
  message: `${PREFIX}-message`,
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`&.${classes.container}`]: {
    margin: "2em auto",
    padding: "5em",
    boxShadow: `0px 3px 5px 3px ${shadowColor}`,
    borderRadius: 15,
    width: '40vw',
    [`@media (max-width:${MOBILE})`]: {
      padding: "2em",
    },
    '@media (max-width:600px)': {
      width: '100%',
      padding: "1em",
      margin: '0 1em'
    }
  },

  [`& .${classes.label}`]: {
    color: greyColor,
    letterSpacing: 1.5,
    fontSize: 12
  },

  [`& .${classes.input}`]: {
    width: "100%",
    transition: "box-shadow 150ms ease",
    border: `2px solid ${shadowColor}`,
    borderRadius: 15,
    zIndex: 1,
    marginTop: '0.5rem',

    '&::placeholder': {
      color: greyColor,
      opacity: 0.6,
      letterSpacing: 1.5,
      paddingLeft: '0.25rem',
    },

    '&:hover': {
      border: `2px solid ${theme.palette.primary.main}`,
    },

    '&:focus-visible': {
      outline: 'none'
    }
  },

  [`& .${classes.email}`]: {
    height: '3rem',
    paddingLeft: '0.5rem',
    marginBottom: '0.5rem'
  },

  [`& .${classes.message}`]: {
    padding: '1rem 0px 0px 0.5rem',
    fontFamily: 'Roboto, Helvetica Neue, Arial, -apple-system',
    resize: 'vertical'
  }
}));

export default function ContactForm() {
  const timer = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [text, setText] = useState({
    email: "",
    message: ""
  });
  const [submitButtonText, setSubmitButtonText] = useState("Submit");

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      await axios.post("https://api.anikamlodzianowski.com/emailer", text)
      setSuccess(true);
      setSubmitButtonText("Success");
      timer.current = setTimeout(() => {
        clearState()
      }, 5000);
      setText({
        email: "",
        message: ""
      })
      setIsLoading(false);
    } catch (e) {
      console.log(e)
      setError(true)
      setSubmitButtonText("Error, try again")
      timer.current = setTimeout(() => {
        clearState()
      }, 5000);
      setIsLoading(false);
    }
  }

  function clearState() {
    setError(false)
    setSuccess(false);
    setSubmitButtonText("Submit");
  }

  function textChange(event) {
    // used for textfield items
    setText({
      ...text,
      [event.target.name]: event.target.value
    });
  }

  return (
    <Root className={classes.container}>
      <form onSubmit={handleSubmit}>
        <FadeIn>
          <Email
            disabled={isLoading}
            onChange={textChange}
            value={text.email}
            className={`${classes.input} ${classes.email}`}
            labelClassName={classes.label}
          />
        </FadeIn>
        <FadeIn>
          <ContactMessage
            disabled={isLoading}
            className={`${classes.input} ${classes.message}`}
            labelClassName={classes.label}
            onChange={textChange}
            value={text.message}
          />
        </FadeIn>
        <FadeIn>
          <SubmitButton
            isLoading={isLoading}
            success={success}
            error={error}
          >
            {submitButtonText}
          </SubmitButton>
        </FadeIn>
      </form>
    </Root>
  );
}