import { Heart, Facebook, Twitter, Instagram, Mail, Apple, PlayCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-gray-800">
          <div className="md:col-span-4 space-y-8">
            <div className="flex items-center space-x-3">
              <Heart className="w-10 h-10 text-primary" />
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
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#careers" className="footer-link">Careers</a></li>
              <li><a href="#press" className="footer-link">Press Kit</a></li>
              <li><a href="#blog" className="footer-link">Blog</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-4">
              <li><a href="#help" className="footer-link">Help Center</a></li>
              <li><a href="#safety" className="footer-link">Safety Center</a></li>
              <li><a href="#community" className="footer-link">Community</a></li>
              <li><a href="#feedback" className="footer-link">Feedback</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="#terms" className="footer-link">Terms of Service</a></li>
              <li><a href="#cookie" className="footer-link">Cookie Policy</a></li>
              <li><a href="#licensing" className="footer-link">Licensing</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6">Download</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="inline-flex items-center px-4 py-2 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <Apple className="w-6 h-6 text-gray-900" />
                  <div className="ml-3">
                    <div className="text-xs text-gray-600">Download on the</div>
                    <div className="text-sm font-semibold text-gray-900">App Store</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center px-4 py-2 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <PlayCircle className="w-6 h-6 text-gray-900" />
                  <div className="ml-3">
                    <div className="text-xs text-gray-600">Get it on</div>
                    <div className="text-sm font-semibold text-gray-900">Google Play</div>
                  </div>
                </a>
              </li>
            </ul>
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
