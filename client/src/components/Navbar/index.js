import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Navbar = () => {
  //Search Functionality
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event) => {
    event.preventDefault();
    // Perform search logic with the search term
    console.log('Search term:', searchTerm);
    window.location.replace(`/search/${searchTerm}`);
    // Reset the search term
    setSearchTerm('');
  };
  //Log out functionality
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  //Turns the items on the left into a dropdown menu when screen reaches a certain width
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    // Screen size
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(() => {
    //Listens for a resize
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-gray-800 overflow:hidden">
      <div className='mx-auto'>
        <div className="flex items-center justify-between h-16 w-full">
          <div className="flex items-center">
            <div className="flex-shrink-0"></div>
            <div className="hidden md:block">
              <div className="flex justify-center items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>

                <Link
                  to="/jobs"
                  className="md:block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Find Jobs
                </Link>
                <Link
                  to="/featured-candidates"
                  className="md:block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Find Candidates
                </Link>
              </div>
            </div>
          </div>
          {/* Checks to see if the window is at 767 pixels, before showing the dropdown menu */}
          {isMobile && (
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mix-blend-lighten text-white"
                    fill="curret"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-gray-800"
                >
                  <li>
                    <Link
                      to="/"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/jobs"
                      className="md:block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Find Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/featured-candidates"
                      className="md:block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Find Candidates
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <form
            onSubmit={handleSearch}
            className="relative md:ml-4 sm:w-auto flex justify-content-center"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="bg-gray-900 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 w-48 md:w-96"
              placeholder="Search..."
            />

            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-4 text-gray-300 hover:bg-gray-700 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 15l5-5m0 0l-5-5m5 5H4"
                />
              </svg>
            </button>
          </form>
          <div className="md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {Auth.loggedIn() ? (
                <>
                  <div className="flex justify-end flex-1 px-2">
                    <div className="flex items-stretch">
                    <h5 className='hidden lg:block text-gray-300 hover:text-white px-3 py-3 rounded-md text-sm font-medium'>Welcome! {Auth.getProfile().data.username}</h5>
                      <div className="dropdown dropdown-end">
                        <label
                          tabIndex={0}
                          className="btn btn-ghost rounded-btn"
                        >
                          <div className="avatar">
                            <div className="w-8 rounded-full">
                              <img
                                src="https://nyrevconnect.com/wp-content/uploads/2017/06/Placeholder_staff_photo-e1505825573317.png"
                                alt="avatar"
                              />
                            </div>
                          </div>
                        </label>
                        <ul
                          tabIndex={0}
                          className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4 bg-gray-800"
                        >
                          <li>
                            <Link
                              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                              to="/myportal"
                            >
                              Portal
                            </Link>
                          </li>
                          <li>
                            {' '}
                            <button
                              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                              onClick={logout}
                            >
                              Logout
                            </button>{' '}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <a
                    href="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
