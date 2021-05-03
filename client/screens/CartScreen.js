import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { Picker } from "@react-native-community/picker";
import { FONTS, COLORS } from "../constants";

export default function CartScreen({ navigation }) {
  //   const { productId, qty } = route.params;
  //   const quantity = qty ? qty : 0; //if qty doesnt exist, default is 1
  //   console.log(route.params);

  const myCartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const data = useSelector((state) => state.cart.items);
  const myCart = Object.values(data);
  //   console.log(myCart);

  const dispatch = useDispatch();

  useEffect(() => {
    StatusBar.setBarStyle("dark-content", true);
  }, []);

  //   const removeFromCartHandler = (id) => {
  //     // delete action
  //     dispatch(removeFromCart(id));
  //   };
  return (
    <View style={styles.container}>
      <StatusBar style="transparent" />
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            paddingRight: 10,
            flexDirection: "row",
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="chevron-left" size={30} color="#fff" />
          <Text style={styles.paymentTitle}>Payment</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cartContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.cartTitleView}>
            <Icon name="cart" size={30} />
            <Text style={styles.cartTitle}>My Cart</Text>
          </View>
          {/* .sort((a, b) => a.name > b.name) */}

          {myCart.length > 0 ? (
            <View>
              {myCart
                .sort((a, b) => a.name > b.name)
                .map((product) => (
                  <View style={styles.productView} key={product.id}>
                    <Image
                      style={styles.productImage}
                      source={{
                        uri: product.image,
                      }}
                    />
                    <View style={styles.productMiddleView}>
                      <Text style={styles.productTitle}>{product.name}</Text>
                      <Text style={styles.productCompanyTitle}>
                        {product.brand} -{" "}
                        <Text style={{ ...FONTS.body3, fontWeight: "bold" }}>
                          N{product.price}
                        </Text>{" "}
                        - {""}
                        {"("}
                        <Text style={{ ...FONTS.body3, fontWeight: "bold" }}>
                          {product.size}
                        </Text>
                        {")"}
                      </Text>
                    </View>
                    <View style={styles.productRightView}>
                      <Text
                        style={styles.productPriceText}
                      >{`N${product.sum}`}</Text>
                      <View style={styles.productItemCounterView}>
                        <TouchableOpacity
                          onPress={() =>
                            dispatch(removeFromCart(product.id, product.size))
                          }
                        >
                          <Icon
                            style={styles.toggleCounterButton}
                            name="minus-circle"
                            size={19}
                          />
                        </TouchableOpacity>
                        <Text style={styles.counterValue}>{product.qty}</Text>
                        <TouchableOpacity
                          onPress={() =>
                            dispatch(addToCart(product.id, product.size))
                          }
                        >
                          <Icon
                            style={styles.toggleCounterButton}
                            name="plus-circle"
                            size={19}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                ))}
              {/* <View style={styles.subtotalView}>
                <Text style={styles.subtotalText}>Subtotal -</Text>
                <Text style={styles.subtotalPrice}>N{myCart.sum}</Text>
              </View> */}
              <View style={styles.totalView}>
                <Text style={styles.totalText}>Total -</Text>

                <Text
                  style={{
                    ...styles.totalPrice,
                    fontWeight: "bold",
                    ...FONTS.body2,
                    color: "red",
                  }}
                >
                  N{myCartTotalAmount}
                </Text>
              </View>
              <TouchableOpacity style={styles.checkoutButton}>
                <Text style={styles.checkoutButtonText}>
                  Proceed to Checkout
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.emptyCartView}>
              <Text style={styles.emptyCartViewText}>Your cart is empty.</Text>
            </View>
          )}

          <View style={{ height: 100 }}></View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    paddingTop: 40,
  },
  header: {
    alignItems: "flex-start",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  paymentTitle: {
    fontSize: 30,
    fontWeight: "900",
    color: "#fff",
    // marginVertical: 12,
    top: -7,
    paddingHorizontal: 20,
  },
  cartContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 30,
    paddingHorizontal: 16,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },
  cartTitleView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  cartTitle: {
    fontSize: 26,
    fontWeight: "700",
    marginLeft: 10,
  },
  productView: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 8,
    // borderRadius: 10,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    // shadowRadius: 2,
    elevation: 2,
    marginTop: 14,
  },
  productImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    alignSelf: "center",
  },
  productMiddleView: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  productTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  productCompanyTitle: {
    fontSize: 16,
    fontWeight: "300",
  },
  productRightView: {
    alignItems: "center",
    justifyContent: "center",
  },
  productItemCounterView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 4,
  },
  counterValue: {
    fontSize: 20,
    fontWeight: "500",
  },
  productPriceText: {
    alignSelf: "flex-end",
    paddingRight: 10,
    fontSize: 20,
    fontWeight: "700",
  },
  toggleCounterButton: {
    paddingHorizontal: 10,
  },
  couponInputView: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#333",
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  couponInput: {
    flex: 1,
    fontSize: 20,
    paddingHorizontal: 10,
  },
  couponButton: {
    backgroundColor: "#333",
    paddingHorizontal: 12,
    justifyContent: "center",
  },
  couponButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  subtotalView: {
    display: "flex",
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottomColor: "#333",
    borderBottomWidth: 1,
  },
  subtotalText: {
    fontSize: 18,
    fontWeight: "500",
  },
  subtotalPrice: {
    fontSize: 18,
    fontWeight: "300",
  },
  shippingView: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
    paddingBottom: 10,
    borderBottomColor: "#333",
    borderBottomWidth: 1,
  },
  shippingItemsView: {
    marginTop: 10,
  },
  shippingText: {
    fontSize: 18,
    fontWeight: "500",
  },
  shippingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  shippingItemText: {
    fontSize: 16,
    paddingVertical: 4,
    fontWeight: "300",
  },
  totalView: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottomColor: "#333",
    borderBottomWidth: 1,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "500",
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "300",
  },
  checkoutButton: {
    backgroundColor: "#333",
    paddingVertical: 14,
    marginTop: 30,
    alignItems: "center",
  },
  checkoutButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
  },
  emptyCartView: {
    flex: 1,
    marginTop: 140,
  },
  emptyCartViewText: {
    fontSize: 20,
    fontWeight: "300",
    alignSelf: "center",
  },
});
