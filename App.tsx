/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './activities/screens/Home';
import MainTab from './activities/tab/MainTab';
import Filter from './activities/screens/Filter';

export type TRootStackParamList = {
  MainTab: undefined;
  Filter: {
    name: string;
    age: number;
  };
};

const Stack = createStackNavigator<TRootStackParamList>();


const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="MainTab" 
            component={MainTab} 
            options={{headerShown: false}}/>

          <Stack.Screen 
            name="Filter" 
            component={Filter} 
            options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
