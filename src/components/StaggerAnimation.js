import React, { useState, useEffect } from "react";
import { Animated, StyleSheet, View } from "react-native";

const StaggerAnimation = () => {
	const animatedValues = [];

	for (let i = 0; i < 1000; i++) {
		animatedValues.push(new Animated.Value(0));
	}

	useEffect(() => {
		staggerAnimate();
	});

	const staggerAnimate = () => {
		const animations = animatedValues.map((animateValue) => {
			return Animated.timing(animateValue, {
				toValue: 1,
				duration: 3000,
			});
		});
		Animated.stagger(10, animations).start();
	};

	const animatedViews = animatedValues.map((animatedValue, index) => {
		return (
			<Animated.View
				key={index}
				style={[
					styles.animatedView,
					{
						opacity: animatedValue,
					},
				]}
			/>
		);
	});

	return <View style={styles.container}>{animatedViews}</View>;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
	},
	animatedView: {
		height: 20,
		width: 20,
		backgroundColor: "steelblue",
		margin: 1,
	},
});

export default StaggerAnimation;
