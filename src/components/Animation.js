import React, { useRef } from "react";
import {
	View,
	StyleSheet,
	TouchableHighlight,
	Text,
	Animated,
	Easing,
	Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const Animation = () => {
	const fadeValue = useRef(new Animated.Value(0)).current;
	const xValue = useRef(new Animated.Value(0)).current;
	const springValue = useRef(new Animated.Value(0.5)).current;
	const rotateValue = useRef(new Animated.Value(0)).current;

	const interpolatedRotateAnimation = rotateValue.interpolate({
		inputRange: [0, 100],
		outputRange: ["0deg", "360deg"],
	});

	const fadeAnimation = () => {
		Animated.timing(fadeValue, {
			toValue: 1,
			duration: 2000,
		}).start();
	};

	const moveAnimation = () => {
		Animated.timing(xValue, {
			toValue: width - 100,
			duration: 1000,
			easing: Easing.back(),
		}).start(() => {
			Animated.timing(xValue, {
				toValue: 0,
				duration: 1000,
				easing: Easing.linear,
			}).start(() => {
				moveAnimation();
			});
		});
	};

	const springAnimation = () => {
		Animated.timing(springValue, {
			toValue: 1.5,
			friction: 1,
		}).start(() => {
			Animated.timing(springValue, {
				toValue: 0.5,
				friction: 1,
			}).start();
		});
	};

	const rotateAnimation = () => {
		Animated.sequence([
			Animated.timing(rotateValue, {
				toValue: 100,
				duration: 1000,
				easing: Easing.linear,
			}),
			Animated.timing(rotateValue, {
				toValue: 0,
				duration: 0,
			}),
		]).start(() => {
			rotateAnimation();
		});
	};

	// Kết hợp giữa chuyển động và quay
	const moveAndRotateAnimation = () => {
		Animated.parallel([moveAnimation(), rotateAnimation()]).start();
	};

	return (
		<View style={styles.container}>
			<Animated.Image
				source={require("../assets/logo.png")}
				style={[
					styles.animationView,
					// { opacity: fadeValue },
					{ left: xValue },
					// { transform: [{ scale: springValue }], alignSelf: "center" },
					{ transform: [{ rotate: interpolatedRotateAnimation }] },
				]}
			/>
			<TouchableHighlight
				style={styles.button}
				onPress={moveAndRotateAnimation}
			>
				<Text style={styles.text}>Animated</Text>
			</TouchableHighlight>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		// alignItems: "center",
	},
	animationView: {
		width: 100,
		height: 100,
		backgroundColor: "transparent",
	},
	button: {
		backgroundColor: "steelblue",
		height: 45,
		marginTop: 20,
		alignSelf: "center",
	},
	text: {
		color: "white",
		padding: 12,
		paddingHorizontal: 20,
		fontWeight: "bold",
		fontSize: 18,
	},
});

export default Animation;
