import aboutImage from "../assets/control-room .jpeg";
import { CheckCircle } from "lucide-react";

function About() {
  const points = [
    "Centralized Equipment Management",
    "Preventive Maintenance Scheduling",
    "Real-Time Equipment Monitoring",
    "Secure Role-Based Access Control",
  ];

  return (
    <section
      id="about"
      className="relative bg-slate-900 py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-20 w-[550px] h-[550px] bg-amber-500/10 blur-[180px] rounded-full"></div>
        <div className="absolute left-0 bottom-0 w-[350px] h-[350px] bg-orange-500/5 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative max-w-[1500px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Image */}
          <div className="relative">
            {/* Glow Behind Image */}
            <div className="absolute -left-16 top-10 w-72 h-72 bg-amber-500/10 blur-[120px] rounded-full"></div>

            <div className="group relative overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">
              <img
                src={aboutImage}
                alt="Mining Operations"
                className="w-full h-[650px] object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            {/* Badge */}
            <span className="inline-block px-5 py-2 rounded-full border border-amber-400 bg-amber-500/10 text-amber-300 text-sm font-medium">
              🏢 About MineTrack
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-5xl lg:text-6xl font-bold text-white leading-tight">
              Building the Future of{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                Smart Mining
              </span>{" "}
              Operations
            </h2>

            {/* Description */}
            <p className="mt-8 text-gray-400 text-lg leading-9">
              MineTrack is an intelligent mining operations platform
              built to simplify equipment management, preventive
              maintenance, and real-time monitoring. Our solution helps
              mining companies reduce downtime, optimize operational
              efficiency, and manage heavy machinery from one secure,
              centralized dashboard.
            </p>

            {/* Feature List */}
            <div className="mt-10 space-y-6">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle
                    size={24}
                    className="text-amber-400 flex-shrink-0"
                  />

                  <span className="text-gray-300 text-lg">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-5">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
                Get Started
              </button>

              <button className="px-8 py-4 rounded-xl border border-slate-600 bg-slate-800/40 text-white font-semibold hover:bg-slate-800 hover:border-amber-400 hover:text-amber-400 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;