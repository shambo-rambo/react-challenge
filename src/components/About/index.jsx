const About = () => {
    return (
      <div className="about-page">
        <div className="container">
          <div className="jumbotron text-center bg-transparent">
            <h1>Welcome to My Portfolio</h1>
            <p>Discover my projects and skills.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 text-center">
              <img src="/path-to-your-profile-image.jpg" alt="Profile" className="rounded-circle mb-3" />
            </div>
            <div className="col-lg-8">
              <h2>About Me</h2>
              <p>
                I'm Shambo-Rambo, a full-stack developer with a passion for creating web applications...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;