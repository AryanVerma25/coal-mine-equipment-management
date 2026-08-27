import { Clock, CheckCircle2, Wrench } from "lucide-react";

function RecentMaintenance() {
  const maintenance = [
    {
      equipment: "Excavator EX-204",
      engineer: "Aryan",
      priority: "High",
      status: "Pending",
      due: "12 Jul",
    },
    {
      equipment: "Dump Truck DT-105",
      engineer: "Rahul",
      priority: "Low",
      status: "Completed",
      due: "10 Jul",
    },
    {
      equipment: "Drill Machine DR-301",
      engineer: "Aman",
      priority: "Medium",
      status: "In Progress",
      due: "15 Jul",
    },
  ];

  const getStatus = (status) => {
    switch (status) {
      case "Completed":
        return (
          <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">
            Completed
          </span>
        );

      case "Pending":
        return (
          <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-semibold">
            Pending
          </span>
        );

      default:
        return (
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold">
            In Progress
          </span>
        );
    }
  };

  const getPriority = (priority) => {
    switch (priority) {
      case "High":
        return (
          <span className="text-red-400 font-semibold">
            High
          </span>
        );

      case "Medium":
        return (
          <span className="text-yellow-400 font-semibold">
            Medium
          </span>
        );

      default:
        return (
          <span className="text-green-400 font-semibold">
            Low
          </span>
        );
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Recent Maintenance
          </h2>

          <p className="text-gray-400 mt-1 text-sm">
            Latest maintenance activities across all mining sites
          </p>

        </div>

        <Clock className="text-amber-400" size={26} />

      </div>

      <div className="space-y-5">

        {maintenance.map((item, index) => (

          <div
            key={index}
            className="bg-slate-800/50 hover:bg-slate-800 transition rounded-xl p-5 border border-slate-700"
          >

            <div className="flex justify-between items-start">

              <div>

                <h3 className="text-white font-semibold text-lg">
                  {item.equipment}
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  Assigned to {item.engineer}
                </p>

              </div>

              {getStatus(item.status)}

            </div>

            <div className="flex justify-between items-center mt-5">

              <div className="flex gap-6 text-sm">

                <div>
                  <p className="text-gray-500">Priority</p>

                  {getPriority(item.priority)}
                </div>

                <div>
                  <p className="text-gray-500">Due Date</p>

                  <p className="text-white font-medium">
                    {item.due}
                  </p>
                </div>

              </div>

              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold">

                {item.engineer.charAt(0)}

              </div>

            </div>

          </div>

        ))}

      </div>

      <button className="mt-6 w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-400 transition rounded-xl py-3 text-white font-semibold flex items-center justify-center gap-2">

        <Wrench size={18} />

        View All Maintenance

      </button>

    </div>
  );
}

export default RecentMaintenance;