// App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import MailScreen from "./screens/mail";
import HeaderTab from "./components/HeaderTab";

const App = () => {
  return (
    <NavigationContainer>
      <HeaderTab />
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
