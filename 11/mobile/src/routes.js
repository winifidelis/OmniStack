import React from 'react'
//esse abaixo é como se fosse o browserrouter
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Incidents from './pages/Incidents'
import Detail from './pages/Detail'

export default function Routes() {
  return (
    <NavigationContainer>
      {/*headerShown: false  --- eu escondo o cabeçalho do REACT e crio o meu*/}
      <AppStack.Navigator screenOptions={ {headerShown: false} }>
        <AppStack.Screen name="Incidents" component={Incidents} />
        <AppStack.Screen name="Detail" component={Detail} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}
