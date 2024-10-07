import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, DollarSign, ThumbsUp, Share2, MessageCircle } from 'lucide-react';

const UserDashboard: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [tokens, setTokens] = useState(0);

  useEffect(() => {
    // Fetch tasks and user data from API
    // This is a placeholder for demonstration
    setTasks([
      { id: 1, title: 'Like our Facebook post', reward: 5, completed: false, icon: <ThumbsUp /> },
      { id: 2, title: 'Share our Instagram story', reward: 10, completed: true, icon: <Share2 /> },
      { id: 3, title: 'Comment on our YouTube video', reward: 15, completed: false, icon: <MessageCircle /> },
    ]);
    setTokens(50);
  }, []);

  const completeTask = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: true } : task
    ));
    setTokens(prevTokens => prevTokens + tasks.find(t => t.id === taskId)?.reward || 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Your Balance</h2>
          <div className="flex items-center space-x-2">
            <DollarSign className="text-primary-500" />
            <span className="text-2xl font-bold">{tokens} Tokens</span>
          </div>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Tasks Completed</h2>
          <div className="flex items-center space-x-2">
            <CheckCircle className="text-green-500" />
            <span className="text-2xl font-bold">{tasks.filter(t => t.completed).length}</span>
          </div>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Tasks Available</h2>
          <div className="flex items-center space-x-2">
            <Clock className="text-primary-500" />
            <span className="text-2xl font-bold">{tasks.filter(t => !t.completed).length}</span>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mb-4">Available Tasks</h2>
      <div className="grid gap-4">
        {tasks.map(task => (
          <div key={task.id} className="card flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="text-primary-500">{task.icon}</div>
              <div>
                <h3 className="font-semibold">{task.title}</h3>
                <p className="text-sm text-gray-600">Reward: {task.reward} tokens</p>
              </div>
            </div>
            {task.completed ? (
              <CheckCircle className="text-green-500" />
            ) : (
              <button
                onClick={() => completeTask(task.id)}
                className="btn-primary"
              >
                Complete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;