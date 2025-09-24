import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import your screens
import TabNavigator from './src/navigation/TabNavigator';
import RideDetailsScreen from './src/screens/RideDetailsScreen';
import FoodOrderScreen from './src/screens/FoodOrderScreen';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={TabNavigator} />
            <Stack.Screen 
              name="RideDetails" 
              component={RideDetailsScreen}
              options={{ 
                presentation: 'modal',
                headerShown: true,
                title: 'Ride Details',
                headerStyle: { backgroundColor: '#4A7C59' },
                headerTintColor: '#FFFFFF',
              }} 
            />
            <Stack.Screen 
              name="FoodOrder" 
              component={FoodOrderScreen}
              options={{ 
                presentation: 'modal',
                headerShown: true,
                title: 'Place Order',
                headerStyle: { backgroundColor: '#4A7C59' },
                headerTintColor: '#FFFFFF',
              }} 
            />
          </Stack.Navigator>
          <StatusBar style="light" backgroundColor="#4A7C59" />
        </NavigationContainer>
    </SafeAreaProvider>
  );
}
