import React from "react";
import logo from "../../assets/shield.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import Container from "../SharedUi/Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Offers", path: "/offers" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, path: "#" },
    { icon: <FaTwitter />, path: "#" },
    { icon: <FaLinkedinIn />, path: "#" },
    { icon: <FaGithub />, path: "#" },
  ];

  return (
    <footer className="bg-green-100/70 border-t border-slate-200 pt-8 md:pt-16 pb-8 mt20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 mb-16">
          {/* Brand Section - Spacing: mb-6 for description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <Link to="/" className="flex items-center gap-2 group shrink-0">
                <img
                  src={logo}
                  alt="logo"
                  className="w-7 md:w-8 transition-transform group-hover:scale-110"
                />
                <h1 className="text-xl md:text-2xl font-bold tracking-tighter">
                  <span className="text-slate-900">RISK</span>
                  <span className="text-green-500">RADAR</span>
                </h1>
              </Link>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 pr-4">
              A smart fraud detection system that monitors suspicious activities
              and ensures secure transactions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.path}
                  className="w-12 h-12 rounded-xl bg-white/20 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-green-600 hover:border-green-600 transition-all shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Section - Spacing: space-y-3 for list items */}
          <div className="md:pl-4">
            <h3 className="text-slate-900 font-bold uppercase text-[12px] tracking-widest mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={`${link.path}`}>
                    <button className="text-slate-500 hover:text-green-600 text-sm transition-colors font-medium">
                      {link.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section - Spacing: flex flex-col gap-4 */}
          <div>
            <h3 className="text-slate-900 font-bold uppercase text-[12px] tracking-widest mb-6">
              Contact
            </h3>
            <div className="flex flex-col gap-4 text-sm text-slate-600">
              <p className="flex flex-col">
                <span className="text-slate-400 text-[11px] font-bold uppercase mb-1">
                  Email
                </span>
                support@fraudguard.com
              </p>
              <p className="flex flex-col">
                <span className="text-slate-400 text-[11px] font-bold uppercase mb-1">
                  Phone
                </span>
                +880 1234-567890
              </p>
            </div>
          </div>

          {/* Bottom Card - Padding: p-6 */}
          <div className="bg-green-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center">
            <h3 className="text-slate-900 font-bold text-sm mb-2 text-center">
              Modern Protection
            </h3>
            <p className="text-slate-500 text-xs text-center leading-relaxed">
              Securing transactions for 500+ fintech companies worldwide.
            </p>
          </div>
        </div>
        {/* Bottom - Padding: pt-8 */}
        <div className="pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-400 text-[13px] tracking-tight">
            © {currentYear} RISKRADAR. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
