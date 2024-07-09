import React from "react"
import { DimensionValue, SafeAreaView, StatusBar, View } from "react-native"
import { useAppTheme } from "@app/Themes"
import { BodyProps } from "./definitions"
import { DefaultTheme } from "@app/Themes/default"

const Body = (props: BodyProps) => {
  const { colors } = useAppTheme()
  const backgroundColor = (colors[props.bgColor as keyof typeof DefaultTheme.colors] ||
    colors.background) as string

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
      {props.safeArea && <SafeAreaView />}
      <View
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
            ...(props.spacing?.all && {
              margin: props.spacing.all as DimensionValue
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
            ...(props.padding?.all && {
              padding: props.padding.all as DimensionValue
            }),
            ...(props.flexed && { flex: props.flex || 1 }),
            ...(props.justify && { justifyContent: props.justify }),
            ...(props.alignItem && { alignItems: props.alignItem }),
            backgroundColor: backgroundColor
          },
          props.style
        ]}
        testID={Math.floor(Math.random() * 1000).toString()}>
        {props.children}
      </View>
    </>
  )
}

export default Body
