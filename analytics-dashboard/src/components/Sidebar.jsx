import {
  FaChartLine,
  FaUsers,
  FaShoppingCart,
  FaCog,
  FaBell,
  FaChartPie,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-72 min-h-screen bg-slate-950/80 backdrop-blur-xl border-r border-cyan-500/20 text-white flex flex-col justify-between p-6">

      {/* Top Section */}

      <div>

        {/* Logo */}

        <div className="mb-12">

          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            AdminPro
          </h1>

          <p className="text-gray-400 mt-2 text-sm">
            Smart Analytics Dashboard
          </p>

        </div>

        {/* Navigation */}

        <div className="space-y-3">

          <div className="flex items-center gap-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 p-4 rounded-2xl cursor-pointer hover:scale-105 transition-all shadow-lg shadow-cyan-500/10">
            <FaChartLine className="text-cyan-400 text-xl" />
            <p className="font-semibold">Dashboard</p>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/10 cursor-pointer transition-all hover:translate-x-2">
            <FaUsers className="text-blue-400 text-xl" />
            <p>Users</p>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/10 cursor-pointer transition-all hover:translate-x-2">
            <FaShoppingCart className="text-pink-400 text-xl" />
            <p>Orders</p>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/10 cursor-pointer transition-all hover:translate-x-2">
            <FaChartPie className="text-yellow-400 text-xl" />
            <p>Reports</p>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/10 cursor-pointer transition-all hover:translate-x-2">
            <FaBell className="text-red-400 text-xl" />
            <p>Notifications</p>

            <span className="ml-auto bg-red-500 text-xs px-2 py-1 rounded-full">
              3
            </span>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/10 cursor-pointer transition-all hover:translate-x-2">
            <FaCog className="text-green-400 text-xl" />
            <p>Settings</p>
          </div>

        </div>

      </div>

      {/* Bottom Section */}

      <div>

        {/* Profile Card */}

        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-5">

          <div className="flex items-center gap-4">

            <FaUserCircle className="text-5xl text-cyan-400" />

            <div>

              <h3 className="font-bold text-lg">
                Nikitha Bharath
              </h3>

              <p className="text-gray-400 text-sm">
                Super Admin
              </p>

            </div>

          </div>

        </div>

        {/* Logout */}

        <button className="w-full mt-5 flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-pink-500 py-3 rounded-2xl font-semibold hover:scale-105 transition-all shadow-lg">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </div>
  );
}

export default Sidebar;