// // components/AnimatedScreenWrapper.tsx
// import React, { PropsWithChildren } from "react";
// import { StyleSheet } from "react-native";
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   interpolate,
// } from "react-native-reanimated";
// import { useDrawerProgress } from "@react-navigation/drawer";
// import { DrawerScreenProps } from "@react-navigation/drawer";
// import { DrawerParamList } from "../navigation/DrawerNavigator";

// type Props = PropsWithChildren<DrawerScreenProps<DrawerParamList, "Tabs">>;

// const AnimatedScreenWrapper: React.FC<Props> = ({ children, ...props }) => {
//   // The drawer progress is a shared value from 0 (closed) to 1 (fully open).
//   const progress = useDrawerProgress() as Animated.SharedValue<number>;

//   // Use an animated style that transforms based on 'progress'.
//   const animatedStyle = useAnimatedStyle(() => {
//     const scale = interpolate(progress.value, [0, 1], [1, 0.85]);
//     const rotate = interpolate(progress.value, [0, 1], [0, -10]); // deg

//     return {
//       transform: [{ scale }, { rotateZ: `${rotate}deg` }],
//       borderRadius: progress.value * 20,
//     };
//   });

//   return (
//     <Animated.View style={[styles.container, animatedStyle]}>
//       {children}
//     </Animated.View>
//   );
// };

// export default AnimatedScreenWrapper;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     overflow: "hidden", // helps with rounding corners
//     backgroundColor: "#fff",
//   },
// });
import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  interpolate,
} from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { DrawerParamList } from "../navigation/DrawerNavigator";

type Props = PropsWithChildren<DrawerScreenProps<DrawerParamList, "Tabs">>;

const AnimatedScreenWrapper: React.FC<Props> = ({ children }) => {
  const progress = useDrawerProgress() as Animated.SharedValue<number>;

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.85]);
    const translateX = interpolate(progress.value, [0, 1], [0, 250]); // Moves right
    const borderRadius = interpolate(progress.value, [0, 1], [0, 30]); // Smooth rounding

    return {
      transform: [{ scale }, { translateX }],
      borderRadius,
      overflow: "hidden",
    };
  });

  return (
    <View style={styles.backgroundContainer}>
      <Animated.View style={[styles.container, animatedStyle]}>
        {children}
      </Animated.View>
    </View>
  );
};

export default AnimatedScreenWrapper;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#241c2b", // Ensures purple background behind animation
  },
  container: {
    flex: 1,
    backgroundColor: "#fff", // Foreground screen
    overflow: "hidden", // Prevents content from spilling out
  },
});
