import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from './components/loading-screen/Loading-Screen';
import HomeScreen  from './components/home-screen/Home-Screen';
import CartScreen from './components/cart/Cart-Screen';
import BillScreen from './components/cart/Bill-Screen';
import CustomerDetailsScreen from './components/cutomer-details/Customer-Details-Screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Bill" component={BillScreen} />
        <Stack.Screen name="CustomerDetails" component={CustomerDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
