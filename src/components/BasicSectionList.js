import React from "react";
import { View, StyleSheet, SectionList, Text } from "react-native";
import { sectionListData } from "../constants/sectionData";

const SectionListItem = ({ item, index }) => {
	return (
		<View style={styles.itemContainer}>
			<Text style={styles.itemContainer__name}>{item.name}</Text>
			<Text style={styles.itemContainer__description}>{item.description}</Text>
		</View>
	);
};

const SectionHeader = ({ section }) => {
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.headerContainer__title}>{section.title}</Text>
		</View>
	);
};

const BasicSectionList = () => {
	return (
		<View style={styles.container}>
			<SectionList
				renderItem={({ item, index }) => {
					return <SectionListItem item={item} index={index} />;
				}}
				renderSectionHeader={({ section }) => {
					return <SectionHeader section={section} />;
				}}
				sections={sectionListData}
				keyExtractor={(item, index) => index}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	itemContainer: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "rgb(98, 197, 184)",
	},
	itemContainer__name: {
		fontSize: 16,
		fontWeight: "bold",
		color: "rgb(173, 252, 250)",
		marginLeft: 20,
		marginRight: 10,
	},
	itemContainer__description: {
		fontSize: 16,
		marginLeft: 20,
		marginRight: 10,
		color: "rgb(173, 252, 250)",
	},
	headerContainer: {
		flex: 1,
		backgroundColor: "rgb(77, 120, 140)",
	},
	headerContainer__title: {
		fontSize: 26,
		fontWeight: "bold",
		color: "white",
		margin: 20,
	},
});

export default BasicSectionList;
