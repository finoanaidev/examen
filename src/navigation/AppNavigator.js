import { StyleSheet} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import RecipeListScreen from "../screens/RecipeListScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
//import Login from "../screens/Login";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
			{/* <Stack.Screen name="Login" component={Login} /> */}
				<Stack.Screen name="Welcome" component={WelcomeScreen} />
				<Stack.Screen name="RecipeList" component={RecipeListScreen} />
				<Stack.Screen name="RecipeDetail" component={RecipeDetailsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;

const styles = StyleSheet.create({});
