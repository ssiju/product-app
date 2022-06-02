import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PhoneAuthScreen from "./src/Screens/PhoneAuthScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import axios from "axios";
import GoogleMapScreen from "./src/Screens/GoogleMapScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AddProducts from "./src/Screens/AddProducts";
import ProductsDetails from "./src/Screens/ProductsDetails";

const Stack = createNativeStackNavigator();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isLoggedIn: null,
    };
  }

  async componentDidMount() {
    this.getUser();
    await axios.get("https://fakestoreapi.com/products").then((res) => {
      window.products = res.data;
    });
  }
  async getUser() {
    const user = await AsyncStorage.getItem("userData");
    if (user) {
      this.setState({ user: user, isLoggedIn: true });
    } else {
      this.setState({ isLoggedIn: false });
    }
  }
  render() {
    return this.state.isLoggedIn != null ? (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={
            this.state.isLoggedIn == true ? "HomeScreen" : "PhoneAuth"
          }
        >
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
              headerLeft: () => <></>,
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
            name="AddProducts"
            component={AddProducts}
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
            name="ProductsDetails"
            component={ProductsDetails}
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
    ) : null;
  }
}

export default App;
