function LatestActivity() {
  const activities = [
    {
      text: "Excavator EX-204 completed scheduled maintenance.",
      time: "10 minutes ago",
    },
    {
      text: "Dump Truck DT-105 assigned to Mine B.",
      time: "35 minutes ago",
    },
    {
      text: "Drill Machine DR-301 inspection completed.",
      time: "1 hour ago",
    },
    {
      text: "Monthly equipment report generated.",
      time: "Today",
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-8">
      <h2 className="text-2xl font-bold text-white mb-6">
        Latest Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-slate-800 pb-4"
          >
            <p className="text-gray-300">
              {activity.text}
            </p>

            <span className="text-sm text-gray-500">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestActivity;