import { Mail, ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800">
      <div className="max-w-[1500px] mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              MineTrack
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Smart Mining Operations Platform designed to simplify
              equipment management, preventive maintenance, and
              real-time monitoring for modern mining industries.
            </p>

            <a
              href="mailto:contact@minetrack.com"
              className="inline-flex items-center gap-3 mt-8 px-5 py-3 rounded-xl bg-slate-800 hover:bg-amber-500 transition duration-300 text-white"
            >
              <Mail size={20} />
              contact@minetrack.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#home" className="hover:text-amber-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#features" className="hover:text-amber-400 transition">
                  Features
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-amber-400 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#equipment" className="hover:text-amber-400 transition">
                  Equipment
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-amber-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-amber-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Our Services
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>Equipment Tracking</li>
              <li>Maintenance Scheduling</li>
              <li>Real-Time Monitoring</li>
              <li>Reports & Analytics</li>
              <li>Role-Based Access</li>
              <li>Workforce Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">
              <p>📍 Ranchi, Jharkhand, India</p>

              <p>📧 contact@minetrack.com</p>

              <p>📞 +91 XXXXX XXXXX</p>

              <p>
                🕒 Monday – Saturday
                <br />
                9:00 AM – 6:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026{" "}
            <span className="text-amber-400 font-semibold">
              MineTrack
            </span>
            . All Rights Reserved.
            <br />
            Developed by{" "}
            <span className="text-white font-medium">
              Aryan Verma
            </span>
          </p>

          <a
            href="#home"
            className="mt-6 md:mt-0 flex items-center gap-2 text-amber-400 hover:text-white transition"
          >
            Back to Top
            <ArrowUp size={18} />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;