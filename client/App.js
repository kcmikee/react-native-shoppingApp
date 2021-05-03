import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import ShoeDetail from "./screens/ShoeDetail";
import { Provider } from "react-redux";
import store from "./store";
import CartScreen from "./screens/CartScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./screens/components/drawer";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegistrationScreen";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerNavigation = ({ navigation }) => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
    swipeEnabled={false}
  >
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen
      name="login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Drawer.Screen
      name="register"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
  </Drawer.Navigator>
);
export default function App() {
  const [loaded] = useFonts({
    CarmenSansRegular: require("./assets/fonts/CarmenSans-Regular.otf"),
    CarmenSansSemiBold: require("./assets/fonts/CarmenSans-SemiBold.otf"),
    CarmenSansThin: require("./assets/fonts/CarmenSans-Thin.otf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={DrawerNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ShoeDetail"
            component={ShoeDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="cart"
            component={CartScreen}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{ headerShown: false }}
          /> */}
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
