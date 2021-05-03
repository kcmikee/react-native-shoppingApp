import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const MessageBox = (props) => {
  return (
    <View
      style={{
        backgroundColor: "red",
        padding: 15,
        width: "90%",
        borderRadius: 10,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Text style={{ color: "white" }}>{props.children} </Text>
      <ActivityIndicator color="white" />
    </View>
  );
};

export default MessageBox;

const styles = StyleSheet.create({});
