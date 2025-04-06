import { Platform } from 'react-native';

// Use localhost for iOS simulator and 10.0.2.2 for Android emulator
const API_URL = Platform.select({
  ios: 'http://localhost:3000/api',
  android: 'http://10.0.2.2:3000/api',
  default: 'http://localhost:3000/api',
});

export const api = {
  // Test connection to server and Supabase
  testConnection: async () => {
    try {
      console.log('Testing connection to:', API_URL);
      const response = await fetch(`${API_URL}/test-connection`);
      if (!response.ok) throw new Error('Failed to connect to server');
      const data = await response.json();
      console.log('Connection test result:', data);
      return data;
    } catch (error) {
      console.error('Connection test failed:', error);
      throw error;
    }
  },

  // Get user profile
  getUserProfile: async (userId) => {
    try {
      const response = await fetch(`${API_URL}/user/${userId}`);
      if (!response.ok) throw new Error('Failed to fetch user profile');
      return await response.json();
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  },

  // Update user profile
  updateUserProfile: async (userId, userData) => {
    try {
      const response = await fetch(`${API_URL}/user/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) throw new Error('Failed to update user profile');
      return await response.json();
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }
  },

  // Health check
  checkHealth: async () => {
    try {
      const response = await fetch(`${API_URL.replace('/api', '')}/health`);
      if (!response.ok) throw new Error('Server is not healthy');
      return await response.json();
    } catch (error) {
      console.error('Error checking server health:', error);
      throw error;
    }
  },
}; 