import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import VerticalScrollView from "./src/components/VerticalScrollView";
import HorizontalScrollView from "./src/components/HorizontalScrollView";
import BasicFlatList from "./src/components/BasicFlatList";
import HorizontalFlatList from "./src/components/HorizontalFlatList";
import BasicSectionList from "./src/components/BasicSectionList";
import Animation from "./src/components/Animation";
import StaggerAnimation from "./src/components/StaggerAnimation";
import Gesture from "./src/components/Gesture";

const Stack = createStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="Gesture">
			<Stack.Screen name="Vertical" component={VerticalScrollView} />
			<Stack.Screen name="Horizontal" component={HorizontalScrollView} />
			<Stack.Screen name="FlatList" component={BasicFlatList} />
			<Stack.Screen name="HorizontalFlatList" component={HorizontalFlatList} />
			<Stack.Screen name="SectionList" component={BasicSectionList} />
			<Stack.Screen name="Animation" component={Animation} />
			<Stack.Screen name="StaggerAnimation" component={StaggerAnimation} />
			<Stack.Screen name="Gesture" component={Gesture} />
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
