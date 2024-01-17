import Projects from '../components/Projects';

const Portfolio = () => {
  // Array of project data for testing
  const projectsData = [
    {
      title: 'Ai Chatbot',
      imageUrl: '/project1.png',
      githubUrl: 'https://github.com/shambo-rambo/ChatBot',
      techStack: 'React, Node.js',
    },
    {
        title: 'Weather App',
        imageUrl: '/project2.png', 
        githubUrl: 'https://github.com/honguyen00/babysitters',
        techStack: 'React, Express, Node.js',
    },
    {
        title: 'Employee Directory',
        imageUrl: '/project3.png',
        githubUrl: 'https://github.com/shambo-rambo/Bootcamp-Quiz',
        techStack: 'React, Express, Node.js',
    },
    {
        title: 'Budget Tracker',
        imageUrl: '/project4.png',
        githubUrl: 'https://github.com/shambo-rambo/Bootcamp-Quiz',
        techStack: 'React, Express, Node.js',
    },
    // ... You can add more project data here
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {projectsData.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-3">
          <Projects
                     title={project.title}
                     imageUrl={project.imageUrl}
                     githubUrl={project.githubUrl}
                     techStack={project.techStack}
                   />
          </div>
          ))}
          </div>
          </div>
          );
          };
          
          export default Portfolio;
