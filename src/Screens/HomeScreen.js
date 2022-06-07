import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native";
import Products from "../Component/Products";
import { useDispatch, useSelector } from "react-redux";
import apiCall from "../Store/ApiActionCreator";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.apiReducer.data);
  const loading = useSelector((state) => state.apiReducer.loading);
  const navigation = useNavigation();
  useEffect(() => {
    dispatch(apiCall("https://fakestoreapi.com/products"));
  }, []);
  return (
    <SafeAreaView style={styles.MainContainer}>
      <StatusBar animated={true} backgroundColor="#61dafb" />

      {loading ? (
        <ActivityIndicator
          size="large"
          color="red"
          style={{ alignSelf: "center" }}
        />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Products
              key={item.id}
              imgURL={item.image}
              title={item.title}
              price={item.price}
              count={item.rating.count}
              rate={item.rating.rate}
              category={item.category}
              onPress={() => navigation.navigate("GoogleMapScreen")}
              onShopClick={() =>
                navigation.navigate("ProductsDetails", {
                  productsData: item,
                })
              }
            />
          )}
          keyExtractor={(item) => item.id}
          key={(item) => item.id}
        />
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate("AddProducts")}
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
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
});
