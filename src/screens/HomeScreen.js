import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AuthContext } from '../navigation/AuthProvider'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
