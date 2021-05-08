import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>lol meme</Text>
      <Text>ehhhh</Text> 
      <Text>changed</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b7d67c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
