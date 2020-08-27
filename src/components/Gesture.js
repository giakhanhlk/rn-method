import React, { useRef } from "react";
import { Animated, PanResponder, View, StyleSheet } from "react-native";

const Gesture = () => {
	const pan = useRef(new Animated.ValueXY()).current;
	const scale = useRef(new Animated.Value(1)).current;

	const panResponder = PanResponder.create({
		onStartShouldSetPanResponder: () => true,

		onPanResponderGrant: (evt, gestureState) => {
			Animated.spring(scale, {
				toValue: 1.3,
				friction: 3,
			}).start();
		},
		onPanResponderMove: Animated.event([
			// khi tay đang di chuyển
			null, // những giá trị evt ban đầu lờ đi
			{
				dx: pan.x,
				dy: pan.y,
			},
		]),
		onPanResponderRelease: () => {
			Animated.spring(scale, { toValue: 1, friction: 3 }).start();
			Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
		},
	});

	return (
		<View style={styles.container}>
			<Animated.View
				{...panResponder.panHandlers}
				style={[
					pan.getLayout(),
					styles.box,
					{
						transform: [{ scale: scale }],
					},
				]}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	box: {
		backgroundColor: "#61dafb",
		width: 80,
		height: 80,
		borderRadius: 4,
	},
});

export default Gesture;
