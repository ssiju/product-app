import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PhoneAuthScreen from "./src/Screens/PhoneAuthScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import GoogleMapScreen from "./src/Screens/GoogleMapScreen";
import AddProducts from "./src/Screens/AddProducts";
import ProductsDetails from "./src/Screens/ProductsDetails";

const Stack = createNativeStackNavigator();

export function Navigator(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={props.isLoggedIn == true ? "HomeScreen" : "PhoneAuth"}
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
  );
}
