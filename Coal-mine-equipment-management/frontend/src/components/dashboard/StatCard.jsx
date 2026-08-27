function StatCard({ title, value, icon, color, subtitle }) {
  return (
    <div className="relative overflow-hidden bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-amber-400 transition duration-300 hover:-translate-y-1">

      {/* Background Glow */}
      <div
        className={`absolute -top-10 -right-10 w-28 h-28 rounded-full blur-3xl opacity-20 ${color}`}
      ></div>

      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400 mb-6">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-gray-400 text-sm uppercase tracking-wide">
        {title}
      </h3>

      {/* Value */}
      <h1 className="text-4xl font-bold text-white mt-3">
        {value}
      </h1>

      {/* Subtitle */}
      <p className="text-green-400 text-sm mt-4">
        {subtitle}
      </p>
    </div>
  );
}

export default StatCard;