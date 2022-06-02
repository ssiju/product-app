import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { FlatList } from "react-native";
import { TouchableHighlight } from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { ActivityIndicator } from "react-native";
import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native";
import { Icon } from "react-native-elements";
import Products from "../Component/Products";
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  addProducts() {}
  componentDidMount() {
    this.setState({ products: window.products });
    console.log(this.state.products);
  }
  render() {
    return this.state.products != [] ? (
      <SafeAreaView style={styles.MainContainer}>
        <StatusBar animated={true} backgroundColor="#61dafb" />
        <FlatList
          data={this.state.products}
          renderItem={({ item }) => (
            <Products
              key={item.id}
              imgURL={item.image}
              title={item.title}
              price={item.price}
              count={item.rating.count}
              rate={item.rating.rate}
              category={item.category}
              onPress={() => this.props.navigation.navigate("GoogleMapScreen")}
              onShopClick={() =>
                this.props.navigation.navigate("ProductsDetails", {
                  productsData: item,
                })
              }
            />
          )}
          keyExtractor={(item) => item.id}
          key={(item) => item.id}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("AddProducts")}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            position: "absolute",
            bottom: 30,
            right: 30,
            height: 50,
            paddingHorizontal: 5,
            backgroundColor: "#61dafb",
            borderRadius: 20,
            elevation: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            Add Product
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    ) : (
      <Text style={{ textAlign: "center" }}>No Products found</Text>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
});
