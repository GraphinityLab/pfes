import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/about-us"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact-us"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/electrical-services"
          element={
            <>
              <Navbar />
              <Services />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
