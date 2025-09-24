import { 
  User, 
  Ride, 
  Restaurant, 
  Delivery, 
  AIInsight, 
  Achievement, 
  Notification, 
  CommunityStats,
  Location,
  Vehicle,
  MenuItem,
  Route
} from '../types';

// Mock Locations
export const mockLocations: Location[] = [
  {
    id: '1',
    address: '123 Main St',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94102',
    coordinates: { latitude: 37.7749, longitude: -122.4194 }
  },
  {
    id: '2',
    address: '456 Market St',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94105',
    coordinates: { latitude: 37.7849, longitude: -122.4094 }
  },
  {
    id: '3',
    address: '789 Castro St',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94114',
    coordinates: { latitude: 37.7609, longitude: -122.4350 }
  },
  {
    id: '4',
    address: '321 Mission St',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94105',
    coordinates: { latitude: 37.7849, longitude: -122.4094 }
  },
  {
    id: '5',
    address: '654 Valencia St',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94110',
    coordinates: { latitude: 37.7599, longitude: -122.4214 }
  }
];

// Mock Vehicles
export const mockVehicles: Vehicle[] = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Prius',
    year: 2020,
    color: 'Silver',
    licensePlate: 'ABC123',
    capacity: 4,
    type: 'sedan',
    features: ['Hybrid', 'Bluetooth', 'Backup Camera']
  },
  {
    id: '2',
    make: 'Honda',
    model: 'CR-V',
    year: 2019,
    color: 'White',
    licensePlate: 'XYZ789',
    capacity: 5,
    type: 'suv',
    features: ['AWD', 'Sunroof', 'Heated Seats']
  },
  {
    id: '3',
    make: 'Tesla',
    model: 'Model 3',
    year: 2021,
    color: 'Blue',
    licensePlate: 'TESLA1',
    capacity: 5,
    type: 'sedan',
    features: ['Electric', 'Autopilot', 'Premium Audio']
  }
];

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    role: 'both',
    rating: 4.8,
    totalRides: 127,
    totalSaved: 1250,
    co2Saved: 45.2,
    isNeighbor: true,
    regularRoutes: [],
    achievements: [],
    phone: '+1-555-0123',
    email: 'sarah.johnson@email.com',
    joinDate: new Date('2023-01-15'),
    isOnline: true
  },
  {
    id: '2',
    name: 'Mike Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    role: 'driver',
    rating: 4.9,
    totalRides: 89,
    totalSaved: 890,
    co2Saved: 32.1,
    isNeighbor: true,
    regularRoutes: [],
    achievements: [],
    phone: '+1-555-0456',
    email: 'mike.chen@email.com',
    joinDate: new Date('2023-02-20'),
    isOnline: true
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    role: 'rider',
    rating: 4.7,
    totalRides: 45,
    totalSaved: 320,
    co2Saved: 12.5,
    isNeighbor: true,
    regularRoutes: [],
    achievements: [],
    phone: '+1-555-0789',
    email: 'emily.rodriguez@email.com',
    joinDate: new Date('2023-03-10'),
    isOnline: false
  },
  {
    id: '4',
    name: 'David Kim',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    role: 'both',
    rating: 4.6,
    totalRides: 203,
    totalSaved: 1890,
    co2Saved: 68.3,
    isNeighbor: false,
    regularRoutes: [],
    achievements: [],
    phone: '+1-555-0321',
    email: 'david.kim@email.com',
    joinDate: new Date('2022-11-05'),
    isOnline: true
  },
  {
    id: '5',
    name: 'Lisa Wang',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    role: 'driver',
    rating: 4.9,
    totalRides: 156,
    totalSaved: 1450,
    co2Saved: 52.7,
    isNeighbor: true,
    regularRoutes: [],
    achievements: [],
    phone: '+1-555-0654',
    email: 'lisa.wang@email.com',
    joinDate: new Date('2023-01-08'),
    isOnline: true
  }
];

// Mock Routes
export const mockRoutes: Route[] = [
  {
    id: '1',
    name: 'Daily Commute',
    pickup: mockLocations[0],
    destination: mockLocations[1],
    frequency: 'daily',
    time: '08:00',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  },
  {
    id: '2',
    name: 'Weekend Shopping',
    pickup: mockLocations[2],
    destination: mockLocations[3],
    frequency: 'weekly',
    time: '10:00',
    days: ['Saturday']
  }
];

