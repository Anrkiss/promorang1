import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

const InfluencerOnboarding: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    socials: { instagram: '', tiktok: '', youtube: '', twitter: '' },
    interests: [],
    country: '',
    city: '',
    birthday: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      socials: {
        ...prevData.socials,
        [name]: value,
      },
    }));
  };

  const handleInterestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      interests: checked
        ? [...prevData.interests, value]
        : prevData.interests.filter(interest => interest !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      try {
        const { error } = await supabase
          .from('profiles')
          .upsert({
            id: user?.id,
            ...formData,
            onboarded: true,
          });

        if (error) throw error;

        navigate('/influencer-dashboard');
      } catch (error) {
        console.error('Error saving onboarding data:', error);
        // Handle error (show message to user)
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Promorang!</h1>
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">I am a:</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                  required
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
                  value={formData.socials.instagram}
                  onChange={handleSocialChange}
                  placeholder="Instagram"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                />
                <input
                  type="text"
                  name="tiktok"
                  value={formData.socials.tiktok}
                  onChange={handleSocialChange}
                  placeholder="TikTok"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                />
                <input
                  type="text"
                  name="youtube"
                  value={formData.socials.youtube}
                  onChange={handleSocialChange}
                  placeholder="YouTube"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                />
                <input
                  type="text"
                  name="twitter"
                  value={formData.socials.twitter}
                  onChange={handleSocialChange}
                  placeholder="Twitter"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                />
              </div>
            </>
          )}

          {step === 2 && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Interests:</label>
              {['Fashion', 'Technology', 'Food', 'Travel', 'Fitness', 'Beauty', 'Gaming', 'Music'].map((interest) => (
                <div key={interest} className="flex items-center">
                  <input
                    type="checkbox"
                    id={interest}
                    name="interests"
                    value={interest}
                    checked={formData.interests.includes(interest)}
                    onChange={handleInterestsChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor={interest} className="ml-2 block text-sm text-gray-900">
                    {interest}
                  </label>
                </div>
              ))}
            </div>
          )}

          {step === 3 && (
            <>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">Birthday</label>
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                  required
                />
              </div>
            </>
          )}

          <div>
            <button type="submit" className="w-full btn-primary">
              {step < 3 ? 'Next' : 'Complete Onboarding'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InfluencerOnboarding;