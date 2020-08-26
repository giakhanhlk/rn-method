import React from "react";
import { Dimensions, ScrollView, StyleSheet, View, Text } from "react-native";

const { width, height } = Dimensions.get("window");

const HorizontalScrollView = () => {
	return (
		<ScrollView
			horizontal
			pagingEnabled
			showsHorizontalScrollIndicator={true}
			scrollIndicatorInsets={{ top: 10, left: 10, right: 10, bottom: 10 }} // ios
			onMomentumScrollBegin={() => {
				// alert("Hello");
			}}
			onMomentumScrollEnd={() => {
				// alert("Goodbye");
			}}
			onScroll={(event) => {
				let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x}, y =${event.nativeEvent.contentOffset.y}`;
				console.log(logData);
			}}
			scrollEventThrottle={10}
		>
			<View style={styles.content}>
				<Text style={styles.text}>Screen 1</Text>
			</View>
			<View style={styles.content}>
				<Text style={styles.text}>Screen 2</Text>
			</View>
			<View style={styles.content}>
				<Text style={styles.text}>Screen 3</Text>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	content: {
		width,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#5f9ea0",
	},
	text: {
		textAlign: "center",
		padding: 15,
		fontSize: 20,
		color: "white",
	},
});

// ScrollView.horizontal: nằm ngang
// ScrollView.pagingEnable: chuyển động theo từng trang
// ScrollView.showHorizontalScrollIndicator: thanh scroll ở bottom
// ScrollView.scrollIndicatorInsets: hiển thị khung xung quanh scrollBottom
// ScrollView.onMomentumScrollBegin: Khi bắt đầu scroll thì thực hiện something...
// ScrollView.onMomentumScrollEnd: Khi bỏ tay ra sau khi scroll...
// ScrollView.onScroll: Thực hiện hàm khi đang scroll
// ScrollView.scrollEventThrottle: đưa ra khoảng thời gian bao lâu thì tọa độ update 1 lần

export default HorizontalScrollView;
