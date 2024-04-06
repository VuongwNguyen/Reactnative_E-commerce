import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import AppNavigation from './src/AppNavigation'

import { Provider } from 'react-redux'

import Store from './src/redux/Store'

const App = () => {
  return (
    <Provider store={Store}>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <AppNavigation />
      </SafeAreaView>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})