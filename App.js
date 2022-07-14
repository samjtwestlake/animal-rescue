/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/views/HomeScreen';
import MapScreen from './src/views/MapScreen';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="map"
          component={MapScreen}
          options={{title: 'Map'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
