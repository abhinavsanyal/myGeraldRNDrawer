import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { DrawerParamList } from "../navigation/DrawerNavigator";

type Props = PropsWithChildren<DrawerScreenProps<DrawerParamList, "Tabs">>;

const AnimatedScreenWrapper: React.FC<Props> = ({ children }) => {
  const progress = useDrawerProgress() as Animated.SharedValue<number>;

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.9]);
    const translateX = interpolate(progress.value, [0, 1], [0, 50]);
    const translateY = interpolate(progress.value, [0, 1], [0, 50]);
    const rotateZ = interpolate(progress.value, [0, 1], [0, -10]);

    return {
      transform: [
        { scale },
        { translateX },
        { translateY },
        { rotateZ: `${rotateZ}deg` },
      ],
      borderTopLeftRadius: 50,
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
    backgroundColor: "#201c3e", 
    overflow: "hidden", 
  },
  container: {
    flex: 1,
    backgroundColor: "#fff", 
    overflow: "hidden",
  },
});
