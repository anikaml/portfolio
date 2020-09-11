import React, { useState, useEffect, useRef} from "react";
import axios from "axios";

import { Container } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { ValidatorForm } from 'react-material-ui-form-validator';

import ContactMessage from "./ContactMessage";
import Email from './Email';
import SubmitButton from "./SubmitButton";
import { greyColor, shadowColor } from "../../utils/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "2em auto",
    padding: "5em",
    boxShadow: `0px 3px 5px 3px ${shadowColor}`,
    borderRadius: 15,
    '@media (max-width:900px)': {
      boxShadow: "none",
      padding: "1em",
    }
  },
  input: {
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
        border: `2px solid ${theme.palette.secondary.main}`,
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
      fontWeight: 600
    },
  }
}));

export default function ContactForm() {
  const classes = useStyles();
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
      setSubmitButtonText("Sent successfully");
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
    <Container maxWidth="sm" className={classes.container}> 
      <ValidatorForm noValidate onSubmit={handleSubmit}>
        <Email 
          autoFocus
          disabled={isLoading}
          className={classes.input}
          onChange={textChange}
          value={text.email}
          variant="outlined"
        /> 
        <ContactMessage 
          disabled={isLoading}
          className={classes.input}
          onChange={textChange}
          value={text.message}
          variant="outlined"
        />
        <SubmitButton
          isLoading={isLoading}
          success={success}
          error={error}
        >
          {submitButtonText}
        </SubmitButton>
      </ValidatorForm>
    </Container>
  );
}