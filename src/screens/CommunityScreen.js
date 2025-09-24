import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CommunityScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Community</Text>
        <Text style={styles.subtitle}>Connect with your neighbors</Text>
        
        <View style={styles.postCard}>
          <Text style={styles.postAuthor}>Sarah Johnson</Text>
          <Text style={styles.postTime}>2 hours ago</Text>
          <Text style={styles.postContent}>
            Looking for recommendations for a good local plumber. Any suggestions?
          </Text>
        </View>

        <View style={styles.postCard}>
          <Text style={styles.postAuthor}>Mike Chen</Text>
          <Text style={styles.postTime}>5 hours ago</Text>
          <Text style={styles.postContent}>
            Community garden meeting this Saturday at 10 AM. All welcome!
          </Text>
        </View>

        <View style={styles.postCard}>
          <Text style={styles.postAuthor}>Lisa Rodriguez</Text>
          <Text style={styles.postTime}>1 day ago</Text>
          <Text style={styles.postContent}>
            Found a lost cat near Oak Street. Please contact me if it's yours!
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
  postCard: {
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
  postAuthor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A7C59',
  },
  postTime: {
    fontSize: 12,
    color: '#999',
    marginBottom: 8,
  },
  postContent: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});
