import {
ResponsiveContainer,
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
BarChart,
Bar,
PieChart,
Pie,
Cell,
AreaChart,
Area,
} from "recharts";

const revenueData = [
{ month: "Jan", revenue: 12000 },
{ month: "Feb", revenue: 18000 },
{ month: "Mar", revenue: 15000 },
{ month: "Apr", revenue: 25000 },
{ month: "May", revenue: 32000 },
{ month: "Jun", revenue: 45000 },
];

const userData = [
{ month: "Jan", users: 300 },
{ month: "Feb", users: 600 },
{ month: "Mar", users: 900 },
{ month: "Apr", users: 1400 },
{ month: "May", users: 1900 },
{ month: "Jun", users: 2500 },
];

const trafficData = [
{ name: "Desktop", value: 55 },
{ name: "Mobile", value: 35 },
{ name: "Tablet", value: 10 },
];

const COLORS = ["#06b6d4", "#ec4899", "#facc15"];

function DashboardCharts() {
return ( <div className="space-y-8 mt-10">


  {/* Analytics Cards */}

  <div className="grid md:grid-cols-4 gap-4">

    <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5">
      <h3 className="text-cyan-400 font-bold">Daily Visitors</h3>
      <p className="text-3xl text-white mt-2">12,450</p>
    </div>

    <div className="bg-pink-500/10 border border-pink-500/20 rounded-2xl p-5">
      <h3 className="text-pink-400 font-bold">Bounce Rate</h3>
      <p className="text-3xl text-white mt-2">21%</p>
    </div>

    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5">
      <h3 className="text-yellow-400 font-bold">Sessions</h3>
      <p className="text-3xl text-white mt-2">18.2K</p>
    </div>

    <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-5">
      <h3 className="text-green-400 font-bold">Profit</h3>
      <p className="text-3xl text-white mt-2">₹92K</p>
    </div>

  </div>

  {/* Charts */}

  <div className="grid lg:grid-cols-2 gap-8">

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-6">
      <h2 className="text-white text-2xl font-bold mb-6">
        Revenue Analytics 📈
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={revenueData}>
          <XAxis dataKey="month" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#06b6d4"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-6">
      <h2 className="text-white text-2xl font-bold mb-6">
        User Growth 👥
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={userData}>
          <XAxis dataKey="month" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Bar dataKey="users" fill="#ec4899" />
        </BarChart>
      </ResponsiveContainer>
    </div>

  </div>

  {/* Area + Pie */}

  <div className="grid lg:grid-cols-2 gap-8">

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-6">
      <h2 className="text-white text-2xl font-bold mb-6">
        Engagement Trend 🚀
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={userData}>
          <XAxis dataKey="month" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="users"
            stroke="#06b6d4"
            fill="#06b6d4"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-6">
      <h2 className="text-white text-2xl font-bold mb-6">
        Traffic Sources 🌍
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={trafficData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
          >
            {trafficData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>

  </div>

  {/* Widgets */}

  <div className="grid lg:grid-cols-2 gap-8">

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-6">
      <h2 className="text-white text-2xl font-bold mb-4">
        📅 Calendar
      </h2>

      <div className="text-center text-white text-6xl">
        21
      </div>

      <p className="text-center text-gray-400 mt-3">
        June 2026
      </p>
    </div>

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-6">
      <h2 className="text-white text-2xl font-bold mb-4">
        🌤 Weather
      </h2>

      <div className="text-center">
        <p className="text-6xl">☀️</p>
        <p className="text-4xl text-white mt-3">
          28°C
        </p>
        <p className="text-gray-400">
          Vellore, India
        </p>
      </div>
    </div>

  </div>

</div>


);
}

export default DashboardCharts;
