import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-center py-4 mt-12">
      <p className="text-[#ddd] text-sm">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
