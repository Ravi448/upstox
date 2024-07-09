import {ActivityIndicator} from 'react-native';
import React from 'react';
import Body from '../Views/Body';
import {useAppTheme} from '@app/Themes';
import TxText from '../Typography/TxText';

type Props = {
  visible: boolean;
};

const FullScreenLoader = (props: Props) => {
  const {colors} = useAppTheme();

  if (!props.visible) return null;

  return (
    <Body flexed justify="center" alignItem="center">
      <ActivityIndicator color={colors.primary} size="large" />
      <TxText>Please wait...</TxText>
    </Body>
  );
};

export default FullScreenLoader;
