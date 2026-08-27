import {
  Truck,
  Wrench,
  Activity,
  Users,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: <Truck size={40} />,
      title: "Equipment Tracking",
      description:
        "Track excavators, dump trucks, drilling machines, and all mining equipment from a centralized dashboard.",
    },
    {
      icon: <Wrench size={40} />,
      title: "Preventive Maintenance",
      description:
        "Schedule maintenance tasks, monitor service history, and reduce unexpected equipment failures.",
    },
    {
      icon: <Activity size={40} />,
      title: "Real-Time Monitoring",
      description:
        "Monitor equipment availability, operational status, and maintenance alerts in real time.",
    },
    {
      icon: <Users size={40} />,
      title: "Workforce Management",
      description:
        "Manage engineers, operators, and maintenance teams with role-based responsibilities.",
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Reports & Analytics",
      description:
        "Generate insightful reports to improve equipment utilization and operational efficiency.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Secure Role Access",
      description:
        "Protect sensitive mining data with secure JWT authentication and role-based permissions.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-slate-900 py-32"
    >
      <div className="max-w-[1500px] mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center">
          <span className="px-5 py-2 rounded-full border border-amber-400 bg-amber-500/10 text-amber-300 text-sm">
            ⚙️ Our Services
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-5xl md:text-6xl font-bold text-white">
          Complete Mining{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
            Management Solution
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-6 max-w-3xl mx-auto text-center text-gray-400 text-lg leading-8">
          MineTrack provides everything required to monitor, maintain,
          and manage heavy mining equipment through one secure platform.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-950 border border-slate-800 rounded-3xl p-10 transition-all duration-300 hover:border-amber-400 hover:-translate-y-3 hover:shadow-[0_0_35px_rgba(245,158,11,0.18)]"
            >
              <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mt-8">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-8 mt-5">
                {service.description}
              </p>

              <button className="mt-8 text-amber-400 font-semibold hover:text-white transition">
                Learn More →
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;