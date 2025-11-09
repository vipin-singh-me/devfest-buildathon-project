import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        
        <p className="text-sm">
          © {new Date().getFullYear()} HackBuddy — Made with 💙 @D3 Unit
        </p>

        <div className="flex gap-4 mt-3 sm:mt-0">
          <a href="#" className="hover:text-white transition text-sm">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition text-sm">
            Terms
          </a>
          <a href="#" className="hover:text-white transition text-sm">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
