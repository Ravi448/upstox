import type { FlexStyle, StyleProp, ViewProps, ViewStyle } from "react-native"
import { DefaultTheme } from "@app/Themes/default"
import { AnimatedProps } from "react-native-reanimated"

type Gap = {
  gap?: FlexStyle["gap"]
  rowGap?: FlexStyle["rowGap"]
  columnGap?: FlexStyle["columnGap"]
}

type Spacing = {
  vertical?: number | string
  horizontal?: number | string
  top?: number | string
  bottom?: number | string
  start?: number | string
  end?: number | string
  all?: number | string
}

type Padding = {
  vertical?: number | string
  horizontal?: number | string
  top?: number | string
  bottom?: number | string
  start?: number | string
  end?: number | string
  all?: number | string
}

export interface BodyProps extends ViewProps {
  style?: StyleProp<ViewStyle>
  bgColor?: keyof typeof DefaultTheme.colors
  spacing?: Spacing
  padding?: Padding
  safeArea?: boolean
  flexed?: boolean
  flex?: number
  justify?: FlexStyle["justifyContent"]
  alignItem?: FlexStyle["alignItems"]
}

export interface SectionViewProps extends AnimatedProps<ViewProps> {
  style?: StyleProp<ViewStyle>
  bgColor?: keyof typeof DefaultTheme.colors
  spacing?: Spacing
  padding?: Padding
  flexed?: boolean
  flex?: number
  justify?: FlexStyle["justifyContent"]
  alignItem?: FlexStyle["alignItems"]
  direction?: FlexStyle["flexDirection"]
  gap?: Gap
}
