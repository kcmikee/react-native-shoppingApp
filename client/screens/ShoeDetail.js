// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   StatusBar,
//   ScrollView,
//   Button,
//   TouchableOpacity,
// } from "react-native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import { FONTS, COLORS, SIZES, icons } from "../constants";
// import DetailHeader from "./components/DetailHeader";

// const ShoeDetail = ({ route, navigation }) => {
//   const [shoe, setShoe] = useState(route.params);
//   const [selectedSize, setSelectedSize] = React.useState("");

//   useEffect(() => {
//     let { shoe } = route.params;
//     setShoe(shoe);
//   }, [shoe]);

//   function renderItem() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           //   backgroundColor: shoe.backgroundColor,
//           backgroundColor: "#f9f9f9",
//           borderRadius: 30,
//           overflow: "hidden",
//         }}
//       >
//         <View style={{ marginTop: 40 }}>
//           <DetailHeader onClick={() => navigation.goBack()} />
//         </View>
//         <View
//           style={{
//             alignItems: "center",
//             justifyContent: "center",
//             marginTop: 100,
//           }}
//         >
//           {/* <View
//             style={{
//               backgroundColor: shoe.navTintColor,
//               transform: [{ rotate: "-103deg" }],
//               height: 180,
//               width: 180,
//               position: "absolute",
//               alignSelf: "center",
//               borderRadius: 20,
//             }}
//           /> */}
//           <Image
//             source={{ uri: shoe.shoeCover }}
//             resizeMode="stretch"
//             style={{
//               height: 180,
//               width: 250,
//               //   marginTop: -60,
//               //   transform: [{ rotate: "-10deg" }],
//             }}
//           />
//         </View>
//       </View>
//     );
//   }

//   return (
//     <View style={{ flex: 1, backgroundColor: COLORS.white }}>
//       {/* Banner */}
//       <View
//         style={{
//           height: "60%",
//           borderRadius: SIZES.padding,
//           paddingBottom: 10,
//         }}
//       >
//         {renderItem()}
//       </View>
//       {/* details */}
//       <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
//         <View style={{ marginTop: 5, padding: SIZES.radius }}>
//           {/* title */}
//           <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <View style={{ width: "80%" }}>
//               <Text style={{ ...FONTS.body5 }}>{shoe.shoeName}</Text>
//               <Text style={{ ...FONTS.h1 }}>{shoe.brand}</Text>
//             </View>
//             <View>
//               <Text style={{ ...FONTS.h2, color: COLORS.orange }}>
//                 ${shoe.price}
//               </Text>
//             </View>
//           </View>
//           {/* size */}
//           {/* <View>
//                       <Text style={{...FONTS.body3,}}>Select size</Text>
//                       <View  style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row',marginTop: 4, }}>
//                             <Text style={{display:'flex'}}>{shoe.size}</Text>
//                       </View>
//                   </View> */}
//           <View
//             style={{
//               left: -30,
//               height: 50,
//               backgroundColor: shoe.navTintColor,
//               width: "60%",
//               borderTopRightRadius: SIZES.padding,
//               borderBottomRightRadius: SIZES.padding,
//               alignItems: "center",
//               justifyContent: "center",
//               marginVertical: 10,
//             }}
//           >
//             <Text style={{ ...FONTS.body3 }}>description</Text>
//           </View>
//           <View style={{ width: "92%", alignSelf: "center" }}>
//             <Text
//               style={{
//                 ...FONTS.body3,
//                 textAlign: "justify",
//                 letterSpacing: 0.02,
//               }}
//             >
//               {shoe.description}. Lorem ipsum dolor sit amet consectetur
//               adipisicing elit. Voluptatem cum repudiandae eaque deleniti
//               eveniet at perferendis sequi, quia porro architecto. Lorem ipsum
//               dolor sit amet consectetur adipisicing elit. Aliquam nesciunt
//               aliquid repellat illum, veniam ratione nostrum quam voluptatem
//               quidem facilis? Pariatur, tenetur libero dicta architecto
//               cupiditate tempora. Ea, aut vero!
//             </Text>
//           </View>
//         </View>
//       </ScrollView>
//       <TouchableOpacity
//         style={{
//           backgroundColor: COLORS.orange,
//           height: 50,
//           width: 50,
//           padding: 10,
//           borderRadius: 25,
//           justifyContent: "center",
//           alignItems: "center",
//           position: "absolute",
//           bottom: 25,
//           right: 25,
//         }}
//         onPress={() =>
//           navigation.navigate("cart", {
//             shoe: shoe,
//           })
//         }
//       >
//         <Icon name="cart-plus" size={25} color={COLORS.white} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default ShoeDetail;
import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";

import Constants from "expo-constants";
import {
  Feather as Icon,
  FontAwesome as FAIcon,
  MaterialCommunityIcons as MAIcon,
} from "react-native-vector-icons";
import { FONTS } from "../constants";
import { useDispatch } from "react-redux";
import * as cartActions from "../actions/cartActions";

