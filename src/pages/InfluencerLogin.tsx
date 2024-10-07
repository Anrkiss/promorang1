import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Mail, LogIn } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const InfluencerLogin: React.FC = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated, isLoading, error } = useAuth();

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/influencer-dashboard');
    }
  }, [isAuthenticated, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleSocialLogin = (provider: string) => {
    loginWithRedirect({ connection: provider });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Influencer Login</h1>
        <div className="card">
          <button onClick={() => loginWithRedirect()} className="w-full btn-primary mb-4 flex items-center justify-center">
            <LogIn className="mr-2" size={20} />
            Log in with Email
          </button>
          <div className="mt-4">
            <p className="text-center text-sm text-gray-600">Or continue with</p>
            <div className="mt-4 flex justify-center space-x-4">
              <button 
                onClick={() => handleSocialLogin('facebook')}
                className="btn-secondary p-2 rounded-full"
                aria-label="Sign in with Facebook"
              >
                <Facebook size={24} />
              </button>
              <button 
                onClick={() => handleSocialLogin('twitter')}
                className="btn-secondary p-2 rounded-full"
                aria-label="Sign in with Twitter"
              >
                <Twitter size={24} />
              </button>
              <button 
                onClick={() => handleSocialLogin('google-oauth2')}
                className="btn-secondary p-2 rounded-full"
                aria-label="Sign in with Google"
              >
                <Mail size={24} />
              </button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/influencer-signup" className="text-primary-500 hover:text-primary-600 font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerLogin;