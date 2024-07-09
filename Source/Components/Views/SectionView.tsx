import React from "react"
import { DimensionValue } from "react-native"
import { useAppTheme } from "@app/Themes"
import { SectionViewProps } from "./definitions"
import { DefaultTheme } from "@app/Themes/default"
import Animated, { BaseAnimationBuilder } from "react-native-reanimated"

const SectionView = (props: SectionViewProps) => {
  const { colors } = useAppTheme()

  return (
    <Animated.View
      style={[
        {
          ...(props.spacing?.top && { marginTop: props.spacing.top as DimensionValue }),
          ...(props.spacing?.bottom && { marginBottom: props.spacing.bottom as DimensionValue }),
          ...(props.spacing?.start && { marginStart: props.spacing.start as DimensionValue }),
          ...(props.spacing?.end && { marginEnd: props.spacing.end as DimensionValue }),
          ...(props.spacing?.vertical && {
            marginVertical: props.spacing.vertical as DimensionValue
          }),
          ...(props.spacing?.horizontal && {
            marginHorizontal: props.spacing.horizontal as DimensionValue
          }),
          ...(props.padding?.top && { paddingTop: props.padding.top as DimensionValue }),
          ...(props.padding?.bottom && { paddingBottom: props.padding.bottom as DimensionValue }),
          ...(props.padding?.start && { paddingStart: props.padding.start as DimensionValue }),
          ...(props.padding?.end && { paddingEnd: props.padding.end as DimensionValue }),
          ...(props.padding?.vertical && {
            paddingVertical: props.padding.vertical as DimensionValue
          }),
          ...(props.padding?.horizontal && {
            paddingHorizontal: props.padding.horizontal as DimensionValue
          }),
          ...(props.flexed && { flex: props.flex || 1 }),
          ...(props.justify && { justifyContent: props.justify }),
          ...(props.alignItem && { alignItems: props.alignItem }),
          backgroundColor: (colors[props.bgColor as keyof typeof DefaultTheme.colors] ||
            colors.background) as string,
          ...(props.direction && { flexDirection: props.direction })
        },
        props.style
      ]}
      {...(props.entering && { entering: props.entering as BaseAnimationBuilder })}
      {...(props.exiting && { entering: props.exiting as BaseAnimationBuilder })}
      {...(props.layout && { entering: props.layout as BaseAnimationBuilder })}
      testID={Math.floor(Math.random() * 1000).toString()}>
      {props.children}
    </Animated.View>
  )
}

export default SectionView