// Mock Rides
export const mockRides: Ride[] = [
  {
    id: '1',
    driver: mockUsers[1],
    riders: [mockUsers[0]],
    pickup: mockLocations[0],
    destination: mockLocations[1],
    price: 12.50,
    sharedPrice: 8.75,
    status: 'available',
    departureTime: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
    estimatedArrival: new Date(Date.now() + 2.5 * 60 * 60 * 1000),
    vehicle: mockVehicles[0],
    maxPassengers: 4,
    currentPassengers: 1,
    isShared: true,
    distance: 8.5,
    duration: 25,
    createdAt: new Date(Date.now() - 30 * 60 * 1000)
  },
  {
    id: '2',
    driver: mockUsers[4],
    riders: [],
    pickup: mockLocations[2],
    destination: mockLocations[3],
    price: 18.00,
    status: 'available',
    departureTime: new Date(Date.now() + 1 * 60 * 60 * 1000), // 1 hour from now
    estimatedArrival: new Date(Date.now() + 1.5 * 60 * 60 * 1000),
    vehicle: mockVehicles[1],
    maxPassengers: 5,
    currentPassengers: 0,
    isShared: false,
    distance: 12.3,
    duration: 35,
    createdAt: new Date(Date.now() - 15 * 60 * 1000)
  },
  {
    id: '3',
    driver: mockUsers[1],
    riders: [mockUsers[2], mockUsers[3]],
    pickup: mockLocations[4],
    destination: mockLocations[0],
    price: 15.00,
    sharedPrice: 10.50,
    status: 'in-progress',
    departureTime: new Date(Date.now() - 30 * 60 * 1000),
    estimatedArrival: new Date(Date.now() + 20 * 60 * 1000),
    vehicle: mockVehicles[2],
    maxPassengers: 5,
    currentPassengers: 2,
    isShared: true,
    distance: 6.8,
    duration: 20,
    createdAt: new Date(Date.now() - 45 * 60 * 1000)
  }
];

// Mock Menu Items
export const mockMenuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Margherita Pizza',
    description: 'Fresh mozzarella, tomato sauce, basil',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&h=200&fit=crop',
    category: 'Pizza',
    isVegetarian: true,
    isVegan: false,
    allergens: ['gluten', 'dairy'],
    calories: 280
  },
  {
    id: '2',
    name: 'Chicken Pad Thai',
    description: 'Stir-fried rice noodles with chicken, peanuts, and vegetables',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=200&fit=crop',
    category: 'Noodles',
    isVegetarian: false,
    isVegan: false,
    allergens: ['peanuts', 'eggs'],
    calories: 420
  },
  {
    id: '3',
    name: 'Caesar Salad',
    description: 'Romaine lettuce, parmesan cheese, croutons, caesar dressing',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop',
    category: 'Salad',
    isVegetarian: false,
    isVegan: false,
    allergens: ['dairy', 'eggs', 'gluten'],
    calories: 180
  }
];

// Mock Restaurants
export const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Tony\'s Pizza',
    cuisine: 'Italian',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop',
    location: mockLocations[0],
    deliveryTime: 25,
    isLocal: true,
    menu: mockMenuItems.slice(0, 1),
    isOpen: true,
    deliveryFee: 3.99,
    minimumOrder: 15.00,
    categories: ['Pizza', 'Italian', 'Local']
  },
  {
    id: '2',
    name: 'Golden Dragon',
    cuisine: 'Chinese',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop',
    location: mockLocations[1],
    deliveryTime: 30,
    isLocal: false,
    menu: mockMenuItems.slice(1, 2),
    isOpen: true,
    deliveryFee: 4.99,
    minimumOrder: 20.00,
    categories: ['Chinese', 'Asian', 'Noodles']
  },
  {
    id: '3',
    name: 'Green Garden',
    cuisine: 'Healthy',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop',
    location: mockLocations[2],
    deliveryTime: 20,
    isLocal: true,
    menu: mockMenuItems.slice(2, 3),
    isOpen: true,
    deliveryFee: 2.99,
    minimumOrder: 12.00,
    categories: ['Healthy', 'Salad', 'Local']
  }
];

