import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand + Contact */}
          <div>
            <h2 className="text-2xl font-light tracking-widest text-white mb-6">
              ATTAR UNITED
            </h2>

            <p className="text-sm leading-relaxed text-gray-400 mb-4">
              P.O. Box 54613 Jeddah 21524<br />
              Kingdom of Saudi Arabia
            </p>

            <p className="text-sm text-gray-400">
              T: +966 12 6142913 <br />
              F: +966 12 6142912
            </p>

            <p className="text-sm mt-2 text-gray-400">
              E: info@attarunited.com
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg text-white mb-6 tracking-wide">
              NEWSLETTER SUBSCRIPTION
            </h3>

            <p className="text-sm text-gray-400 mb-6">
              Sign up for regular updates from our stores, news and much more.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Your Email"
                className="flex-1 bg-transparent border border-gray-700 focus:border-yellow-500 focus:ring-0 px-4 py-3 text-sm outline-none transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-yellow-600 hover:bg-yellow-500 text-black px-6 py-3 text-sm tracking-wide transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg text-white mb-6 tracking-wide">
              FOLLOW US
            </h3>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300">
                <FaInstagram size={16} />
              </a>

              <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300">
                <FaTwitter size={16} />
              </a>

              <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300">
                <FaFacebookF size={16} />
              </a>

              <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-16 pt-6 text-center text-xs text-gray-500 tracking-wide">
          © 2026 Attar United. All rights reserved.
        </div>

      </div>
    </footer>
  );
}