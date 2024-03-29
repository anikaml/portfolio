import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material/';
import SectionTitle from '../../components/layout/SectionTitle';
import ContactForm from '../contactForm/ContactForm';
import FadeIn from '../../components/style/FadeIn';
import { greyColor } from '../../utils/colors';
import { MOBILE, MOBILE_SM } from '../../utils/constants';

const PREFIX = 'Contact';

const classes = {
  container: `${PREFIX}-container`,
  containerSmall: `${PREFIX}-containerSmall`,
  letswork: `${PREFIX}-letswork`,
  subtitle: `${PREFIX}-subtitle`,
  typography: `${PREFIX}-typography`
};

const Root = styled('div')(() => ({
  [`& .${classes.container}`]: {
    margin: "2em auto 0 auto",
    display: "flex",
    [`@media (max-width:${MOBILE})`]: {
      flexWrap: "wrap",
    }
  },

  [`& .${classes.containerSmall}`]: {
    margin: "2em auto",
  },

  [`& .${classes.letswork}`]: {
    maxWidth: '10rem',
    fontWeight: 600,
    lineHeight: 1,
    padding: "4rem 0 2rem 6rem",
    [`@media (max-width:${MOBILE_SM})`]: {
      fontSize: '2.5rem'
    }
  },

  [`& .${classes.subtitle}`]: {
    maxWidth: '20rem',
    padding: "0rem 0 4rem 6rem",
    color: greyColor,
  },

  [`& .${classes.typography}`]: {
    [`@media (max-width:${MOBILE})`]: {
      padding: "1rem",
      maxWidth: 'unset',
    }
  }
}));

export default function Contact() {


  return (
    (<Root>
      <SectionTitle id="contact" title="Contact" />
      <Container maxWidth="lg" className={classes.container}>
        <div>
          <FadeIn>
            <Typography
              variant="h2"
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
    </Root>)
  );
}

