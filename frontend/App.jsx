import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeleteUser from './screen/DeleteUser';
import Home from './screen/Home';
import Login from './screen/Login';
import Search from './screen/Search';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Search User" component={Search} />
        <Stack.Screen name="Delete User" component={DeleteUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


