import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

const LoadingBox = () => {
  return (
    <View class={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator />
      {/* <Text>Loading ...</Text> */}
    </View>
  );
};

export default LoadingBox;

const styles = StyleSheet.create({
  // loading:
});
