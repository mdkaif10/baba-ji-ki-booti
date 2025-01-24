import { Heart } from 'lucide-react';
import yukktaLogo from '../assets/yukkta Logo.png';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={yukktaLogo} className={`w-8 h-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} alt="Yukkta Logo" />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Yukkta</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Features</a>
            <a href="#services" className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Services</a>
            <a href="#about" className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'}`}>About</a>
            <a href="#join" className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Join Us</a>
            <a href="#feedback" className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Contact</a>
          </div>
          {/* <div className="hidden md:flex space-x-4">
            <button className={`px-6 py-2 rounded-full border-2 ${isScrolled ? 'border-blue-600 text-blue-600' : 'border-white text-white'} font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300`}>
              Sign In
            </button>
            <button className={`px-6 py-2 rounded-full ${isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} font-medium hover:shadow-lg transition-all duration-300`}>
              Get Started
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