export default function ProductScreen1({ route, navigation }) {
  const [shoe, setShoe] = useState(route.params);
  const dispatch = useDispatch();

  useEffect(() => {
    let { shoe } = route.params;
    setShoe(shoe);
  }, []);
  const [isFavourite, setFavourite] = useState(false);

  const Rating = ({ rating, maxRating }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        {Array(rating)
          .fill(1)
          .map((el, index) => (
            <FAIcon name="star" size={20} color="#2e2e2e" key={index} />
          ))}
        {Array(maxRating - rating)
          .fill(1)
          .map((el, index) => (
            <FAIcon name="star-o" size={20} color="#2e2e2e" key={index} />
          ))}
      </View>
    );
  };
  const [selectedSize, setSelectedSize] = useState();

  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
    StatusBar.setBackgroundColor("#fff");
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MAIcon name="chevron-left" size={30} />
        </TouchableOpacity>
        <Text style={{ ...styles.headerTitle, ...FONTS.navTitle }}>
          Fred Store
        </Text>
        <Icon
          name="shopping-bag"
          size={26}
          onPress={() => navigation.navigate("cart")}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            style={{ height: 550, resizeMode: "contain" }}
            source={{
              uri: shoe.productCover,
            }}
          />
        </View>
        <View style={styles.detailsView}>
          <View style={styles.productTitleView}>
            <Text style={{ ...styles.productTitle, ...FONTS.body1 }}>
              {shoe.productName}
            </Text>
            <TouchableOpacity onPress={() => setFavourite(!isFavourite)}>
              <FAIcon name={isFavourite ? "heart" : "heart-o"} size={22} />
            </TouchableOpacity>
          </View>
          <View style={styles.productPriceView}>
            <Text style={{ ...styles.discountedPriceText, ...FONTS.body3 }}>
              N{shoe.price}
            </Text>
            <Text style={styles.actualPriceText}>N{shoe.price / 0.5}</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Rating rating={route.params.shoe.rating} maxRating={5} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontSize: 18,
                // fontFamily: 'MontserratBold',
                marginBottom: 10,
              }}
            >
              Size:
            </Text>
            <View style={{ flexDirection: "row" }}>
              {route.params.shoe.size.map((s, index) => (
                <TouchableOpacity
                  key={index}
                  style={
                    selectedSize === s.label ? styles.tagSelected : styles.tag
                  }
                  onPress={() => setSelectedSize(s.label)}
                >
                  <Text
                    style={
                      selectedSize === s.label
                        ? styles.tagLabelSelected
                        : styles.tagLabel
                    }
                  >
                    {s.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
          <TouchableOpacity
            style={styles.buyNowButton}
            onPress={() =>
              dispatch(cartActions.addToCart(shoe._id, selectedSize))
            }
          >
            <Text style={styles.buttonText}>Buy</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10, backgroundColor: "#fff" }}>
          <TouchableOpacity style={styles.productDescriptionHeader}>
            <Text style={{ fontSize: 18, ...FONTS.body3 }}>
              Product Description
            </Text>
            <TouchableOpacity>
              <Icon name="chevron-down" size={26} />
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={{ padding: 10 }}>
            <Text style={{ ...FONTS.body3 }}>{shoe.description}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 10,
    borderBottomColor: "#dfe4fe",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 18,
  },
  detailsView: {
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  productTitleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "95%",
  },
  productTitle: {
    fontSize: 24,
    flexWrap: "wrap",
  },
  productPriceView: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  actualPriceText: {
    color: "#222",
    marginLeft: 10,
    textDecorationLine: "line-through",
    fontSize: 18,
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: "#111",
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
  },
  addToCartButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 6,
    borderWidth: 1,
    borderColor: "#111",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    // fontFamily: 'MontserratBold',
  },
  tag: {
    borderRadius: 4,
    backgroundColor: "#FFF",
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagLabel: {
    // fontFamily: 'MontserratBold',
    color: "#333",
  },
  tagSelected: {
    backgroundColor: "#333",
    borderRadius: 4,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagLabelSelected: {
    // fontFamily: 'MontserratBold',
    color: "#FFF",
  },
  productDescriptionHeader: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#dfe4fe",
  },
  moreProductImageView: {
    flex: 1,
    height: 240,
    backgroundColor: "#fff",
    borderRadius: 4,
    overflow: "hidden",
  },
  moreProductName: {
    // fontFamily: 'MontserratBold',
    fontSize: 16,
  },
  moreProductPriceView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  moreProductPrice: {
    fontSize: 16,
    // fontFamily: 'MontserratRegular',
  },
  moreProductIcon: {
    marginLeft: 10,
  },
  moreProductBuyButton: {
    backgroundColor: "#111",
    marginTop: 10,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  moreProductBuyButtonText: {
    color: "#fff",
    // fontFamily: 'MontserratBold',
    fontSize: 18,
  },
});
