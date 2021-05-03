import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES, icons, images } from "../../constants";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Header = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center",
      }}
    >
      {/* headerleft */}
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => navigation.openDrawer()}
      >
        <Icon name="text-short" size={25} color={COLORS.black} />
      </TouchableOpacity>
      {/* header title */}
      <View style={{ flex: 2, alignItems: "center" }}>
        <Text style={{ ...FONTS.navTitle }}>Fred Store</Text>
      </View>
      {/* headeright */}
      <TouchableOpacity style={{ flex: 1, alignItems: "flex-end" }}>
        <Icon name="filter-variant" size={25} color={COLORS.black} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
