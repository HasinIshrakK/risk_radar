import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-gray-300 py-8 mt-2">
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto lg:px-0 px-6 ">
        
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">
            FraudGuard
          </h2>
          <p className="text-sm">
            A smart fraud detection system that monitors suspicious activities
            and ensures secure transactions.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">
            Quick Links
          </h2>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
            <li className="hover:text-blue-400 cursor-pointer">Alerts</li>
            <li className="hover:text-blue-400 cursor-pointer">Reports</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">
            Contact
          </h2>
          <p className="text-sm">support@fraudguard.com</p>
          <p className="text-sm">+880 1234-567890</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm mt-6 border-t border-green-700 pt-4">
        © 2026 FraudGuard. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
