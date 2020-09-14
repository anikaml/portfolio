import React from 'react';

import { isMobile } from 'react-device-detect';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core/';

import SectionTitle from '../../components/layout/SectionTitle';
import ContactForm from '../contact_form/ContactForm';
import FadeIn from '../../containers/style/FadeIn';
import { greyColor } from '../../utils/colors';

const useStyles = makeStyles(() => ({
  container: {
    margin: "2em auto 0 auto",
    display: "flex",
    '@media (max-width:900px)': {
      flexWrap: "wrap",
    }
  },
  containerSmall: {
    margin: "2em auto",
  },
  letswork: {
    maxWidth: '10rem',
    fontWeight: 600,
    lineHeight: 1,
    padding: "4rem 0 2rem 6rem",
  },
  subtitle: {
    maxWidth: '20rem',
    padding: "0rem 0 4rem 6rem",
    color: greyColor,
  },
  typography: {
    '@media (max-width:900px)': {
      padding: "1rem",
      maxWidth: 'unset',
    }
  },
}));

export default function Contact() {
  const classes = useStyles();
  
  return (
    <>
      <SectionTitle title="Contact" />
      <Container maxWidth="lg" className={classes.container}>
        <div>
          <FadeIn>
            <Typography
              variant={isMobile? "h4" : "h2"}
              className={`${classes.letswork} ${classes.typography}`}
            >
              {`Let's work together`}
            </Typography>
          </FadeIn>
          <FadeIn>
            <Typography
              variant={"subtitle1"}
              className={`${classes.subtitle} ${classes.typography}`}
            >
              {`Have a question? Like my work? Let's talk`}
            </Typography>
          </FadeIn>
        </div>
        <ContactForm />
      </Container>
    </>
  )
}

