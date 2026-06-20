function DashboardExtras() {
const orders = [
{
id: "#1001",
customer: "Rahul Sharma",
amount: "₹2,500",
status: "Completed",
},
{
id: "#1002",
customer: "Priya Verma",
amount: "₹1,800",
status: "Pending",
},
{
id: "#1003",
customer: "Arjun Patel",
amount: "₹4,200",
status: "Completed",
},
{
id: "#1004",
customer: "Sneha Reddy",
amount: "₹3,100",
status: "Processing",
},
];

const activities = [
"🔔 New user registered",
"🛒 Order #1004 received",
"📈 Revenue increased by 8%",
"👤 User profile updated",
"💳 Payment processed successfully",
];

const products = [
{ name: "Premium Plan", sales: "1,250" },
{ name: "Business Suite", sales: "980" },
{ name: "Enterprise Pack", sales: "720" },
];

return ( <div className="space-y-8 mt-10">


  {/* AI Insights */}

  <div className="bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-6">

    <h2 className="text-3xl font-bold text-white mb-4">
      🤖 AI Business Insights
    </h2>

    <div className="grid md:grid-cols-3 gap-4">

      <div className="bg-white/10 p-5 rounded-2xl">
        <h3 className="text-cyan-400 font-semibold">
          Revenue Forecast
        </h3>
        <p className="text-white mt-2">
          Expected growth of 12% next month.
        </p>
      </div>

      <div className="bg-white/10 p-5 rounded-2xl">
        <h3 className="text-pink-400 font-semibold">
          User Retention
        </h3>
        <p className="text-white mt-2">
          Retention rate increased to 89%.
        </p>
      </div>

      <div className="bg-white/10 p-5 rounded-2xl">
        <h3 className="text-yellow-400 font-semibold">
          Recommendations
        </h3>
        <p className="text-white mt-2">
          Increase marketing budget by 10%.
        </p>
      </div>

    </div>

  </div>

  {/* Orders + Activity */}

  <div className="grid lg:grid-cols-2 gap-8">

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        🛒 Recent Orders
      </h2>

      <div className="space-y-4">

        {orders.map((order) => (
          <div
            key={order.id}
            className="flex justify-between items-center bg-white/5 hover:bg-white/10 transition p-4 rounded-xl"
          >
            <div>
              <p className="text-white font-semibold">
                {order.customer}
              </p>

              <p className="text-gray-400 text-sm">
                {order.id}
              </p>
            </div>

            <div className="text-right">
              <p className="text-cyan-400 font-bold">
                {order.amount}
              </p>

              <p className="text-gray-400 text-sm">
                {order.status}
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        ⚡ Live Activity Feed
      </h2>

      <div className="space-y-4">

        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-white/5 hover:bg-white/10 transition p-4 rounded-xl text-white"
          >
            {activity}
          </div>
        ))}

      </div>

    </div>

  </div>

  {/* Progress + Top Products */}

  <div className="grid lg:grid-cols-2 gap-8">

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        🎯 Goal Tracking
      </h2>

      <div className="space-y-6">

        <div>
          <div className="flex justify-between text-white mb-2">
            <span>Revenue Goal</span>
            <span>89%</span>
          </div>

          <div className="h-3 bg-gray-700 rounded-full">
            <div className="h-3 bg-green-400 rounded-full w-[89%]"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-white mb-2">
            <span>User Growth</span>
            <span>76%</span>
          </div>

          <div className="h-3 bg-gray-700 rounded-full">
            <div className="h-3 bg-cyan-400 rounded-full w-[76%]"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-white mb-2">
            <span>Conversion Target</span>
            <span>64%</span>
          </div>

          <div className="h-3 bg-gray-700 rounded-full">
            <div className="h-3 bg-pink-400 rounded-full w-[64%]"></div>
          </div>
        </div>

      </div>

    </div>

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        🏆 Top Products
      </h2>

      <div className="space-y-4">

        {products.map((product, index) => (
          <div
            key={index}
            className="flex justify-between bg-white/5 p-4 rounded-xl"
          >
            <span className="text-white">
              {product.name}
            </span>

            <span className="text-cyan-400 font-bold">
              {product.sales}
            </span>
          </div>
        ))}

      </div>

    </div>

  </div>

</div>


);
}

export default DashboardExtras;
