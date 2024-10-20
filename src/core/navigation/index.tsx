import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GroceryList } from '~/features/groceryList/containers'

const RootStack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="GroceryList"
          component={GroceryList}
          options={{ title: 'Grocery List' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
