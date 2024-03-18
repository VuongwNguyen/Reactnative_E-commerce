import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './app/Home';
import Cart from './app/Cart';
import Details from './app/Details';
import Search from './app/Search';
import ListProducts from './app/ListProducts';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StackController />
    </NavigationContainer>
  )
}
function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={optionsStackAuth}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Register} />
    </Stack.Navigator>
  );
}
function HomeTab() {
  return (
    <Tab.Navigator screenOptions={optionsStackAuth}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}
function StackController() {
  return (
    <Stack.Navigator initialRouteName='Auth' screenOptions={optionsStackAuth}>
      <Stack.Screen name="HomeTab" component={HomeTab} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="List" component={ListProducts} />
    </Stack.Navigator>
  );
}

function optionsStackAuth() {
  return {
    headerShown: false,
  }
}

export default AppNavigation

const styles = StyleSheet.create({})