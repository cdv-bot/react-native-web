import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './component/screen/Home'
import HeaderText from './component/screen/HeaderText'

const Stack = createNativeStackNavigator()
export default function App () {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name='Home'
            component={Home}
           
          />
        
          <Stack.Screen
            name='headerText'
            component={HeaderText}
         
          />
        
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
})
