import React, { useState, useRef } from "react";
import {
	View,
	StyleSheet,
	FlatList,
	Text,
	Image,
	Alert,
	TouchableHighlight,
} from "react-native";
import lists from "../constants/flatListData";
import SwipeOut from "react-native-swipeout"; // install package

const FlatListItem = ({ item, index, refreshFlatList }) => {
	const [activeRowKey, setActiveRowKey] = useState(null);

	const swipeSettings = {
		autoClose: true,
		onClose: (secId, rowId, direction) => {
			if (activeRowKey !== null) {
				setActiveRowKey(null);
			}
		},
		onOpen: (secId, rowId, direction) => {
			setActiveRowKey(item.id);
		},
		right: [
			{
				onPress: () => {
					const deletingRow = activeRowKey;
					Alert.alert("Delete Item", "Are you sure you want to delete it", [
						{
							text: "No",
							onPress: () => console.log("Cancel Pressed"),
							style: "cancel",
						},
						{
							text: "Yes",
							onPress: () => {
								const indexOfItem = lists.findIndex(
									(list) => list.id === item.id
								);
								lists.splice(indexOfItem, 1);
								refreshFlatList(deletingRow);
							},
						},
					]);
				},
				text: "Delete",
				type: "delete",
			},
		],
		rowId: index,
		sectionId: 1,
	};
	return (
		<SwipeOut {...swipeSettings}>
			<View
				style={{
					flex: 1,
					flexDirection: "column",
				}}
			>
				<View
					style={{
						flex: 1,
						flexDirection: "row",
						backgroundColor: "mediumseagreen",
						// backgroundColor: index % 2 === 0 ? "mediumseagreen" : "tomato",
					}}
				>
					<Image style={styles.images} source={{ uri: item.image }} />
					<View>
						<Text style={styles.itemName}>{item.name}</Text>
						<Text style={styles.itemName}>{item.description}</Text>
					</View>
				</View>
				<View
					style={{
						height: 1,
						backgroundColor: "white",
					}}
				/>
			</View>
		</SwipeOut>
	);
};

const BasicFlatList = () => {
	const [deleteRowKey, setDeleteRowKey] = useState(null);
	const addModal = useRef(null);

	const refreshFlatList = (deleteKey) => {
		setDeleteRowKey(deleteKey);
	};

	const onPressAdd = () => {
		console.log("add item");
	};

	return (
		<View style={styles.container}>
			<View style={styles.container__addItem}>
				<TouchableHighlight
					style={styles.buttonAdd}
					underlayColor="tomato"
					onPress={onPressAdd}
				>
					<Image
						source={require("../assets/plus.png")}
						style={{ width: 35, height: 35 }}
					/>
				</TouchableHighlight>
			</View>
			<FlatList
				data={lists}
				renderItem={({ item, index }) => {
					return (
						<FlatListItem
							key={index}
							item={item}
							index={index}
							refreshFlatList={refreshFlatList}
						/>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	itemName: {
		color: "white",
		padding: 10,
		fontSize: 16,
	},
	images: {
		width: 100,
		height: 100,
		margin: 5,
	},
	container__addItem: {
		backgroundColor: "tomato",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		height: 64,
	},
	buttonAdd: {
		marginRight: 10,
	},
});

export default BasicFlatList;
