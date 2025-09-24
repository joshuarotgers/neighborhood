import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ServicesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Services</Text>
        <Text style={styles.subtitle}>Discover local services in your community</Text>
        
        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>Transportation</Text>
          <Text style={styles.serviceDescription}>
            Find rides, carpools, and local transportation options.
          </Text>
        </View>

        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>Food & Dining</Text>
          <Text style={styles.serviceDescription}>
            Order from local restaurants and discover new dining options.
          </Text>
        </View>

        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>Local Businesses</Text>
          <Text style={styles.serviceDescription}>
            Support local businesses and discover services near you.
          </Text>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A7C59',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  serviceCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
