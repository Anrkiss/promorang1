import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThumbsUp, Share2, MessageSquare, Bookmark, DollarSign, TrendingUp, Award, Clock } from 'lucide-react';

interface Post {
  id: number;
  brand: string;
  content: string;
  image: string;
  likes: number;
  shares: number;
  comments: number;
}

interface Task {
  id: number;
  title: string;
  reward: number;
  dueDate: string;
}

const InfluencerDashboard: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [stats, setStats] = useState({
    totalEarnings: 0,
    completedTasks: 0,
    followersGained: 0,
  });

  useEffect(() => {
    // Fetch posts, tasks, and stats from API
    // This is a placeholder for demonstration
    setPosts([
      { id: 1, brand: "FashionCo", content: "Check out our new summer collection!", image: "https://source.unsplash.com/random/800x600?summer", likes: 120, shares: 45, comments: 23 },
      { id: 2, brand: "TechGadgets", content: "Introducing our latest smartwatch. Who wants to review it?", image: "https://source.unsplash.com/random/800x600?smartwatch", likes: 89, shares: 32, comments: 15 },
      { id: 3, brand: "EcoFriendly", content: "Join our campaign for a greener planet! Share your eco-friendly tips.", image: "https://source.unsplash.com/random/800x600?nature", likes: 210, shares: 78, comments: 56 },
    ]);
    setTasks([
      { id: 1, title: "Review FashionCo's summer dress", reward: 50, dueDate: "2024-04-01" },
      { id: 2, title: "Create a TikTok video with TechGadgets smartwatch", reward: 100, dueDate: "2024-04-05" },
      { id: 3, title: "Share EcoFriendly's post on Instagram", reward: 30, dueDate: "2024-03-28" },
    ]);
    setStats({
      totalEarnings: 1250,
      completedTasks: 15,
      followersGained: 500,
    });
  }, []);

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleShare = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, shares: post.shares + 1 } : post
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Influencer Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Total Earnings</h2>
            <DollarSign className="text-primary-500" size={24} />
          </div>
          <p className="text-3xl font-bold text-primary-500">${stats.totalEarnings}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Completed Tasks</h2>
            <Award className="text-green-500" size={24} />
          </div>
          <p className="text-3xl font-bold text-green-500">{stats.completedTasks}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Followers Gained</h2>
            <TrendingUp className="text-blue-500" size={24} />
          </div>
          <p className="text-3xl font-bold text-blue-500">+{stats.followersGained}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
          <div className="space-y-6">
            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <img src={`https://ui-avatars.com/api/?name=${post.brand}&background=random`} alt={post.brand} className="w-10 h-10 rounded-full mr-4" />
                  <h3 className="text-xl font-semibold">{post.brand}</h3>
                </div>
                <p className="mb-4">{post.content}</p>
                <img src={post.image} alt="Post image" className="w-full h-64 object-cover mb-4 rounded-lg" />
                <div className="flex justify-between items-center">
                  <button onClick={() => handleLike(post.id)} className="flex items-center text-gray-600 hover:text-primary-500">
                    <ThumbsUp className="mr-2" size={20} />
                    {post.likes}
                  </button>
                  <button onClick={() => handleShare(post.id)} className="flex items-center text-gray-600 hover:text-primary-500">
                    <Share2 className="mr-2" size={20} />
                    {post.shares}
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-primary-500">
                    <MessageSquare className="mr-2" size={20} />
                    {post.comments}
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-primary-500">
                    <Bookmark size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Upcoming Tasks</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            {tasks.map(task => (
              <div key={task.id} className="mb-4 pb-4 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0">
                <h3 className="font-semibold mb-2">{task.title}</h3>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center text-primary-500">
                    <DollarSign size={16} className="mr-1" />
                    {task.reward} tokens
                  </span>
                  <span className="flex items-center text-gray-500">
                    <Clock size={16} className="mr-1" />
                    Due: {task.dueDate}
                  </span>
                </div>
              </div>
            ))}
            <Link to="/tasks" className="btn-primary w-full mt-4">View All Tasks</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerDashboard;