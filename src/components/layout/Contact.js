import React from 'react';

// import SVG from 'react-inlinesvg';
import { isMobile } from 'react-device-detect';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core/';

// import { shadowColor } from '../../utils/colors';
import SectionTitle from '../../components/layout/SectionTitle';
import ContactForm from '../contact_form/ContactForm';
//import FadeIn from '../../containers/style/FadeIn';

const useStyles = makeStyles(() => ({
  container: {
    margin: "2em auto 0 auto",
  },
  background: {
    //background: "radial-gradient(75.22% 75.22% at 20.49% 12.79%, #FFFFFF 0%, rgba(228, 231, 233, 0.502295) 100%)",
  },
  title: {
    fontWeight: 700,
  },
  email: {
    textAlign: "center",
  },
  letswork: {
    maxWidth: '7em',
    fontWeight: 600,
    lineHeight: 1,
    padding: "1em 0 1em 2em",
  }

}));

export default function Contact() {
  const classes = useStyles();
  
  return (
    <div className={classes.background}>
      <SectionTitle title="Contact" />
      <Container maxWidth="lg" className={classes.container}>
      <Typography
          variant={isMobile? "h4" : "h2"}
          className={classes.letswork}
        >
         {`Let's work together`}
        </Typography>
        <ContactForm />
      </Container>
    </div>
  )
}

