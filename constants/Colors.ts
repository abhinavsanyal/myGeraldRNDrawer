/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    backgroundContainer: '#403372',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    activeMenuItemText: '#FF453A',
    activeMenuItem :'rgba(255, 69, 58, 0.15)',

  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    backgroundContainer: '#201c3e',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    activeMenuItemText: '#FF453A',
    activeMenuItem :'rgba(255, 69, 58, 0.15)',
  },
};
