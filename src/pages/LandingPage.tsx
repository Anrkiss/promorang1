import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Users, TrendingUp, Globe, Gift, Zap } from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Welcome to Promorang</h1>
        <p className="text-xl mb-8">Connect brands with influencers, drive engagement, and boost your reach!</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold mb-4">For Influencers</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <ShoppingBag className="mr-2 mt-1 text-primary-500" />
              <span>Engage with your favorite brands</span>
            </li>
            <li className="flex items-start">
              <Users className="mr-2 mt-1 text-primary-500" />
              <span>Complete fun and exciting social media tasks</span>
            </li>
            <li className="flex items-start">
              <TrendingUp className="mr-2 mt-1 text-primary-500" />
              <span>Earn tokens, cash, and exclusive rewards</span>
            </li>
          </ul>
          <button
            onClick={() => navigate('/influencer-dashboard')}
            className="btn-primary w-full"
          >
            Explore Influencer Dashboard
          </button>
        </div>
        
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold mb-4">For Merchants</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Globe className="mr-2 mt-1 text-primary-500" />
              <span>Expand your brand's reach globally</span>
            </li>
            <li className="flex items-start">
              <Gift className="mr-2 mt-1 text-primary-500" />
              <span>Create engaging tasks and rewards</span>
            </li>
            <li className="flex items-start">
              <Zap className="mr-2 mt-1 text-primary-500" />
              <span>Boost engagement with targeted campaigns</span>
            </li>
          </ul>
          <button
            onClick={() => navigate('/merchant-portal')}
            className="btn-primary w-full"
          >
            Explore Merchant Portal
          </button>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary-100 rounded-full p-4 inline-block mb-4">
              <Users className="text-primary-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Connect</h3>
            <p>Join our platform and connect with brands or influencers</p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 rounded-full p-4 inline-block mb-4">
              <ShoppingBag className="text-primary-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Engage</h3>
            <p>Complete tasks or create campaigns to boost engagement</p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 rounded-full p-4 inline-block mb-4">
              <TrendingUp className="text-primary-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Grow</h3>
            <p>Earn rewards, expand your reach, and grow your business</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;