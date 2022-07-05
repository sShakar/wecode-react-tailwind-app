import { Fragment } from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import ContactsPage from './pages/ContactsPage';
import AboutPage from './pages/AboutPage';

import './index.css';

const App = () => {
  return (
    <Fragment>
      <Navbar>
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/about">About</Link>
      </Navbar>
      <div className="bg-gray-900  mx-auto flex flex-col items-center justify-center min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Fragment>
  );
};

export default App;
