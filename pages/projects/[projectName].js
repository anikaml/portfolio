import React from 'react';
import PropTypes from "prop-types";
import { covers } from "../../components/Covers";
import ProjectTemplate from '../../components/projects/ProjectTemplate';
import SuspenseContainer from '../../components/layout/SuspenseContainer';

export async function getStaticProps({ params }) {
  return {
    props: {
      name: params.projectName
    }
  }
}

export async function getStaticPaths() {
  const paths = Object.keys(covers).map(name => {
    return {
      params: {
        projectName: `${name}`
      }
    };
  })
  return {
    paths,
    fallback: false
  };
}

const Project = ({ name }) => {
  return (
    <SuspenseContainer>
      <ProjectTemplate name={name} />
    </SuspenseContainer>
  )
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Project;
