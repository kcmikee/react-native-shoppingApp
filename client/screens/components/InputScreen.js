import React from "react";
import { View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS, FONTS, SIZES } from "../../constants";

const InputScreen = ({ onChangeText }) => {
  return (
    <View
      style={{
        backgroundColor: "#f9f9f9",
        flexDirection: "row",
        flex: 1,
        width: "90%",
        alignSelf: "center",
        borderRadius: 9,
        alignItems: "center",
        paddingHorizontal: SIZES.radius,
      }}
    >
      <Icon name="ios-search" size={25} color={COLORS.gray} />
      <TextInput
        placeholder="Search items"
        style={{ flex: 1, paddingLeft: SIZES.base, ...FONTS.body3 }}
      />
    </View>
  );
};

export default InputScreen;
