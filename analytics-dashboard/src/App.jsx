import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import DashboardCharts from "./components/DashboardCharts";
import DashboardExtras from "./components/DashboardExtras";

function App() {
return ( <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black flex">

  {/* Sidebar */}
  <Sidebar />

  {/* Main Content */}
  <div className="flex-1 flex flex-col">

    <Navbar />

    <main className="p-8">

      {/* Header */}
      <div className="mb-10">

        <h1 className="text-5xl font-extrabold text-white mb-3">
          Dashboard Overview 🚀
        </h1>

        <p className="text-gray-400 text-lg">
          Welcome back, Nikitha. Here's what's happening today.
        </p>

      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white/10 backdrop-blur-xl border border-green-500/20 rounded-3xl p-6 shadow-xl hover:scale-105 transition-all duration-300">

          <p className="text-gray-400">
            Total Revenue
          </p>

          <h2 className="text-4xl font-bold text-green-400 mt-2">
            ₹45,000
          </h2>

          <p className="text-green-300 mt-2">
            +12% this month
          </p>

        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-6 shadow-xl hover:scale-105 transition-all duration-300">

          <p className="text-gray-400">
            Active Users
          </p>

          <h2 className="text-4xl font-bold text-cyan-400 mt-2">
            2,500
          </h2>

          <p className="text-cyan-300 mt-2">
            +210 new users
          </p>

        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-6 shadow-xl hover:scale-105 transition-all duration-300">

          <p className="text-gray-400">
            Orders
          </p>

          <h2 className="text-4xl font-bold text-pink-400 mt-2">
            850
          </h2>

          <p className="text-pink-300 mt-2">
            +8% growth
          </p>

        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-yellow-500/20 rounded-3xl p-6 shadow-xl hover:scale-105 transition-all duration-300">

          <p className="text-gray-400">
            Conversion Rate
          </p>

          <h2 className="text-4xl font-bold text-yellow-400 mt-2">
            18%
          </h2>

          <p className="text-yellow-300 mt-2">
            Excellent Performance
          </p>

        </div>

      </div>

      {/* Charts Section */}
      <DashboardCharts />
      <DashboardExtras />

      {/* Footer */}
      <div className="mt-12 text-center text-gray-500 border-t border-white/10 pt-6">

        Designed & Developed by
        <span className="text-cyan-400 font-semibold">
          {" "}Nikitha Bharath
        </span>

        <p className="mt-2">
          AdminPro Analytics Dashboard • VIT Vellore
        </p>

      </div>

    </main>

  </div>

</div>


);
}

export default App;
