import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Acelerometro from './Pages/Acelerometro';
import Logs from './Pages/Logs';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accelerometer">
        <Stack.Screen name="Accelerometer" component={AccelerometerScreen} />
        <Stack.Screen name="Logs" component={LogsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


