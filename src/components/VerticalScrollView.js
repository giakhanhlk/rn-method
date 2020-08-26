import React from "react";
import { Image, ScrollView, Dimensions, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

const VerticalScrollView = () => {
	return (
		<ScrollView
			maximumZoomScale={3} // active on ios
			minimumZoomScale={0.2} // active on ios
			keyboardDismissMode="on-drag" // active on ios
		>
			<Image
				source={require("../assets/cactus.png")}
				style={{ width, height: (width * 512) / 512 }}
			/>
			<Text style={styles.text}>This is a Text</Text>
			<TextInput style={styles.textInput} placeholder="Enter Text" />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		padding: 15,
		textAlign: "center",
		backgroundColor: "green",
	},
});

export default VerticalScrollView;
