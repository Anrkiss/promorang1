import React, { useState, useEffect } from 'react';
import { PlusCircle, BarChart2, DollarSign, Gift } from 'lucide-react';

const MerchantPortal: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [rewards, setRewards] = useState<any[]>([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', reward: 0 });
  const [newReward, setNewReward] = useState({ title: '', description: '', cost: 0 });
  const [stats, setStats] = useState({ totalTasks: 0, totalRewards: 0 });

  useEffect(() => {
    // Fetch merchant's tasks and rewards from API
    // This is a placeholder for demonstration
    setTasks([
      { id: 1, title: 'Like our Facebook post', description: 'Go to our Facebook page and like our latest post', reward: 5 },
      { id: 2, title: 'Share our Instagram story', description: 'Share our latest Instagram story to your followers', reward: 10 },
    ]);
    setRewards([
      { id: 1, title: '$5 Amazon Gift Card', description: 'Redeem for a $5 Amazon Gift Card', cost: 50 },
      { id: 2, title: '10% Discount Coupon', description: 'Get a 10% discount on your next purchase', cost: 30 },
    ]);
    setStats({
      totalTasks: 2,
      totalRewards: 2,
    });
  }, []);

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    const task = { ...newTask, id: Date.now() };
    setTasks([...tasks, task]);
    setNewTask({ title: '', description: '', reward: 0 });
    setStats(prev => ({ ...prev, totalTasks: prev.totalTasks + 1 }));
  };

  const handleCreateReward = (e: React.FormEvent) => {
    e.preventDefault();
    const reward = { ...newReward, id: Date.now() };
    setRewards([...rewards, reward]);
    setNewReward({ title: '', description: '', cost: 0 });
    setStats(prev => ({ ...prev, totalRewards: prev.totalRewards + 1 }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Merchant Portal</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Total Tasks</h2>
          <div className="flex items-center space-x-2">
            <BarChart2 className="text-primary-500" />
            <span className="text-2xl font-bold">{stats.totalTasks}</span>
          </div>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Total Rewards</h2>
          <div className="flex items-center space-x-2">
            <Gift className="text-primary-500" />
            <span className="text-2xl font-bold">{stats.totalRewards}</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Create New Task</h2>
          <form onSubmit={handleCreateTask} className="card space-y-4">
            <div>
              <label htmlFor="taskTitle" className="block text-sm font-medium text-gray-700">Task Title</label>
              <input
                type="text"
                id="taskTitle"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="taskDescription" className="block text-sm font-medium text-gray-700">Task Description</label>
              <textarea
                id="taskDescription"
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                rows={3}
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="taskReward" className="block text-sm font-medium text-gray-700">Reward (tokens)</label>
              <input
                type="number"
                id="taskReward"
                value={newTask.reward}
                onChange={(e) => setNewTask({ ...newTask, reward: parseInt(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                required
              />
            </div>
            <button type="submit" className="btn-primary">
              Create Task
            </button>
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Create New Reward</h2>
          <form onSubmit={handleCreateReward} className="card space-y-4">
            <div>
              <label htmlFor="rewardTitle" className="block text-sm font-medium text-gray-700">Reward Title</label>
              <input
                type="text"
                id="rewardTitle"
                value={newReward.title}
                onChange={(e) => setNewReward({ ...newReward, title: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="rewardDescription" className="block text-sm font-medium text-gray-700">Reward Description</label>
              <textarea
                id="rewardDescription"
                value={newReward.description}
                onChange={(e) => setNewReward({ ...newReward, description: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                rows={3}
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="rewardCost" className="block text-sm font-medium text-gray-700">Cost (tokens)</label>
              <input
                type="number"
                id="rewardCost"
                value={newReward.cost}
                onChange={(e) => setNewReward({ ...newReward, cost: parseInt(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                required
              />
            </div>
            <button type="submit" className="btn-primary">
              Create Reward
            </button>
          </form>
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Tasks</h2>
          <div className="space-y-4">
            {tasks.map(task => (
              <div key={task.id} className="card">
                <h3 className="font-semibold">{task.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                <p className="text-sm">Reward: {task.reward} tokens</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Rewards</h2>
          <div className="space-y-4">
            {rewards.map(reward => (
              <div key={reward.id} className="card">
                <h3 className="font-semibold">{reward.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{reward.description}</p>
                <p className="text-sm">Cost: {reward.cost} tokens</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantPortal;