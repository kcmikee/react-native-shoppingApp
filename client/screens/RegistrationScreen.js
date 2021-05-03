import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Feather as FEAcon,
  FontAwesome as FAIcon,
  MaterialCommunityIcons as Icon,
} from "react-native-vector-icons";
import { FONTS } from "../constants";
import { useDispatch } from "react-redux";
import { register } from "../actions/userActions";
import { useSelector } from "react-redux";

export default function RegisterScreen(props) {
  const auth = useSelector((state) => state.userReg);
  const { isAuth, loading } = auth;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const onLogin = () => {
    props.navigation.navigate("Home");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm Password doesn't match");
    } else {
      dispatch(register(name, email, password));
    }
    // TODO: sign in action
  };
  useEffect(() => {
    StatusBar.setBarStyle("light-content", true);
    if (isAuth) {
      onLogin();
    }
  }, [auth]);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <LinearGradient
        colors={["#222", "#222", "#111"]}
        style={styles.container}
      >
        <Text style={{ ...styles.welcomeText, ...FONTS.h1 }}>Register</Text>
        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#808e9b"
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#808e9b"
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#808e9b"
          style={styles.input}
          secureTextEntry={true}
          textContentType="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#808e9b"
          style={styles.input}
          secureTextEntry={true}
          textContentType="password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <TouchableOpacity>
          <Text style={styles.fpText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={submitHandler}>
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.signUpTextView}>
          <Text style={styles.signUpText}>Have an account?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("login")}>
            <Text style={[styles.signUpText, { color: "#B53471" }]}>
              {" Sign In"}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    // alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "900",
    color: "#fff",
    alignSelf: "center",
    marginVertical: 16,
  },
  loginText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#333",
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#808e9b",
  },
  fpText: {
    alignSelf: "flex-end",
    color: "#B33771",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: "#833471",
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fafafa",
    alignSelf: "center",
  },
  loginWithBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  iconButton: {
    backgroundColor: "#333",
    padding: 14,
    marginHorizontal: 10,
    borderRadius: 100,
  },
  signUpTextView: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  signUpText: {
    color: "#808e9b",
    fontSize: 20,
    fontWeight: "500",
  },
});
