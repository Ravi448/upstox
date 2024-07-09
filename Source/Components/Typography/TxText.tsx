import React from "react"
import { DimensionValue } from "react-native"
import { useAppTheme } from "@app/Themes"
import { DefaultTheme } from "@app/Themes/default"
import { Fonts, TextSizes, TxTextProps } from "./definitions"
import Animated from "react-native-reanimated"

const TxText = (props: TxTextProps) => {
  const Component = Animated.Text
  const { colors } = useAppTheme()

  return (
    <Component
      style={[
        {
          fontFamily: Fonts[props.mode as keyof typeof Fonts] || Fonts.regular,
          fontSize: TextSizes[props.variant as keyof typeof TextSizes] || TextSizes.body,
          color: props.muted
            ? (colors.inverseSurface as string)
            : ((colors[props.color as keyof typeof DefaultTheme.colors] || colors.text) as string),
          textAlign: props.align || "auto",
          ...(props.spacing?.horizontal && {
            marginHorizontal: props.spacing.horizontal as DimensionValue
          }),
          ...(props.spacing?.vertical && {
            marginVertical: props.spacing.vertical as DimensionValue
          }),
          ...(props.spacing?.top && { marginTop: props.spacing.top as DimensionValue }),
          ...(props.spacing?.bottom && { marginBottom: props.spacing.bottom as DimensionValue }),
          ...(props.spacing?.start && { marginStart: props.spacing.start as DimensionValue }),
          ...(props.spacing?.end && { marginEnd: props.spacing.end as DimensionValue }),
          ...(props.spacing?.end && { marginVertical: props.spacing.vertical as DimensionValue }),
          ...(props.spacing?.end && {
            marginHorizontal: props.spacing.horizontal as DimensionValue
          })
        },
        props.style
      ]}
      testID={Math.floor(Math.random() * 1000).toString()}>
      {props.children}
    </Component>
  )
}

export default TxText
