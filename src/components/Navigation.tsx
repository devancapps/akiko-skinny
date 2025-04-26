
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="fixed top-8 right-8 z-50">
      <div className="bg-white/10 backdrop-blur-md rounded-full shadow-lg px-6 py-3 border border-white/20">
        <ul className="flex space-x-8">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-white hover:text-blue-200 transition-colors duration-200 font-medium ${
                  isActive ? 'text-blue-300' : ''
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/blogs" 
              className={({ isActive }) => 
                `text-white hover:text-blue-200 transition-colors duration-200 font-medium ${
                  isActive ? 'text-blue-300' : ''
                }`
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/resources" 
              className={({ isActive }) => 
                `text-white hover:text-blue-200 transition-colors duration-200 font-medium ${
                  isActive ? 'text-blue-300' : ''
                }`
              }
            >
              Resources
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 