import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-center">
      <p className="text-[#ddd] text-sm">
        &copy; {new Date().getFullYear()} Gael Garcia. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
