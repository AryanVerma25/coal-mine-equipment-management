import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/70 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

        {/* Badge */}
        <div className="mb-6">
          <span className="bg-amber-500/20 border border-amber-400 text-amber-300 px-5 py-2 rounded-full text-sm md:text-base font-medium backdrop-blur-md">
           ⛏️ Smart Mining Operations
          </span>
        </div>

        {/* Logo */}
        <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
          MineTrack
        </h1>

        {/* Heading */}
        <h2 className="mt-8 text-3xl md:text-6xl font-bold text-white leading-tight max-w-5xl">
          Smart{" "}
          <span className="text-amber-400">
            Coal Mine
          </span>{" "}
          Equipment
          <br />
          Management System
        </h2>

        {/* Tagline */}
        <p className="mt-6 text-xl md:text-2xl text-gray-200 font-medium">
          Track • Monitor • Maintain Mining Equipment
        </p>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-gray-300 text-base md:text-lg leading-8">
          MineTrack enables mining companies to efficiently manage heavy
          equipment, schedule preventive maintenance, reduce downtime,
          optimize workforce productivity, and improve operational
          efficiency through a centralized digital management platform.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-6">

          <a
            href="#features"
            className="bg-amber-500 hover:bg-amber-400 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-[0_0_30px_rgba(245,158,11,0.45)] hover:scale-105 transition-all duration-300"
          >
            Get Started
          </a>

          <Link
            to="/login"
            className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            Login
          </Link>

        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <h3 className="text-4xl font-bold text-amber-400">500+</h3>
            <p className="text-gray-300 mt-2">Equipment</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <h3 className="text-4xl font-bold text-amber-400">25+</h3>
            <p className="text-gray-300 mt-2">Mining Sites</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <h3 className="text-4xl font-bold text-amber-400">1500+</h3>
            <p className="text-gray-300 mt-2">Maintenance Logs</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <h3 className="text-4xl font-bold text-amber-400">100+</h3>
            <p className="text-gray-300 mt-2">Engineers</p>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 flex flex-col items-center animate-bounce">

          <span className="text-gray-300 uppercase tracking-[4px] text-sm">
            Scroll
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-amber-400 mt-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>

        </div>

      </div>
    </section>
  );
}

export default Hero;