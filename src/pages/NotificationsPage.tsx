import React, { useState, useEffect } from 'react';
import { Bell, CheckCircle, AlertCircle, Gift, DollarSign, Star, Trash2 } from 'lucide-react';

interface Notification {
  id: number;
  type: 'task' | 'reward' | 'system';
  message: string;
  timestamp: string;
  read: boolean;
}

const NotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Fetch notifications from API
    // This is a placeholder for demonstration
    const fetchedNotifications: Notification[] = [
      { id: 1, type: 'task', message: 'New premium task available: Review our latest smartphone', timestamp: '2024-03-15 10:30', read: false },
      { id: 2, type: 'reward', message: 'Congratulations! You\'ve earned 50 tokens for completing the Facebook post task', timestamp: '2024-03-14 15:45', read: false },
      { id: 3, type: 'system', message: 'Your account has been verified. You now have access to premium tasks!', timestamp: '2024-03-13 09:00', read: true },
      { id: 4, type: 'task', message: 'Reminder: You have a pending task due in 24 hours', timestamp: '2024-03-12 14:20', read: true },
      { id: 5, type: 'reward', message: 'Your reward of $25 has been processed and will be transferred to your linked account', timestamp: '2024-03-11 11:10', read: false },
      { id: 6, type: 'system', message: 'Promorang will be undergoing maintenance on March 20th from 2 AM to 4 AM EST', timestamp: '2024-03-10 16:00', read: true },
      { id: 7, type: 'task', message: 'A brand you follow has posted a new task: Share our summer collection video', timestamp: '2024-03-09 13:15', read: false }
    ];
    setNotifications(fetchedNotifications);
  }, []);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'task':
        return <CheckCircle className="text-blue-500" />;
      case 'reward':
        return <Gift className="text-green-500" />;
      case 'system':
        return <AlertCircle className="text-yellow-500" />;
      default:
        return <Bell className="text-gray-500" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>
      
      <div className="space-y-4">
        {notifications.map(notification => (
          <div key={notification.id} className={`p-4 rounded-lg shadow ${notification.read ? 'bg-white' : 'bg-primary-50'}`}>
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="mt-1">{getIcon(notification.type)}</div>
                <div>
                  <p className={`${notification.read ? 'text-gray-700' : 'text-black font-semibold'}`}>{notification.message}</p>
                  <p className="text-sm text-gray-500">{notification.timestamp}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                {!notification.read && (
                  <button 
                    onClick={() => markAsRead(notification.id)}
                    className="text-primary-500 hover:text-primary-600"
                  >
                    Mark as read
                  </button>
                )}
                <button 
                  onClick={() => deleteNotification(notification.id)}
                  className="text-gray-500 hover:text-red-500"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="text-center py-8">
          <Bell size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600">You have no notifications at this time.</p>
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;