// Project/index.jsx

import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ title, imageUrl, githubUrl, techStack }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} className="project-image" alt={`Project ${title}`} />
      <div className="project-info">
        <h5 className="project-title">{title}</h5>
        <p className="project-techstack">{techStack}</p>
        <a href={githubUrl} className="project-github-link" target="_blank" rel="noopener noreferrer">
          <img src="/github.png" alt="GitHub" />
        </a>
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  techStack: PropTypes.string.isRequired,
};

export default Project;
