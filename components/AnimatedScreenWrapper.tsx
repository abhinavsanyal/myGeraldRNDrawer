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
    const scale = interpolate(progress.value, [0, 1], [1, 0.89]);
    const rotate = interpolate(progress.value, [0, 1], [0, -10]);
    const translateY = interpolate(progress.value, [0, 1], [0, 50]);
    const translateX = interpolate(progress.value, [0, 1], [0, 30]);
    const borderRadius = interpolate(progress.value, [0, 1], [0, 30]);
  
    return {
      transform: [
        { scale }, 
        { translateX }, 
        { rotateZ: `${rotate}deg` },
        { translateY }
      ],
      borderRadius,
      overflow: "visible",
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
    overflow: "visible", // Prevents content from spilling out
  },
});
