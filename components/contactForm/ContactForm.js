import React, { useState, useEffect, useRef } from "react";
import { styled } from '@mui/material/styles';
import axios from "axios";
import { ValidatorForm } from 'react-material-ui-form-validator';
import ContactMessage from "./ContactMessage";
import Email from './Email';
import SubmitButton from "./SubmitButton";
import { greyColor, shadowColor } from "../../utils/colors";
import FadeIn from "../style/FadeIn";
import { MOBILE } from "../../utils/constants";

const PREFIX = 'ContactForm';

const classes = {
  container: `${PREFIX}-container`,
  input: `${PREFIX}-input`
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

  [`& .${classes.input}`]: {
    width: "100%",
    transition: "box-shadow 150ms ease",
    borderRadius: 15,
    zIndex: 1,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: `2px solid ${shadowColor}`,
        borderRadius: 15,
      },
      '&:hover fieldset': {
        border: `2px solid ${theme.palette.primary.main}`,
      },
      '&.Mui-focused': {
        borderRadius: 15,
      },
      "& input:-internal-autofill-selected": {
        borderRadius: 15,
      },
    },
    '& .MuiInputLabel-formControl': {
      color: greyColor,
      letterSpacing: 1.5,
    },
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

  async function handleSubmit() {
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
      [event.target.id]: event.target.value
    });
  }

  return (
    <Root className={classes.container}>
      <ValidatorForm noValidate onSubmit={handleSubmit}>
        <FadeIn>
          <Email
            autoFocus
            disabled={isLoading}
            className={classes.input}
            onChange={textChange}
            value={text.email}
            variant="outlined"
          />
        </FadeIn>
        <FadeIn>
          <ContactMessage
            disabled={isLoading}
            className={classes.input}
            onChange={textChange}
            value={text.message}
            variant="outlined"
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
      </ValidatorForm>
    </Root>
  );
}