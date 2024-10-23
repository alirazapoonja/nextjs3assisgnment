import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 via-blue-500 to-blue-400 text-white p-5">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold transition-colors hover:text-yellow-300 duration-300">
          © 2024 Byte Communication All rights reserved.
        </p>
        <div className="mt-3">
          <a
            href="mailto:bytecommunication@gmail.com"
            className="text-white hover:text-yellow-300 hover:underline transition-colors duration-300"
          >
            
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
