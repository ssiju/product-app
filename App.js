import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PhoneAuthScreen from "./src/Screens/PhoneAuthScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import axios from "axios";
import GoogleMapScreen from "./src/Screens/GoogleMapScreen";

const Stack = createNativeStackNavigator();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    await axios.get("https://fakestoreapi.com/products").then((res) => {
      window.products = res.data;
    });
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="PhoneAuth"
            component={PhoneAuthScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Products",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "#61dafb",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="GoogleMapScreen"
            component={GoogleMapScreen}
            options={{
              title: "Google Map",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "#61dafb",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
