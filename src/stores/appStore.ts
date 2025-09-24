import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState, User, Notification, CommunityStats } from '../types';
import { currentUser, mockNotifications, mockCommunityStats } from '../mocks/data';

interface AppStore extends AppState {
  // Actions
  setUser: (user: User | null) => void;
  setUserRole: (role: 'rider' | 'driver' | 'both') => void;
  setAuthenticated: (isAuthenticated: boolean) => void;
  addNotification: (notification: Notification) => void;
  markNotificationAsRead: (notificationId: string) => void;
  clearNotifications: () => void;
  setCommunityStats: (stats: CommunityStats) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

const initialState: AppState = {
  user: currentUser,
  userRole: 'both',
  isAuthenticated: true,
  notifications: mockNotifications,
  communityStats: mockCommunityStats,
  isLoading: false,
  error: null,
};

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      setUser: (user) => set({ user }),
      
      setUserRole: (userRole) => set({ userRole }),
      
      setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
      
      addNotification: (notification) => 
        set((state) => ({
          notifications: [notification, ...state.notifications]
        })),
      
      markNotificationAsRead: (notificationId) =>
        set((state) => ({
          notifications: state.notifications.map((notification) =>
            notification.id === notificationId
              ? { ...notification, isRead: true }
              : notification
          )
        })),
      
      clearNotifications: () => set({ notifications: [] }),
      
      setCommunityStats: (communityStats) => set({ communityStats }),
      
      setLoading: (isLoading) => set({ isLoading }),
      
      setError: (error) => set({ error }),
      
      reset: () => set(initialState),
    }),
    {
      name: 'rork-app-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        user: state.user,
        userRole: state.userRole,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
