import React from "react";
import { StyleSheet, View, FlatList, Platform, Text } from "react-native";
import { horizontalData, horizontalStatus } from "../constants/weatherData";
import Icon from "react-native-vector-icons/Ionicons";

const HorizontalFlatListItem = ({ item, index }) => {
	return (
		<View style={styles.listItem}>
			<Text style={styles.itemHour}>{item.hour}</Text>
			<Icon
				name={Platform.OS === "ios" ? item.status.ios : item.status.android}
				size={30}
				color="white"
			/>
			<Text style={styles.itemDegrees}>{item.degrees} 🎈</Text>
		</View>
	);
};

const HorizontalFlatList = () => {
	return (
		<View style={styles.container}>
			<View style={{ height: 150 }}>
				<FlatList
					data={horizontalData}
					style={styles.flatList}
					horizontal
					renderItem={({ item, index }) => {
						return <HorizontalFlatListItem item={item} index={index} />;
					}}
					keyExtractor={(item, index) => item.hour}
				></FlatList>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		marginTop: Platform.OS === "ios" ? 34 : 0,
	},
	flatList: {
		backgroundColor: "black",
		opacity: 0.5,
	},
	listItem: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		width: 90,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "grey",
		margin: 4,
	},
	itemHour: {
		fontSize: 16,
		fontWeight: "bold",
		color: "white",
		margin: 20,
	},
	itemDegrees: {
		fontSize: 16,
		margin: 10,
		color: "white",
	},
});

export default HorizontalFlatList;
