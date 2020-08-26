import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import VerticalScrollView from "./src/components/VerticalScrollView";
import HorizontalScrollView from "./src/components/HorizontalScrollView";

const Stack = createStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="Horizontal">
			<Stack.Screen name="Vertical" component={VerticalScrollView} />
			<Stack.Screen name="Horizontal" component={HorizontalScrollView} />
		</Stack.Navigator>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<StackNavigator />
		</NavigationContainer>
	);
}
