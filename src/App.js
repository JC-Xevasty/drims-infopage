import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={null}></Route>
          <Route path="*" element={<NavBar />}></Route>
        </Routes>
        <div>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <Routes>
          <Route path="/login" element={null}></Route>
          <Route path="*" element={<Footer />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
