import React from 'react';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';

const StatisticsDashboard = () => {
  // Dummy data for pie chart
  const pieData = [
    { name: 'Completed', value: 400 },
    { name: 'In Progress', value: 300 },
    { name: 'Pending', value: 200 },
    { name: 'On Hold', value: 100 },
  ];

  // Dummy data for bar chart
  const barData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 900 },
  ];

  // Color scheme matching the timeline gradient
  const COLORS = ['#2ecc71', '#27ae60', '#2980b9', '#3498db'];
  const barColor = 'url(#barGradient)';

  return (
    <div className="card-container-about-message">
      <div className="about-message">
        <div className="min-h-screen p-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-[#2c3e50]">Placement Statistics</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pie Chart Card */}
              <div className="bg-white rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.12)] p-6">
                <h2 className="text-xl font-semibold mb-4 text-[#2c3e50]">Task Distribution</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Bar Chart Card */}
              <div className="bg-white rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.12)] p-6">
                <h2 className="text-xl font-semibold mb-4 text-[#2c3e50]">Monthly Progress</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={barData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <defs>
                        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2ecc71" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#2980b9" stopOpacity={0.8} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" fill={barColor} radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { title: 'Total Tasks', value: '1,024', change: '+12%' },
                { title: 'Completion Rate', value: '78%', change: '+5%' },
                { title: 'Avg. Time', value: '3.2 days', change: '-0.5' },
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-[#2ecc71] to-[#2980b9] rounded-lg p-6 text-white shadow-[0_8px_15px_rgba(0,0,0,0.2)]">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <div className="flex items-end justify-between mt-2">
                    <span className="text-3xl font-bold">{item.value}</span>
                    <span className="text-sm bg-white/20 rounded-full px-3 py-1">{item.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsDashboard;


//     width: 100%;
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: 1000;
//     background-color: #f5f7fa;
//     transition: all 0.3s ease;
//     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
//     font-family: "Inter", sans-serif;
// }