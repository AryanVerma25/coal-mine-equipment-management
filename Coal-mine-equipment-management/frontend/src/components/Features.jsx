import {
  LayoutDashboard,
  Truck,
  Wrench,
  ShieldCheck,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: <LayoutDashboard size={42} />,
      title: "Real-Time Dashboard",
      description:
        "Monitor equipment performance, maintenance schedules, and mining operations from one centralized dashboard.",
    },
    {
      icon: <Truck size={42} />,
      title: "Equipment Management",
      description:
        "Manage excavators, dump trucks, drilling machines, and all heavy mining equipment efficiently.",
    },
    {
      icon: <Wrench size={42} />,
      title: "Maintenance Tracking",
      description:
        "Schedule preventive maintenance, record repairs, and reduce unexpected equipment downtime.",
    },
    {
      icon: <ShieldCheck size={42} />,
      title: "Secure Access",
      description:
        "JWT authentication with role-based access control for Admins, Engineers, and Operators.",
    },
  ];

  return (
    <section
      id="features"
      className="relative bg-slate-950 py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[170px] rounded-full"></div>
      </div>

      <div className="relative max-w-[1500px] mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="bg-amber-500/10 border border-amber-400 text-amber-300 px-5 py-2 rounded-full text-sm font-medium">
            ⭐ Core Features
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-5xl md:text-6xl font-bold text-white">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
            MineTrack
          </span>
          ?
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-center text-gray-400 text-lg max-w-3xl mx-auto leading-8">
          Empowering mining operations with intelligent equipment
          management, predictive maintenance, and secure digital
          solutions to improve operational efficiency.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-24">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative min-h-[360px] bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:border-amber-400 hover:shadow-[0_0_40px_rgba(245,158,11,0.18)]"
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-500"></div>

              <div className="p-8 flex flex-col items-center text-center h-full">

                {/* Icon */}
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-white transition-all duration-300 mb-8">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-5">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-8">
                  {feature.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;