export interface User {
  id: string;
  name: string;
  avatar?: string;
  role: 'rider' | 'driver' | 'both';
  rating: number;
  totalRides: number;
  totalSaved: number;
  co2Saved: number;
  isNeighbor: boolean;
  regularRoutes: Route[];
  achievements: Achievement[];
  phone?: string;
  email?: string;
  joinDate: Date;
  isOnline: boolean;
}

export interface Route {
  id: string;
  name: string;
  pickup: Location;
  destination: Location;
  frequency: 'daily' | 'weekly' | 'monthly';
  time: string;
  days: string[];
}

export interface Location {
  id: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface Ride {
  id: string;
  driver: User;
  riders: User[];
  pickup: Location;
  destination: Location;
  price: number;
  sharedPrice?: number;
  status: 'available' | 'booked' | 'in-progress' | 'completed' | 'cancelled';
  departureTime: Date;
  estimatedArrival: Date;
  vehicle: Vehicle;
  maxPassengers: number;
  currentPassengers: number;
  isShared: boolean;
  distance: number;
  duration: number;
  createdAt: Date;
}

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  color: string;
  licensePlate: string;
  capacity: number;
  type: 'sedan' | 'suv' | 'truck' | 'van';
  features: string[];
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  image: string;
  location: Location;
  deliveryTime: number;
  isLocal: boolean;
  menu: MenuItem[];
  isOpen: boolean;
  deliveryFee: number;
  minimumOrder: number;
  categories: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
  isVegetarian: boolean;
  isVegan: boolean;
  allergens: string[];
  calories?: number;
}

export interface Delivery {
  id: string;
  restaurant: Restaurant;
  driver: User;
  customer: User;
  items: OrderItem[];
  totalPrice: number;
  sharedPrice?: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'picked-up' | 'delivered' | 'cancelled';
  estimatedDelivery: Date;
  actualDelivery?: Date;
  deliveryFee: number;
  tip: number;
  isShared: boolean;
  sharedCustomers: User[];
  createdAt: Date;
}

export interface OrderItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
  price: number;
}

export interface AIInsight {
  id: string;
  type: 'savings' | 'efficiency' | 'community' | 'environmental';
  title: string;
  description: string;
  actionLabel: string;
  potentialSavings?: number;
  co2Reduction?: number;
  priority: 'low' | 'medium' | 'high';
  isActionable: boolean;
  createdAt: Date;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'rides' | 'savings' | 'community' | 'environmental';
  isUnlocked: boolean;
  unlockedAt?: Date;
  progress: number;
  maxProgress: number;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'ride' | 'food' | 'community' | 'system';
  isRead: boolean;
  createdAt: Date;
  actionUrl?: string;
}

export interface CommunityStats {
  totalUsers: number;
  totalRides: number;
  totalSaved: number;
  totalCo2Saved: number;
  activeNeighbors: number;
  ridesThisWeek: number;
  deliveriesThisWeek: number;
}

export interface AppState {
  user: User | null;
  userRole: 'rider' | 'driver' | 'both';
  isAuthenticated: boolean;
  notifications: Notification[];
  communityStats: CommunityStats;
  isLoading: boolean;
  error: string | null;
}

export interface FilterOptions {
  category?: string;
  priceRange?: [number, number];
  distance?: number;
  timeRange?: [string, string];
  neighborsOnly?: boolean;
  sharedOnly?: boolean;
}

export interface SearchParams {
  query: string;
  filters: FilterOptions;
  sortBy: 'price' | 'distance' | 'time' | 'rating';
  sortOrder: 'asc' | 'desc';
}
