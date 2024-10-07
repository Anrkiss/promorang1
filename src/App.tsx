import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import InfluencerLogin from './pages/InfluencerLogin';
import InfluencerSignup from './pages/InfluencerSignup';
import InfluencerDashboard from './pages/InfluencerDashboard';
import InfluencerOnboarding from './pages/InfluencerOnboarding';
import TasksPage from './pages/TasksPage';
import WalletPage from './pages/WalletPage';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/SettingsPage';
import MerchantLogin from './pages/MerchantLogin';
import MerchantSignup from './pages/MerchantSignup';

function App() {
  return (
    <Auth0Provider
      domain="dev-hksnnv4nmqp48w3t.us.auth0.com"
      clientId="W5RBuTmNHktLKpULLlLOLRQwfdatt0l8"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/influencer-login" element={<InfluencerLogin />} />
                <Route path="/influencer-signup" element={<InfluencerSignup />} />
                <Route path="/influencer-dashboard" element={<InfluencerDashboard />} />
                <Route path="/influencer-onboarding" element={<InfluencerOnboarding />} />
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/wallet" element={<WalletPage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/merchant-login" element={<MerchantLogin />} />
                <Route path="/merchant-signup" element={<MerchantSignup />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </Auth0Provider>
  );
}

export default App;