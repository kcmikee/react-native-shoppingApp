import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, FONTS, SIZES, icons, images } from "../constants";
import Header from "./components/Header";
import InputScreen from "./components/InputScreen";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import LoadingBox from "../screens/components/LoadingBox";
import MessageBox from "../screens/components/MessageBox";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as cartActions from "../actions/cartActions";
// import filter from "lodash.filter";

const Home = ({ navigation }) => {
  const API = "http://192.168.43.183:5000/api/products";
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [fullData, setFullData] = useState([]);

  const dispatch = useDispatch();
  //   const productList = useSelector((state) => state.productList);
  //   const { loading, error, products } = productList;
  const handleSearch = (text) => {
    if (text) {
      const newData = fullData.filter((item) => {
        const itemData = item.productName
          ? item.productName.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setQuery(newData);
      setData(newData);
    } else {
      setData(fullData);
      setQuery(text);
    }
  };

  useEffect(() => {
    // dispatch(listProducts());
    setIsLoading(true);
    fetch(API)
      .then((response) => response.json())
      .then((DATA) => {
        setData(DATA);
        setFullData(DATA);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  function renderShoeList() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            // backgroundColor: 'item.backgroundColor',
            backgroundColor: "#f9f9f9",
            width: "90%",
            alignSelf: "center",
            borderRadius: 30,
            padding: 30,
            height: 280,
            justifyContent: "center",
            marginVertical: 5,
          }}
          onPress={() =>
            navigation.navigate("ShoeDetail", {
              shoe: item,
            })
          }
        >
          <View>
            {/* <View
              style={{
                marginTop: 15,
                backgroundColor: item.navTintColor,
                transform: [{ rotate: "60deg" }],
                height: 150,
                width: 140,
                position: "absolute",
                alignSelf: "center",
                borderRadius: 20,
                zIndex: 0,
              }}
            /> */}
            <Image
              source={{ uri: item.productCover }}
              resizeMode="stretch"
              style={{
                resizeMode: "contain",
                height: 150,
                top: 10,
              }}
            />
            <View style={{ marginTop: 10, paddingBottom: 10 }}>
              <Text style={{ ...FONTS.body5 }}>{item.category}</Text>
              <Text style={{ ...FONTS.largeTitleBold }}>
                {item.productName}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ ...FONTS.h2, color: COLORS.black }}>
                  ${item.price}
                </Text>
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    padding: SIZES.base,
                    backgroundColor: COLORS.white,
                    borderRadius: SIZES.radius,
                  }}
                  onPress={() => dispatch(cartActions.addToCart(item._id))}
                >
                  <Icon name="cart-plus" size={25} color={COLORS.orange} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => `${item._id}`}
        showsVerticalScrollIndicator={false}
      />
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/************************ Header ****************************/}
      <View style={{ height: 100, paddingTop: 10 }}>
        <Header navigation={navigation} />
      </View>
      {/************************  search Search ***************************/}
      <View style={{ height: 45, marginBottom: SIZES.radius }}>
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
          <Ionicons name="ios-search" size={25} color={COLORS.gray} />
          <TextInput
            placeholder="Search items"
            style={{ flex: 1, paddingLeft: SIZES.base, ...FONTS.body3 }}
            value={query}
            onChangeText={(queryText) => handleSearch(queryText)}
          />
        </View>
      </View>
      {/************************* SHOELIST ********************************/}
      {isLoading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        renderShoeList()
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
