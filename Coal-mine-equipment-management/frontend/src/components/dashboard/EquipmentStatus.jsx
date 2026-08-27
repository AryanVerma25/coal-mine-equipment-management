import excavator from "../../assets/excavator.jpeg";
import dumptruck from "../../assets/dumptruck.jpeg";
import drill from "../../assets/drill.jpeg";
import conveyor from "../../assets/conveyor.jpeg";

function EquipmentStatus() {
  const equipment = [
    {
      id: "EX-204",
      name: "Excavator",
      location: "Mine A",
      status: "Working",
      health: 96,
      image: excavator,
      color: "bg-green-500",
    },
    {
      id: "DT-105",
      name: "Dump Truck",
      location: "Mine B",
      status: "Maintenance",
      health: 78,
      image: dumptruck,
      color: "bg-yellow-500",
    },
    {
      id: "DR-301",
      name: "Drill Machine",
      location: "Mine C",
      status: "Working",
      health: 89,
      image: drill,
      color: "bg-green-500",
    },
    {
      id: "CV-11",
      name: "Conveyor Belt",
      location: "Mine D",
      status: "Offline",
      health: 42,
      image: conveyor,
      color: "bg-red-500",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">
        Featured Equipment Fleet
      </h2>

      <div className="grid grid-cols-2 gap-5">

        {equipment.map((item) => (

          <div
            key={item.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-400 hover:-translate-y-1 transition-all duration-300"
          >

            {/* Image */}

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover"
            />

            {/* Content */}

            <div className="p-5">

              <div className="flex justify-between items-start">

                <div>

                  <h3 className="text-xl font-semibold text-white">
                    {item.name}
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    {item.id}
                  </p>

                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${item.color}`}
                >
                  {item.status}
                </span>

              </div>

              <p className="text-gray-400 mt-4">
                📍 {item.location}
              </p>

              {/* Health */}

              <div className="mt-5">

                <div className="flex justify-between text-sm text-gray-300 mb-2">

                  <span>Equipment Health</span>

                  <span>{item.health}%</span>

                </div>

                <div className="w-full h-2 rounded-full bg-slate-700">

                  <div
                    style={{ width: `${item.health}%` }}
                    className={`h-2 rounded-full ${item.color}`}
                  ></div>

                </div>

              </div>

              {/* Footer */}

              <div className="mt-6 flex justify-between items-center">

                <button className="text-amber-400 hover:text-orange-400 font-medium transition">
                  View Details →
                </button>

                <span className="text-xs text-gray-500">
                  Updated Today
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
}

export default EquipmentStatus;