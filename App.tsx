import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/telas/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
