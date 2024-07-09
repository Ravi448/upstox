// Define app theme
import { MD3LightTheme } from "react-native-paper"

export const DefaultTheme = {
  ...MD3LightTheme,
  myOwnProperty: true,
  roundness: 1,
  animation: {
    scale: 1.5
  },
  colors: {
    primary: "rgb(102, 35, 255)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(231, 222, 255)",
    onPrimaryContainer: "rgb(31, 0, 96)",
    secondary: "rgb(54, 67, 243)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(224, 224, 255)",
    onSecondaryContainer: "rgb(0, 4, 106)",
    tertiary: "rgb(121, 89, 0)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(255, 223, 160)",
    onTertiaryContainer: "rgb(38, 26, 0)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(255, 251, 255)",
    onBackground: "rgb(28, 27, 30)",
    surface: "rgb(255, 251, 255)",
    onSurface: "rgb(28, 27, 30)",
    surfaceVariant: "rgb(230, 224, 236)",
    onSurfaceVariant: "rgb(72, 69, 78)",
    outline: "rgb(121, 117, 127)",
    outlineVariant: "rgb(202, 196, 207)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(49, 48, 51)",
    inverseOnSurface: "rgb(244, 239, 244)",
    inversePrimary: "rgb(204, 189, 255)",
    elevation: {
      level0: "transparent",
      level1: "rgb(247, 240, 255)",
      level2: "rgb(243, 234, 255)",
      level3: "rgb(238, 227, 255)",
      level4: "rgb(237, 225, 255)",
      level5: "rgb(234, 221, 255)"
    },
    surfaceDisabled: "rgba(28, 27, 30, 0.12)",
    onSurfaceDisabled: "rgba(28, 27, 30, 0.38)",
    backdrop: "rgba(50, 47, 56, 0.4)",
    text: "#232323"
  },
  fonts: {
    regular: {
      fontFamily: "Lato-Regular",
      fontWeight: "normal" as "normal"
    },
    medium: {
      fontFamily: "Lato-Bold",
      fontWeight: "normal" as "normal"
    },
    light: {
      fontFamily: "Lato-Light",
      fontWeight: "normal" as "normal"
    },
    thin: {
      fontFamily: "Lato-Light",
      fontWeight: "normal" as "normal"
    },
    labelLarge: {
      fontFamily: "Lato-Regular",
      fontWeight: "normal" as "normal"
    },
    labelMedium: {
      fontFamily: "Lato-Bold",
      fontWeight: "normal" as "normal"
    }
  }
}
