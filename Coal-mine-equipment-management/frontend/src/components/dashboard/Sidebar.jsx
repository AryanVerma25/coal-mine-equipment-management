import {
  LayoutDashboard,
  Truck,
  Wrench,
  BarChart3,
  User,
  LogOut,
  Pickaxe,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("rememberMe");

    navigate("/login");
  };

 const user = JSON.parse(localStorage.getItem("user"));

let menuItems = [];

if (user?.role === "Admin") {
  menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      name: "Equipment Management",
      icon: <Truck size={20} />,
      path: "/equipment",
    },
    {
      name: "Fault Management",
      icon: <Wrench size={20} />,
      path: "/fault-management",
    },
    {
      name: "Reports & Analytics",
      icon: <BarChart3 size={20} />,
      path: "/reports",
    },
    {
      name: "Profile",
      icon: <User size={20} />,
      path: "/profile",
    },
  ];
}

else if (user?.role === "Operator") {
  menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      name: "My Equipment",
      icon: <Truck size={20} />,
      path: "/my-equipment",
    },
    {
      name: "Report Fault",
      icon: <Wrench size={20} />,
      path: "/report-fault",
    },
    {
      name: "My Requests",
      icon: <BarChart3 size={20} />,
      path: "/my-requests",
    },
    {
      name: "Profile",
      icon: <User size={20} />,
      path: "/profile",
    },
  ];
}

else if (user?.role === "Engineer") {
  menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      name: "Assigned Jobs",
      icon: <Wrench size={20} />,
      path: "/assigned-jobs",
    },
    {
      name: "Maintenance History",
      icon: <BarChart3 size={20} />,
      path: "/maintenance-history",
    },
    {
      name: "Profile",
      icon: <User size={20} />,
      path: "/profile",
    },
  ];
}
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-900 border-r border-slate-800 flex flex-col justify-between">

      {/* Logo */}
      <div>

        <div className="px-8 py-8 border-b border-slate-800">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
              <Pickaxe className="text-white" size={24} />
            </div>

            <div>

              <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                MineTrack
              </h1>

              <p className="text-xs tracking-[4px] uppercase text-gray-500 mt-1">
                Mining Operations
              </p>

            </div>

          </div>

        </div>

        {/* Navigation */}

        <nav className="mt-8 px-5">

          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-4 rounded-xl mb-3 transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                    : "text-gray-400 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              {item.icon}

              <span className="font-medium">
                {item.name}
              </span>

            </NavLink>
          ))}

        </nav>

      </div>

      {/* Logout */}

      <div className="p-5 border-t border-slate-800">

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 bg-slate-800 hover:bg-red-500 transition duration-300 text-white py-4 rounded-xl font-medium"
        >

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;