import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { AirbnbRating } from "react-native-elements";

export default class ProductsDetails extends Component {
  constructor(props) {
    super(props);
  }

  clickEventListener() {
    Alert.alert("Success", "Product has beed added to cart");
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ alignItems: "center", marginHorizontal: 30 }}>
            <Image
              style={styles.productImg}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3v7KDJN7TAoJa5sFaPWcp1HX8JFcpF3z5K3ngz4L6kWoEP7Ca",
              }}
            />
            <Text style={styles.name}>Super Soft T-Shirt</Text>
            <Text style={styles.price}>$ 12.22</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec
            </Text>
          </View>
          <View style={styles.starContainer}>
            <AirbnbRating
              count={5}
              showRating={20}
              defaultRating={4}
              size={20}
              starContainerStyle={{
                alignSelf: "flex-start",
              }}
            />
          </View>

          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity
              style={styles.shareButton}
              onPress={() => this.clickEventListener()}
            >
              <Text style={styles.shareButtonText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  productImg: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "bold",
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    marginTop: 10,
    color: "#696969",
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: "#778899",
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: "white",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  starContainer: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
  },
  contentColors: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
  },
  contentSize: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: "#eeeeee",
    marginTop: 20,
    marginHorizontal: 30,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30,
  },
});
