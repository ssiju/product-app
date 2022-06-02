import React, { Component } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { Alert } from "react-native";
import { ActivityIndicator } from "react-native";

export default class GoogleMapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: null,
    };
  }
  componentDidMount() {
    this.CheckIfLocationEnabled();
  }

  CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        "Location Service not enabled",
        "Please enable your location service to continue",
        [{ text: "OK" }],
        { cancelable: false }
      );
    } else {
      this.setState({ locationServiceEnabled: enabled });
      this.GetCurrentLocation();
    }
  };

  GetCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }

    let { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude, accuracy } = coords;
      this.setState({ lat: latitude, long: longitude });
      this.getDelta(latitude, longitude, accuracy);
    }
  };
  getDelta(lat, long, accuracy) {
    const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
    const latDelta = accuracy / oneDegreeOfLatitudeInMeters;
    const longDelta =
      accuracy /
      (oneDegreeOfLatitudeInMeters * Math.cos(lat * (Math.PI / 180)));

    this.setState({
      region: {
        latitude: lat,
        longitude: long,
        latitudeDelta: latDelta,
        longitudeDelta: longDelta,
        accuracy: accuracy,
      },
    });
  }

  render() {
    return this.state.region != null ? (
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={this.state.region}
        // initialRegion={{
        //   latitude: 37.78825,
        //   longitude: -122.4324,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
      />
    ) : (
      <ActivityIndicator />
    );
  }
}
