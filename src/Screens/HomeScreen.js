import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native";
import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native";
import Products from "../Component/Products";
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styleSheet.MainContainer}>
        <StatusBar animated={true} backgroundColor="#61dafb" />
        <FlatList
          data={window.products}
          renderItem={({ item }) => (
            <Products
              key={item.id}
              imgURL={item.image}
              title={item.title}
              price={item.price}
              category={item.category}
              onPress={() => this.props.navigation.navigate("GoogleMapScreen")}
            />
          )}
          keyExtractor={(item) => item.id}
          key={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "white",
  },

  gridStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    margin: 2,
    backgroundColor: "#00C853",
  },

  gridText: {
    fontSize: 24,
    color: "white",
  },
});
