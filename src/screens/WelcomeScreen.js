// import { View } from "react-native";
// import React from "react";
// import Login from "./Login";

// const WelcomeScreen = () => {
// 	return (

// 		<View>
// 			<Login />
// 		</View>

// 	);
// };

// export default WelcomeScreen;


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

// Login.jsx
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Login = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={require("../../assets/images/crevette.jpg")}
        style={{ marginTop: 30 }}
      />

      <Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold" }}>
        login no eto
      </Text>

      <Text
        style={{
          fontSize: 42,
          fontWeight: "bold",
          color: "#3c444c",
          marginTop: 44,
          marginBottom: 40,
        }}
      >
        logiiinn
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("RecipeList")}
        style={{
          backgroundColor: "#f96163",
          borderRadius: 18,
          paddingVertical: 18,
          width: "80%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
          S'inscrire
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
