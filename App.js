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

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainTab" component={MainTab} />
          <Stack.Screen name="Filter" component={Filter} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
