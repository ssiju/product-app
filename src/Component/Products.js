// src/components/Product.js
import React, { Component } from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import { Text, StyleSheet } from "react-native";
import { Card, Button, AirbnbRating } from "react-native-elements";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <Card>
          <TouchableOpacity onPress={this.props.onPress}>
            <Image
              style={{ height: 200, width: 200, alignSelf: "center" }}
              source={{
                uri: this.props.imgURL,
              }}
              resizeMode={"contain"}
            />
          </TouchableOpacity>

          <Text style={{ marginBottom: 10, marginTop: 20 }} h2>
            {this.props.title}
          </Text>

          <Text style={styles.price} h4>
            {"$" + this.props.price}
          </Text>

          <Text h6 style={styles.description}>
            {this.props.category}
          </Text>
          <Text h6 style={styles.description}>
            {this.props.count}
          </Text>
          <AirbnbRating
            count={5}
            reviews={[
              "Terrible",
              "Bad",
              "Meh",
              "OK",
              "Good",
              "Hmm...",
              "Very Good",
              "Wow",
              "Amazing",
              "Unbelievable",
              "Jesus",
            ]}
            showRating={this.props.count}
            defaultRating={this.props.rate}
            size={20}
            starContainerStyle={{
              alignSelf: "flex-start",
            }}
          />
          <Button
            type="clear"
            title="Shop now"
            //   onPress={() => this.props.navigation.navigate("Details")}
          />
        </Card>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    color: "#5a647d",
    fontWeight: "bold",
    fontSize: 30,
  },
  price: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 10,
    color: "#c1c4cd",
  },
});
