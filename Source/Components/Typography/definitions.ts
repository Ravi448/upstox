import type { StyleProp, TextProps, TextStyle } from "react-native"
import { DefaultTheme } from "@app/Themes/default"
import { AnimatedProps } from "react-native-reanimated"

export enum TextSizes {
  subHeading = 18,
  title = 17,
  body = 16,
  subTitle = 15,
  small = 14,
  mini = 12,
  micro = 10,
  h1 = 36,
  h2 = 30,
  h3 = 26,
  h4 = 24,
  h5 = 22,
  h6 = 20
}

export enum Fonts {
  bold = "Inter-Bold",
  regular = "Inter-Regular",
  light = "Inter-Light",
  medium = "Inter-Medium",
  semiBold = "Inter-SemiBold"
}

type TextAlign = "auto" | "center"

type Spacing = {
  vertical?: number | string
  horizontal?: number | string
  top?: number | string
  bottom?: number | string
  start?: number | string
  end?: number | string
}

export interface TxTextProps extends AnimatedProps<TextProps> {
  variant?: keyof typeof TextSizes
  style?: StyleProp<TextStyle>
  muted?: boolean
  mode?: keyof typeof Fonts
  color?: keyof typeof DefaultTheme.colors
  align?: TextAlign
  spacing?: Spacing
}