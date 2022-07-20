import { Fragment } from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import AboutPage from './pages/AboutPage';
import PostsPage from './pages/PostsPage';

import './index.css';

const App = () => {
  return (
    <Fragment>
      <Navbar>
        <Link key="home" to="/">
          Home
        </Link>
        <Link key="contacts" to="/contacts">
          Contacts
        </Link>
        <Link key="about" to="/about">
          About
        </Link>
        <Link key="posts" to="/posts">
          Posts
        </Link>
      </Navbar>
      <div className="bg-gray-900  mx-auto flex flex-col items-center justify-center min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </div>
    </Fragment>
  );
};

export default App;
