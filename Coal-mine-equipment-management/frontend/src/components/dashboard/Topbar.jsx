import { Bell, Search } from "lucide-react";

function Topbar() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="h-24 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">

      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-gray-400 mt-1">
          Welcome back, Aryan 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* Search */}
        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search equipment..."
            className="w-80 bg-slate-800 border border-slate-700 rounded-xl pl-11 pr-4 py-3 text-white placeholder-gray-400 outline-none focus:border-amber-400 transition"
          />

        </div>

        {/* Notification */}
        <button className="relative w-12 h-12 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition">

          <Bell className="text-white" size={20} />

          <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-amber-400"></span>

        </button>

        {/* User */}
        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
            A
          </div>

          <div>

            <h3 className="text-white font-semibold">
              Aryan Verma
            </h3>

            <p className="text-sm text-gray-400">
              {today}
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;