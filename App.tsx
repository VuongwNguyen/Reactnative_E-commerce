import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Login from './src/auth/Login'
import Register from './src/auth/Register'
import Home from './src/app/Home'
import Details from './src/app/Details'
import ListProducts from './src/app/ListProducts'
import Cart from './src/app/Cart'
import AppNavigation from './src/AppNavigation'
import { AppProvider } from './src/AppContext'

const App = () => {
  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <AppNavigation />
      </SafeAreaView>
    </AppProvider>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
})