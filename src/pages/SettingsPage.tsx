import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter, Bell, Lock, CreditCard, Sliders, Users, HelpCircle, Moon, Sun, Globe, User, Shield, DollarSign, MapPin, Gift, Share2, Trash2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

const ProfileSettings = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState({
    fullName: '',
    bio: '',
    type: '',
    socials: { instagram: '', tiktok: '', youtube: '', twitter: '' },
    interests: [],
    country: '',
    city: '',
    birthday: '',
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (error) {
          console.error('Error fetching profile data:', error);
        } else {
          setProfileData(data || {});
        }
      }
    };

    fetchProfileData();
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({
      ...prevData,
      socials: {
        ...prevData.socials,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user?.id,
          ...profileData,
        });

      if (error) throw error;
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile. Please try again.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={profileData.fullName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <textarea
            name="bio"
            value={profileData.bio}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            rows={3}
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">I am a:</label>
          <select
            name="type"
            value={profileData.type}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          >
            <option value="">Select...</option>
            <option value="content_creator">Content Creator</option>
            <option value="influencer">Influencer</option>
            <option value="curious">Just Curious</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Social Media Links:</label>
          <input
            type="text"
            name="instagram"
            value={profileData.socials.instagram}
            onChange={handleSocialChange}
            placeholder="Instagram"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
          <input
            type="text"
            name="tiktok"
            value={profileData.socials.tiktok}
            onChange={handleSocialChange}
            placeholder="TikTok"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
          <input
            type="text"
            name="youtube"
            value={profileData.socials.youtube}
            onChange={handleSocialChange}
            placeholder="YouTube"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
          <input
            type="text"
            name="twitter"
            value={profileData.socials.twitter}
            onChange={handleSocialChange}
            placeholder="Twitter"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            name="country"
            value={profileData.country}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            name="city"
            value={profileData.city}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Birthday</label>
          <input
            type="date"
            name="birthday"
            value={profileData.birthday}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <button type="submit" className="btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

// ... (rest of the SettingsPage component remains the same)

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [darkMode, setDarkMode] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings />;
      // ... (other cases remain the same)
      default:
        return null;
    }
  };

  // ... (rest of the component remains the same)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <nav className="space-y-1">
            {[
              { id: 'profile', label: 'Profile', icon: <User /> },
              { id: 'privacy', label: 'Privacy', icon: <Shield /> },
              { id: 'notifications', label: 'Notifications', icon: <Bell /> },
              { id: 'social', label: 'Social Media', icon: <Share2 /> },
              { id: 'security', label: 'Security', icon: <Lock /> },
              { id: 'payment', label: 'Payment', icon: <CreditCard /> },
              { id: 'preferences', label: 'Preferences', icon: <Sliders /> },
              { id: 'language', label: 'Language & Region', icon: <Globe /> },
              { id: 'referrals', label: 'Referrals', icon: <Users /> },
              { id: 'account', label: 'Account', icon: <User /> },
              { id: 'help', label: 'Help & Support', icon: <HelpCircle /> },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-3 w-full px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === item.id ? 'bg-primary-100 text-primary-700' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
          <div className="mt-6 flex items-center">
            <span className="mr-2">{darkMode ? <Moon /> : <Sun />}</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <span className="slider round"></span>
            </label>
            <span className="ml-2">{darkMode ? 'Dark' : 'Light'} Mode</span>
          </div>
        </div>
        <div className="w-full md:w-3/4 md:pl-8">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;