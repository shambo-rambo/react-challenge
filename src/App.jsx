import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './pages/About';
// ...other imports if necessary

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        {/* Setting up the 'About' component to be rendered at the root path ("/") */}
        <Route path="/" element={<About />} />
        
        {/* Other routes for different pages can be added here */}
      </Routes>
      {/* You can add a Footer component here if you have one */}
    </Router>
  );
};

export default App;