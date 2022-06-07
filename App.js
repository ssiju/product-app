import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";
import { store } from "./src/Store/Store";
import Navigator from "./src/Navigation/Navigator";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isLoggedIn: null,
    };
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
      <Provider store={store}>
        <Navigator isLoggedIn={this.state.isLoggedIn} />
      </Provider>
    ) : null;
  }
}

export default App;
