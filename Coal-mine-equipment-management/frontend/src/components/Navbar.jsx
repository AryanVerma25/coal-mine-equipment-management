import { Link } from "react-router-dom";
import { Pickaxe, Menu } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
];

  return (
    <header className="fixed top-5 left-0 w-full z-50 px-6">
      <nav className="max-w-[1500px] mx-auto bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">

        <div className="flex items-center justify-between px-8 py-3">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">

            <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2.5 rounded-xl shadow-lg group-hover:rotate-12 transition duration-300">

              <Pickaxe
                size={22}
                className="text-white"
              />

            </div>

            <div>

              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                MineTrack
              </h1>

              <p className="text-[11px] tracking-[3px] uppercase text-gray-400">
                Mining Operations Platform
              </p>

            </div>

          </Link>

          {/* Desktop Navigation */}

          <div className="hidden lg:flex items-center gap-10">

            {navLinks.map((item) => (

              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-300 hover:text-amber-400 transition duration-300 font-medium group"
              >
                {item.name}

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>

              </a>

            ))}

          </div>

          {/* Login Button */}

          <div className="hidden lg:block">

            <Link
              to="/login"
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-7 py-3 rounded-xl font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(245,158,11,0.45)] hover:scale-105 transition duration-300"
            >
              Login
            </Link>

          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            <Menu size={30} />
          </button>

        </div>

        {/* Mobile Menu */}

        {menuOpen && (

          <div className="lg:hidden border-t border-white/10 bg-slate-900/90 rounded-b-2xl">

            <div className="flex flex-col p-6 space-y-5">

              {navLinks.map((item) => (

                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-amber-400 transition"
                >
                  {item.name}
                </a>

              ))}

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-xl text-center font-semibold"
              >
                Login
              </Link>

            </div>

          </div>

        )}

      </nav>
    </header>
  );
}

export default Navbar;