// Mock Deliveries
export const mockDeliveries: Delivery[] = [
  {
    id: '1',
    restaurant: mockRestaurants[0],
    driver: mockUsers[1],
    customer: mockUsers[0],
    items: [
      {
        id: '1',
        menuItem: mockMenuItems[0],
        quantity: 2,
        price: 33.98
      }
    ],
    totalPrice: 37.97,
    sharedPrice: 25.97,
    status: 'preparing',
    estimatedDelivery: new Date(Date.now() + 25 * 60 * 1000),
    deliveryFee: 3.99,
    tip: 5.00,
    isShared: true,
    sharedCustomers: [mockUsers[2]],
    createdAt: new Date(Date.now() - 10 * 60 * 1000)
  }
];

// Mock AI Insights
export const mockAIInsights: AIInsight[] = [
  {
    id: '1',
    type: 'savings',
    title: 'Combine delivery with Mike\'s route',
    description: 'You can save $8.50 by joining Mike\'s delivery to Tony\'s Pizza. He\'s heading there in 15 minutes.',
    actionLabel: 'Join Delivery',
    potentialSavings: 8.50,
    priority: 'high',
    isActionable: true,
    createdAt: new Date(Date.now() - 5 * 60 * 1000)
  },
  {
    id: '2',
    type: 'environmental',
    title: 'Reduce CO2 emissions',
    description: 'By sharing 3 more rides this week, you could reduce your carbon footprint by 2.1kg.',
    actionLabel: 'View Rides',
    co2Reduction: 2.1,
    priority: 'medium',
    isActionable: true,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000)
  },
  {
    id: '3',
    type: 'community',
    title: 'Connect with neighbors',
    description: '5 neighbors in your area are looking for regular commute partners.',
    actionLabel: 'Connect',
    priority: 'low',
    isActionable: true,
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000)
  }
];

// Mock Achievements
export const mockAchievements: Achievement[] = [
  {
    id: '1',
    name: 'Neighbor Hero',
    description: 'Complete 50 rides with neighbors',
    icon: 'users',
    category: 'community',
    isUnlocked: true,
    unlockedAt: new Date('2023-10-15'),
    progress: 50,
    maxProgress: 50
  },
  {
    id: '2',
    name: 'Eco Warrior',
    description: 'Save 100kg of CO2 emissions',
    icon: 'leaf',
    category: 'environmental',
    isUnlocked: false,
    progress: 45.2,
    maxProgress: 100
  },
  {
    id: '3',
    name: 'Money Saver',
    description: 'Save $1000 through shared rides',
    icon: 'dollar-sign',
    category: 'savings',
    isUnlocked: false,
    progress: 1250,
    maxProgress: 1000
  },
  {
    id: '4',
    name: 'Ride Master',
    description: 'Complete 100 rides',
    icon: 'car',
    category: 'rides',
    isUnlocked: false,
    progress: 127,
    maxProgress: 100
  }
];

// Mock Notifications
export const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Ride Confirmed',
    message: 'Your ride with Mike Chen has been confirmed for 2:00 PM',
    type: 'ride',
    isRead: false,
    createdAt: new Date(Date.now() - 10 * 60 * 1000),
    actionUrl: '/ride-details/1'
  },
  {
    id: '2',
    title: 'Delivery Ready',
    message: 'Your order from Tony\'s Pizza is ready for pickup',
    type: 'food',
    isRead: true,
    createdAt: new Date(Date.now() - 30 * 60 * 1000),
    actionUrl: '/food-order/1'
  },
  {
    id: '3',
    title: 'New Neighbor',
    message: 'Emily Rodriguez joined your neighborhood',
    type: 'community',
    isRead: false,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000)
  }
];

// Mock Community Stats
export const mockCommunityStats: CommunityStats = {
  totalUsers: 1247,
  totalRides: 8934,
  totalSaved: 125430,
  totalCo2Saved: 4521.7,
  activeNeighbors: 89,
  ridesThisWeek: 234,
  deliveriesThisWeek: 156
};

// Current User (for demo purposes)
export const currentUser: User = mockUsers[0];
