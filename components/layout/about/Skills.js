import React from 'react';
import { styled } from '@mui/material/styles';
import { keyframes } from "@emotion/react";
import Image from 'next/image'
import { useInView } from 'react-intersection-observer';
import { Typography } from '@mui/material/';
import { shadowColor } from '../../../utils/colors';
import SectionTitle from '../SectionTitle';
import { theme } from '../../../utils/theme';
import FadeIn from '../../../components/style/FadeIn';
import { MOBILE } from '../../../utils/constants';

const PREFIX = 'Skills';

const classes = {
  container: `${PREFIX}-container`,
  title: `${PREFIX}-title`,
  field: `${PREFIX}-field`,
  flexContainer: `${PREFIX}-flexContainer`,
  fieldDiv: `${PREFIX}-fieldDiv`,
  typography: `${PREFIX}-typography`,
  icon: `${PREFIX}-icon`,
  colorDiv: `${PREFIX}-colorDiv`,
  circle: `${PREFIX}-circle`,
  skillsDiv: `${PREFIX}-skillsDiv`
};

const circleMotion = keyframes({
  '0%, 100%': {
    borderRadius: "56% 44% 68% 32% / 45% 54% 46% 55% ",
  },
  '30%': {
    borderRadius: "60% 40% 50% 50% / 30% 30% 70% 70%",
  },
  '70%': {
    borderRadius: "100% 50% 50% 100% / 100% 100% 50% 50%",
  }
})

const Root = styled('div', {
  shouldForwardProp: (prop) => !['inView'].includes(prop)
})(({ inView }) => ({
  [`& .${classes.container}`]: {
    margin: "2em auto",
  },

  [`& .${classes.title}`]: {
    fontWeight: 700,
  },

  [`& .${classes.field}`]: {
    fontWeight: 700,
    background: 'linear-gradient(180deg, rgba(255,255,255,0) 70%, #FFe359 65%)',
    display: "inline",
    WebkitTextStroke: '1px white'
  },

  [`& .${classes.flexContainer}`]: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "nowrap",
    [`@media (max-width:${MOBILE})`]: {
      flexWrap: "wrap",
    },
  },

  [`& .${classes.fieldDiv}`]: {
    textAlign: "center",
    padding: "1em",
    borderRadius: 40,
    boxShadow: `0px 3px 5px 3px ${shadowColor}`,
    margin: "2em 1em",
    background: "rgba( 255, 255, 255, 0.05 )",
    backdropFilter: "blur( 4px )",
    webkitBackdropFilter: "blur( 4px )",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    maxWidth: "40vw",
    zIndex: 10,
    transition: 'all .2s ease-in-out',
    [`@media (max-width:${MOBILE})`]: {
      maxWidth: "90vw",
    },
    '&:hover': {
      filter: `drop-shadow(5px 5px 10px rgba(0,0,0,.25))`
    },
  },

  [`& .${classes.typography}`]: {
    margin: "0.25em",
    lineHeight: "1.5em",
    [`@media (max-width:${MOBILE})`]: {
      margin: "auto",
      padding: "inherit",
    },
  },

  [`& .${classes.icon}`]: {
    transition: 'all .2s ease-in-out',
    height: '5rem',
    width: '100%',
    position: 'relative',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },

  [`& .${classes.colorDiv}`]: {
    margin: "3em",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  [`& .${classes.circle}`]: {
    width: "12em",
    height: "12em",
    position: "absolute",
    display: "inline",
    zIndex: -1,
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    animationTimingFunction: 'linear',
    animationDuration: "5000ms",
    borderRadius: "56% 44% 68% 32% / 45% 54% 46% 55% ",
    animation: `${circleMotion} 10s linear infinite`,
    '&:hover': {
      cursor: "pointer",
      animationPlayState: "running",
    },
    animationPlayState: "running",
    [`@media (max-width:${MOBILE})`]: {
      animationPlayState: inView ? "running" : "paused",
    },
  },

  [`&.${classes.skillsDiv}`]: {
    marginTop: '-10em'
  }
}));

export default function Skills() {

  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
  });

  const skills = {
    Dev: {
      text: 'I value efficient, powerful, and maintainable solutions to quickly deliver results.',
      'What I create': 'Responsive Websites, SPAs (Single Page Applications), PWAs (Progressive Web Apps)',
      Tech: ['JavaScript', 'React', 'TypeScript', 'Redux', 'CSS3', 'HTML5', 'Next.js', 'REST API (Axios)', 'Jest / React Testing Library', 'Git', 'AWS (S3, CloudFront, CodeBuild, CertificateManager, Lambda, IAM, Route53)', 'GraphQL (AWS Amplify via Apollo Client)', 'D3.js / Chart.js', 'React Spring / Framer Motion'],
      svg: "/icons/dev.svg",
      color: theme.palette.primary.light,
    },
    Designer: {
      text: 'I like clean design, easy navigation, and adding a custom touch to all my projects.',
      'What I design': 'Websites, Website Prototypes, Logos, App presentations',
      Tools: ['Photoshop', 'AdobeXD', 'Inkscape/Illustrator', '3dsMax', 'Cinema4D', 'Pen & Paper'],
      svg: "/icons/designer.svg",
      color: theme.palette.primary.light,
    },
  }

  return (
    <Root className={classes.skillsDiv} inView={inView}>
      <SectionTitle title="Skills" stroke={true} />
      <div className={classes.container}>
        <div
          ref={ref}
          className={classes.flexContainer}
        >
          {Object.keys(skills).map(field =>
            <div
              key={field}
              className={classes.fieldDiv}
            >
              <FadeIn>
                <div>
                  <div className={classes.colorDiv}>
                    <div
                      className={classes.circle}
                      style={{ backgroundColor: skills[field].color }}
                    />
                    <div className={classes.icon}>
                      <Image
                        src={skills[field].svg}
                        fill
                        alt="Icon"
                      />
                    </div>
                  </div>
                  <Typography variant="h3" className={classes.field} style={{ margin: 0, fontWeight: 600 }}>
                    {field}
                  </Typography>
                </div>
              </FadeIn>
              <div style={{ padding: "1em 2em" }}>
                <FadeIn>
                  <Typography className={classes.typography}>
                    {skills[field].text}
                  </Typography>
                </FadeIn>
                <div style={{ margin: "2em 0" }}>
                  <FadeIn>
                    <Typography variant="h5" className={classes.title}>
                      {Object.keys(skills[field])[1]}:&nbsp;
                    </Typography>
                  </FadeIn>
                  <FadeIn>
                    <Typography className={classes.typography}>
                      {Object.values(skills[field])[1]}
                    </Typography>
                  </FadeIn>
                </div>
                <FadeIn>
                  <Typography variant="h5" className={classes.title}>
                    {Object.keys(skills[field])[2]}:&nbsp;
                  </Typography>
                </FadeIn>
                <div className={classes.typography}>
                  {(Object.values(skills[field])[2]).map(tool =>
                    <FadeIn key={tool}>
                      <Typography style={{ margin: "0.25em 0" }}>
                        {tool}
                      </Typography>
                    </FadeIn>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Root>
  );
}

