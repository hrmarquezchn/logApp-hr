import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import AcelerometroViw from '../Pages/Acelerometro'
import LogsViw from '../Pages/Logs'


export default function NavegacionComponent() {

  const tabNavigation = createBottomTabNavigator()
  return (
    
    <NavigationContainer>

        <tabNavigation.Navigator initialRouteName='Acelerometro'>
            <tabNavigation.Screen name='Acelerometro' component={AcelerometroViw}></tabNavigation.Screen>
            <tabNavigation.Screen name='Logs' component={LogsViw}></tabNavigation.Screen>
            
        </tabNavigation.Navigator>
    </NavigationContainer>
  )
}