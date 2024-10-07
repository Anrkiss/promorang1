import React, { useState, useEffect } from 'react';
import { Users, ShoppingBag, AlertCircle } from 'lucide-react';

const AdminPanel: React.FC = () => {
  const [stats, setStats] = useState({ users: 0, merchants: 0, tasks: 0, disputes: 0 });
  const [recentActivity, setRecentActivity] = useState<string[]>([]);

  useEffect(() => {
    // Fetch admin stats and recent activity from API
    // This is a placeholder for demonstration
    setStats({ users: 1000, merchants: 50, tasks: 500, disputes: 3 });
    setRecentActivity([
      'New user registered: John Doe',
      'Task completed: Like Facebook post',
      'New merchant joined: XYZ Company',
      'Dispute raised: Task verification issue',
    ]);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={<Users />} title="Total Users" value={stats.users} />
        <StatCard icon={<ShoppingBag />} title="Merchants" value={stats.merchants} />
        <StatCard icon={<AlertCircle />} title="Active Tasks" value={stats.tasks} />
        <StatCard icon={<AlertCircle />} title="Open Disputes" value={stats.disputes} />
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-2">
          {recentActivity.map((activity, index) => (
            <li key={index} className="text-sm text-gray-600">{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ icon: React.ReactNode; title: string; value: number }> = ({ icon, title, value }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center space-x-2 mb-2">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default AdminPanel;