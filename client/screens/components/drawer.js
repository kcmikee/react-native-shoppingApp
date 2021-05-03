import React from "react";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  ImageBackground,
  TouchableHighlight,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Drawer,
  Caption,
  Title,
  Paragraph,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { images, COLORS, FONTS, SIZES } from "../../constants";

export function DrawerContent(props, navigation) {
  return (
    <View style={styles.screen}>
      <DrawerContentScrollView>
        {/* Contains the ehub and notification bell */}
        <View style={styles.header}>
          <View style={styles.left}>
            <Text
              // onpress={() => props.navigation.navigate("Newsfeed")}
              style={{ ...FONTS.body1 }}
            >
              Fred Store
            </Text>
          </View>
          <View style={styles.right}>
            <TouchableOpacity
              style={styles.links1}
              onPress={() => props.navigation.navigate("cart")}
            >
              <Icon
                name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
                color="#000"
                size={25}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Contains the links */}
        <View styles={styles.list}>
          <DrawerItem
            style={{ borderBottomWidth: 1, borderBottomColor: "#bebebe" }}
            icon={() => (
              <MIcon name="shopping" color={COLORS.black} size={25} />
            )}
            label={() => (
              <Text style={{ color: "#000", ...FONTS.body3 }}>Trending</Text>
            )}
            onPress={() => props.navigation.navigate("login")}
          />
          <DrawerItem
            style={{ borderBottomWidth: 1, borderBottomColor: "#bebebe" }}
            icon={() => (
              <MIcon name="view-grid-outline" color="#000" size={25} />
            )}
            label={() => (
              <Text style={{ color: "#000", ...FONTS.body3 }}>Categories</Text>
            )}
            //   onPress={() => {}}
          />
          <DrawerItem
            style={{ borderBottomWidth: 1, borderBottomColor: "#bebebe" }}
            icon={() => (
              <Image source={images.shoe} style={{ width: 30, height: 30 }} />
            )}
            label={() => <Text style={{ color: "#000" }}>Shoes</Text>}
            //   onPress={() => {}}
          />
          <DrawerItem
            style={{ borderBottomWidth: 1, borderBottomColor: "#bebebe" }}
            icon={() => (
              <MIcon name="tshirt-crew" color={COLORS.black} size={25} />
            )}
            label={() => <Text style={{ color: "#000" }}>Shirts</Text>}
            //   onPress={() => {}}
          />
          <DrawerItem
            style={{ borderBottomWidth: 1, borderBottomColor: "#bebebe" }}
            icon={() => (
              <Image
                source={images.cargoShort}
                style={{ width: 30, height: 30 }}
              />
            )}
            label={() => <Text style={{ color: "#000" }}>Shorts</Text>}
            //   onPress={() => {
            //     props.navigation.navigate("Department");
            //   }}
          />
          <DrawerItem
            style={{ borderBottomWidth: 1, borderBottomColor: "#bebebe" }}
            icon={() => (
              <Image
                source={images.trouser}
                style={{ width: 30, height: 30 }}
              />
            )}
            label={() => <Text style={{ color: "#000" }}>Trousers</Text>}
            //   onPress={() => {
            //     props.navigation.navigate("Elibrary");
            //   }}
          />
          <DrawerItem
            style={{ borderBottomWidth: 1, borderBottomColor: "#bebebe" }}
            icon={() => (
              <Image source={images.hoodie} style={{ width: 30, height: 30 }} />
            )}
            label={() => <Text style={{ color: "#000" }}>Hoodie</Text>}
            //   onPress={() => {
            //     props.navigation.navigate("Elibrary");
            //   }}
          />
          <DrawerItem
            style={{ borderBottomWidth: 1, borderBottomColor: "#bebebe" }}
            icon={() => (
              <Image
                source={images.bag}
                style={{ width: 30, height: 30, resizeMode: "contain" }}
              />
            )}
            label={() => <Text style={{ color: "#000" }}>Bags</Text>}
            //   onPress={() => {
            //     props.navigation.navigate("Elibrary");
            //   }}
          />
        </View>
      </DrawerContentScrollView>

      {/* The sign out section */}
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={() => (
            <Icon
              name={Platform.OS === "ios" ? "ios-exit" : "md-exit"}
              color="#000"
              size={25}
            />
          )}
          label={() => <Text style={{ color: "#000" }}>Sign Out</Text>}
        />
      </Drawer.Section>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  background: {
    resizeMode: "cover",
    backgroundColor: COLORS.lightBlue,
    justifyContent: "center",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    marginVertical: 16,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 20,
    // fontFamily: ...FONTS.body3,
    color: "#000",
  },
  left: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 5,
  },
  //   right: {
  //     paddingRight: 30,
  //   },
  mid: {
    borderRadius: 15,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "95%",
    alignSelf: "center",
    borderColor: "#000",
    borderWidth: 2,
    marginBottom: 10,
  },
  midImage: {
    flex: 1,
    position: "absolute",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    padding: 25,
    borderRadius: 15,
  },
  nse: {
    height: 55,
    width: 55,
    borderRadius: 5,
    paddingTop: 25,
  },
  nseImg: {
    height: 55,
    width: 55,
    borderRadius: 10,
  },
  midText: {
    padding: 25,
  },
});
