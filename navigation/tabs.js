import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import MailScreen from "../screens/mail";
import SettingsScreen from "../screens/settings";
import ComposeScreen from "../screens/compose";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -3,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: "#e32f45",
        zIndex: 1,
      }}
    >
      <FontAwesomeIcon
        name="pencil"
        size={40}
        color="#fff"
        style={{
          position: "absolute",
          top: "50%", // Center vertically
          left: "50%", // Center horizontally
          transform: [{ translateX: -17 }, { translateY: -25 }], // Adjust to center the icon
        }}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          top: 62,
        }}
      >
        <Text style={{ color: "white", fontSize: 12 }}>Compose</Text>
      </View>
    </View>
    <Text style={{ color: "#fff" }}>{children}</Text>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Mail"
        component={MailScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <FontAwesomeIcon
                name="envelope"
                size={30}
                color={focused ? "#e32f45" : "#748c94"}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 15 }}
              >
                Mail
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Compose"
        component={ComposeScreen}
        options={{
          tabBarIcon: ({ focused }) => null,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <FontAwesomeIcon
                name="gear"
                size={30}
                color={focused ? "#e32f45" : "#748c94"}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 15 }}
              >
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
