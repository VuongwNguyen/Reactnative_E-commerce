import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home2, SearchNormal1, Notification, User } from 'iconsax-react-native';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './app/Home';
import Cart from './app/Cart';
import Details from './app/Details';
import Search from './app/Search';
import ListProducts from './app/ListProducts';
import Payment from './app/Payment';
import NotificationScreen from './app/NotificationScreen';
import Account from './app/Account';
import EditAccount from './app/EditAccount';
import Question from './app/Question';


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
    <Tab.Navigator screenOptions={optionTabHome}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name='Account' component={Account} />
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
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="EditAccount" component={EditAccount} />
      <Stack.Screen name='History' component={NotificationScreen} />
      <Stack.Screen name='Question' component={Question} />
    </Stack.Navigator>
  );
}

function optionsStackAuth() {
  return {
    headerShown: false,
  }
}

function optionTabHome({ route }) {
  return {
    headerShown: false,
    tabBarIcon: ({ focused }) => {
      let color = focused ? '#01ac61' : 'black';
      let size = focused ? 30 : 25;
      switch (route.name) {
        case 'Home':
          return <Home2 color={color} size={size} />
        case 'Search':
          return <SearchNormal1 color={color} size={size} />
        case 'Notification':
          return <Notification color={color} size={size} variant='Outline' />
        case 'Account':
          return <User color={color} size={size} />
      }
    },
    tabBarLabel: ({ focused }) => {
      let color = focused && '#01ac61';
      return focused ? <View style={{ padding: 2, backgroundColor: `${color}`, top: -5, borderRadius: 100 }} /> : null
    }
  }
}




export default AppNavigation
