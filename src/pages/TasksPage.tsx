import React, { useState, useEffect } from 'react';
import { ThumbsUp, Share2, MessageSquare, Bookmark, Edit3, FileText, Star, Filter, Search, ArrowUp, ArrowDown, ChevronLeft, ChevronRight, Zap } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  description: string;
  brand: string;
  reward: number;
  type: string;
  isPremium: boolean;
  completed: boolean;
}

const TasksPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(10);
  const [bookmarkedTasks, setBookmarkedTasks] = useState<number[]>([]);

  useEffect(() => {
    // Fetch tasks from API
    // This is a placeholder for demonstration
    const fetchedTasks: Task[] = [
      { id: 1, title: "Like our Facebook post", description: "Like our latest post about summer fashion", brand: "FashionCo", reward: 5, type: "like", isPremium: false, completed: false },
      { id: 2, title: "Share Instagram story", description: "Share our new product launch story", brand: "TechGadgets", reward: 10, type: "share", isPremium: true, completed: false },
      { id: 3, title: "Write a product review", description: "Review our eco-friendly water bottle", brand: "EcoFriendly", reward: 20, type: "review", isPremium: false, completed: false },
      // Add more tasks as needed
    ];
    setTasks(fetchedTasks);
  }, []);

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleCompleteTask = (taskId: number) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: true } : task
    ));
  };

  const handleBookmark = (taskId: number) => {
    if (bookmarkedTasks.includes(taskId)) {
      setBookmarkedTasks(bookmarkedTasks.filter(id => id !== taskId));
    } else {
      setBookmarkedTasks([...bookmarkedTasks, taskId]);
    }
  };

  const handleShare = (task: Task) => {
    // Implement share functionality
    console.log(`Sharing task: ${task.title}`);
  };

  const getTaskIcon = (type: string) => {
    switch (type) {
      case 'like':
        return <ThumbsUp className="text-blue-500" />;
      case 'share':
        return <Share2 className="text-green-500" />;
      case 'review':
        return <Edit3 className="text-yellow-500" />;
      default:
        return <FileText className="text-gray-500" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Available Tasks</h1>
      
      <div className="mb-4 flex justify-between items-center">
        <div className="flex space-x-2">
          <button className="btn-secondary flex items-center">
            <Filter className="mr-2" size={16} />
            Filter
          </button>
          <button className="btn-secondary flex items-center">
            <ArrowUp className="mr-2" size={16} />
            Sort
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search tasks..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Task</th>
              <th className="px-4 py-2 text-left">Brand</th>
              <th className="px-4 py-2 text-left">Reward</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentTasks.map(task => (
              <tr key={task.id} className={`${task.isPremium ? 'bg-yellow-50' : ''} ${task.completed ? 'bg-green-50' : ''}`}>
                <td className="px-4 py-2">{getTaskIcon(task.type)}</td>
                <td className="px-4 py-2">
                  <div className="font-semibold">{task.title}</div>
                  <div className="text-sm text-gray-600">{task.description}</div>
                </td>
                <td className="px-4 py-2">{task.brand}</td>
                <td className="px-4 py-2 flex items-center">
                  <Zap className="text-yellow-500 mr-1" size={18} />
                  {task.reward}
                </td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    {!task.completed && (
                      <button 
                        onClick={() => handleCompleteTask(task.id)}
                        className="btn-primary text-sm"
                      >
                        Complete
                      </button>
                    )}
                    <button 
                      onClick={() => handleBookmark(task.id)}
                      className={`btn-secondary text-sm ${bookmarkedTasks.includes(task.id) ? 'bg-primary-100' : ''}`}
                    >
                      <Bookmark className={`${bookmarkedTasks.includes(task.id) ? 'text-primary-500' : 'text-gray-500'}`} size={18} />
                    </button>
                    <button 
                      onClick={() => handleShare(task)}
                      className="btn-secondary text-sm"
                    >
                      <Share2 className="text-gray-500" size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600">
            Showing {indexOfFirstTask + 1} to {Math.min(indexOfLastTask, tasks.length)} of {tasks.length} tasks
          </p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="btn-secondary"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastTask >= tasks.length}
            className="btn-secondary"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;