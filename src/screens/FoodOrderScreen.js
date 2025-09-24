import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FoodOrderScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Local Restaurant</Text>
        <Text style={styles.subtitle}>Delicious meals from your neighborhood</Text>
        
        <View style={styles.menuItem}>
          <Text style={styles.itemName}>Grilled Chicken Sandwich</Text>
          <Text style={styles.itemDescription}>
            Fresh grilled chicken with lettuce, tomato, and mayo
          </Text>
          <Text style={styles.itemPrice}>$12.99</Text>
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.itemName}>Caesar Salad</Text>
          <Text style={styles.itemDescription}>
            Crisp romaine lettuce with parmesan and croutons
          </Text>
          <Text style={styles.itemPrice}>$9.99</Text>
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.itemName}>Margherita Pizza</Text>
          <Text style={styles.itemDescription}>
            Fresh mozzarella, tomato sauce, and basil
          </Text>
          <Text style={styles.itemPrice}>$15.99</Text>
        </View>

        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Place Order</Text>
        </TouchableOpacity>
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
  menuItem: {
    backgroundColor: 'white',
    padding: 15,
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
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A7C59',
  },
  orderButton: {
    backgroundColor: '#4A7C59',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  orderButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
