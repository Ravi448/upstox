// App Logo
import React from 'react';
import SectionView from './SectionView';
import {FadeIn, Easing} from 'react-native-reanimated';
import TxText from '../Typography/TxText';

const Logo = () => {
  return (
    <SectionView
      justify="center"
      alignItem="center"
      entering={FadeIn.easing(Easing.ease).duration(1000)}>
      <TxText
        variant="h1"
        mode="semiBold"
        color="primary"
        spacing={{bottom: 5}}>
        Upstox
      </TxText>
      <TxText variant="h4" color="secondary" mode="semiBold">
        Invest Right, Invest Now.
      </TxText>
    </SectionView>
  );
};

export default Logo;
