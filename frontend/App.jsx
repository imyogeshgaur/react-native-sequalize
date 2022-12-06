import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator,createDrawerNavigator } from '@react-navigation/native-stack';
import DeleteUser from './screen/DeleteUser';
import Home from './screen/Home';
import Login from './screen/Login';
import Search from './screen/Search';
import SignUp from './screen/SignUp';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Welcome User",
            headerStyle: {
              backgroundColor: "rgb(71, 73, 190)"
            },
            headerTintColor: "white",
            headerTitleAlign: "center"
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login User",
            headerStyle: {
              backgroundColor: "rgb(71, 73, 190)"
            },
            headerTintColor: "white",
            headerTitleAlign: "center"
          }}
        />
        <Stack.Screen
          name="Search User"
          component={Search}
          options={{
            title: "Get User",
            headerStyle: {
              backgroundColor: "rgb(71, 73, 190)"
            },
            headerTintColor: "white",
            headerTitleAlign: "center"
          }}
        />
        <Stack.Screen
          name="Delete User"
          component={DeleteUser}
          options={{
            title: "Delete User",
            headerStyle: {
              backgroundColor: "rgb(71, 73, 190)"
            },
            headerTintColor: "white",
            headerTitleAlign: "center"
          }}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUp}
          options={{
            title: "Delete User",
            headerStyle: {
              backgroundColor: "rgb(71, 73, 190)"
            },
            headerTintColor: "white",
            headerTitleAlign: "center"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


