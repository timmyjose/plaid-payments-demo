import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import Plaid from './screens/Plaid'

export type RootStackParamsList = {
  Home: undefined
  Plaid: undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>()

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Plaid' component={Plaid} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App