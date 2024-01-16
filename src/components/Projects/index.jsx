import PropTypes from 'prop-types';

const Project = ({ title, imageUrl, githubUrl, techStack }) => (
    <div className="card project-card">
        <img src={imageUrl} className="card-img" alt={`Project ${title}`} />
        <div className="card-img-overlay project-overlay d-flex justify-content-center align-items-center">
            <div className="text-center">
                <h5 className="card-title">{title}</h5>
                <p className="tech-stack">{techStack}</p>
                <a href={githubUrl} className="btn btn-outline-secondary" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            </div>
        </div>
    </div>
);

Projects.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    githubUrl: PropTypes.string.isRequired,
};

export default Projects;