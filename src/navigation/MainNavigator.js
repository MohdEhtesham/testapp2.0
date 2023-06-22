import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './navigation';
import HomeScreen from '../screens/HomeScreen';

const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
        <MainStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
