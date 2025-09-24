import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RideDetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.rideCard}>
          <Text style={styles.rideTitle}>Downtown to Airport</Text>
          <Text style={styles.rideTime}>Today, 3:00 PM</Text>
          <Text style={styles.rideDriver}>Driver: Sarah Johnson</Text>
          <Text style={styles.ridePrice}>$25.00</Text>
          
          <View style={styles.rideDetails}>
            <Text style={styles.detailLabel}>Pickup Location:</Text>
            <Text style={styles.detailValue}>123 Main Street, Downtown</Text>
            
            <Text style={styles.detailLabel}>Destination:</Text>
            <Text style={styles.detailValue}>City Airport Terminal 1</Text>
            
            <Text style={styles.detailLabel}>Available Seats:</Text>
            <Text style={styles.detailValue}>2 of 4</Text>
          </View>
          
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book This Ride</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  rideCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rideTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A7C59',
    marginBottom: 5,
  },
  rideTime: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  rideDriver: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  ridePrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A7C59',
    marginBottom: 20,
  },
  rideDetails: {
    marginBottom: 30,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  detailValue: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  bookButton: {
    backgroundColor: '#4A7C59',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
