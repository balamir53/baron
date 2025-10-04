import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main screens and their purposes from './screens/Main screens and their purposes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main screens and their purposes">
          <Stack.Screen name="Main screens and their purposes" component={Main screens and their purposes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}