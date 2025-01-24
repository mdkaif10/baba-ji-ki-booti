import { Facebook, Twitter, Instagram, Mail, Apple, PlayCircle } from 'lucide-react';
import yukktaLogo from '../assets/yukkta Logo.png';

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-gray-700">
          <div className="md:col-span-4 space-y-8">
            <div className="flex items-center space-x-3">
              <img src={yukktaLogo} alt="yukkta logo" className="w-10 h-10"/>
              <span className="text-3xl font-bold text-white">Yukkta</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Revolutionizing healthcare through innovative technology and accessibility. Join us in our mission to make quality healthcare available to everyone, everywhere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="footer-social-link" aria-label="Email">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="footer-link text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#careers" className="footer-link text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#press" className="footer-link text-gray-400 hover:text-white">Press Kit</a></li>
              <li><a href="#blog" className="footer-link text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-4">
              <li><a href="#help" className="footer-link text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#safety" className="footer-link text-gray-400 hover:text-white">Safety Center</a></li>
              <li><a href="#community" className="footer-link text-gray-400 hover:text-white">Community</a></li>
              <li><a href="#feedback" className="footer-link text-gray-400 hover:text-white">Feedback</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#privacy" className="footer-link text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#terms" className="footer-link text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#cookie" className="footer-link text-gray-400 hover:text-white">Cookie Policy</a></li>
              <li><a href="#licensing" className="footer-link text-gray-400 hover:text-white">Licensing</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 flex flex-col justify-start items-start">
            <h3 className="text-lg font-semibold text-white mb-6">Download</h3>
            <div className="flex flex-col sm:flex-col gap-4">
              <button className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300">
                <Apple className="w-5 h-5 mr-2" />
                <div className='flex flex-col items-start'>
                  <p>App Store</p>
                  <p>coming soon....</p>
                </div>
              </button>
              <button className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300">
                <PlayCircle className="w-5 h-5 mr-2" />
                <div className='flex flex-col items-start'>
                  <p>Play Store</p>
                  <p>coming soon....</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
              <form className="max-w-md mx-auto flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="footer-newsletter-input"
                />
                <button type="submit" className="footer-newsletter-button">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="text-gray-400 text-sm">
              <p className="mb-4">&copy; {new Date().getFullYear()} Yukkta Healthcare Technologies. All rights reserved.</p>
              <p>Made with dedication for better healthcare 🌟</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
