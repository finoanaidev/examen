

// import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import React from "react";

// const Login = ({ navigation }) => {
// 	return (
// 		<View style={{ flex: 1, alignItems: "center" }}>

// 			<Image
// 				source={require("../../assets/images/crevette.jpg")}
// 				style={{ marginTop: 30 }}
// 			/>

// 			<Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold" }}>
// 				login no eto
// 			</Text>

// 			<Text
// 				style={{
// 					fontSize: 42,
// 					fontWeight: "bold",
// 					color: "#3c444c",
// 					marginTop: 44,
// 					marginBottom: 40,
// 				}}
// 			>
// 				logiiinn
// 			</Text>

// 			<TouchableOpacity
// 				onPress={() => navigation.navigate("RecipeList")}
// 				style={{
// 					backgroundColor: "#f96163",
// 					borderRadius: 18,
// 					paddingVertical: 18,
// 					width: "80%",
// 					alignItems: "center",
// 				}}
// 			>
// 				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
// 					Se connecter
// 				</Text>
// 			</TouchableOpacity>
// 		</View>
// 	);
// };

// export default Login;

// const styles = StyleSheet.create({});

import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
//import spacing from '../constants/Spacing

const Login = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 24,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "red",
              fontFamily: "poppins-bold",
              marginVertical: 20,
            }}
          >
            Login
          </Text>
          <Text
            style={{
              fontFamily: "poppins-semiBold",
              fontSize: 15,
              maxWidth: 60,
              textAlign: "center",
            }}
          >
            Welcome back
          </Text>
        </View>
        <View
          style={{
            marginVertical: 7,
          }}
        >
          <TextInput
            placeholder="Email"
            placeholderTextColor={"black"}
            style={{
              fontFamily: "poppins-regular",
              fontSize: 15,
              padding: 10,
              backgroundColor: "white",
              color: "black",
              borderRadius: 10,
              marginVertical: 11,
            }}
          />
          <TextInput
            placeholder="Pasword"
            placeholderTextColor={"black"}
            secureTextEntry
            style={{
              fontFamily: "poppins-regular",
              fontSize: 15,
              padding: 10,
              backgroundColor: "white",
              color: "black",
              borderRadius: 10,
              marginVertical: 11,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: "poppins-semiBold",
              fontSize: "small",
              color: "blue",
              alignSelf: "flex-end",
            }}
          >
            Forget password
          </Text>
        </View>
        <TouchableOpacity
         onPress={() => navigation.navigate("RecipeList")}
          style={{
            padding: 10,
            backgroundColor: "blue",
            marginVertical: 20,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "poppins-bold",
              color: "white",
              textAlign: "center",
              fontSize: 30,
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
          style={{
            padding: 10,
            marginVertical: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "poppins-bold",
              color: "blue",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            creat new account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
