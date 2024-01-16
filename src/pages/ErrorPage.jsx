import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="container text-center mt-5">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we couldn't find the page you're looking for.</p>
      <Link to="/" className="btn btn-primary">Go Home</Link>
    </div>
  );
};

export default ErrorPage;
