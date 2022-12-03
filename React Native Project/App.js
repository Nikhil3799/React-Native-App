import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import SigninScreen from './screens/Signin';
import HomeScreen from './screens/Home';
import SignupScreen from './screens/Signup';
import WorkoutScreen from './screens/Workout';
import AboutusScreen from './screens/Aboutus';
import NotificationsScreen from './screens/Notifications';
import SettingsScreen from './screens/Settings';
import LogoutScreen from './screens/Logout';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function Home() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home-outline'
                : 'home-outline';
            } else if (route.name === 'Workout') {
              iconName = focused ? 'walk-outline' : 'walk-outline';
            } else if (route.name === 'Aboutus') {
              iconName = focused ? 'information-outline' : 'information-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications-outline' : 'notifications-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings-outline' : 'settings-outline';
            } else if (route.name === 'Signout') {
              iconName = focused ? 'log-out-outline' : 'log-out-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        })}
      >

      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Workout" component={WorkoutScreen} />
      <Tab.Screen name ="Aboutus" component={AboutusScreen} />
      <Tab.Screen name ="Notifications" component={NotificationsScreen} />
      <Tab.Screen name ="Settings" component={SettingsScreen} />
      <Tab.Screen name ="Signout" component={LogoutScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Signin" component={SigninScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});