import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 ">
      <div className="max-w-7xl mx-auto py-12 px-2 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <Link to="/" className="text-white font-semibold">
            Home
          </Link>
          <Link to="/about" className="text-white font-semibold">
            About
          </Link>
          <Link to="/jobs" className="text-white font-semibold">
            Jobs
          </Link>
          <Link to="/developers" className="text-white font-semibold">
            Featured Candidates
          </Link>
          <Link to="/donate" className="text-white font-semibold">
            Donate
          </Link>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com"
            className="text-white font-semibold"
          >
            Facebook
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.twitter.com"
            className="text-white font-semibold"
          >
            Twitter
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instragram.com"
            className="text-white font-semibold"
          >
            Instagram
          </a>
        </div>
        <div className="mt-8 text-center text-white text-sm">
          &copy; {new Date().getFullYear()} Connected. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
