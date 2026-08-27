import excavator from "../assets/excavator.jpeg";
import dumptruck from "../assets/dumptruck.jpeg";
import drill from "../assets/drill.jpeg";
import conveyor from "../assets/conveyor.jpeg";

function EquipmentShowcase() {
  const equipment = [
    {
      image: excavator,
      name: "Excavator EX-204",
      location: "Mine A",
      status: "Working",
      statusClass: "bg-green-500/15 text-green-400",
      dot: "bg-green-500",
      info: "Efficiency • 96%",
    },
    {
      image: dumptruck,
      name: "Dump Truck DT-105",
      location: "Mine B",
      status: "Maintenance",
      statusClass: "bg-yellow-500/15 text-yellow-400",
      dot: "bg-yellow-500",
      info: "Service Due • 2 Days",
    },
    {
      image: drill,
      name: "Drill Machine DR-301",
      location: "Mine C",
      status: "Running",
      statusClass: "bg-green-500/15 text-green-400",
      dot: "bg-green-500",
      info: "Efficiency • 89%",
    },
    {
      image: conveyor,
      name: "Conveyor Belt CV-11",
      location: "Mine D",
      status: "Offline",
      statusClass: "bg-red-500/15 text-red-400",
      dot: "bg-red-500",
      info: "Inspection Required",
    },
  ];

  return (
    <section
      id="equipment"
      className="relative bg-slate-950 py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-amber-500/10 blur-[180px] rounded-full"></div>
      </div>

      <div className="relative max-w-[1500px] mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="px-5 py-2 rounded-full border border-amber-400 bg-amber-500/10 text-amber-300 text-sm font-medium">
            ⛏ Equipment Showcase
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-5xl md:text-6xl font-bold text-white">
          Heavy Mining{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
            Equipment
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-6 max-w-3xl mx-auto text-center text-gray-400 text-lg leading-8">
          Monitor and manage heavy mining equipment across multiple
          mining sites with real-time operational status and
          maintenance tracking.
        </p>

        {/* Equipment Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:border-amber-400 hover:shadow-[0_0_40px_rgba(245,158,11,0.18)]"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${item.statusClass}`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${item.dot}`}
                  ></span>

                  {item.status}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  {item.name}
                </h3>

                <p className="mt-2 text-gray-400">{item.location}</p>

                <p className="mt-5 text-amber-400 text-sm font-semibold tracking-wide">
                  {item.info}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EquipmentShowcase;