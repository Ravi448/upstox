// App Logo
import React from 'react';
import SectionView from './SectionView';
import {FadeIn, Easing} from 'react-native-reanimated';
import {Image} from 'react-native';

const Logo = () => {
  return (
    <SectionView
      justify="center"
      alignItem="center"
      entering={FadeIn.easing(Easing.ease).duration(1000)}>
      <Image
        source={require('@app/Resources/Images/logo.png')}
        resizeMode="center"
      />
    </SectionView>
  );
};

export default Logo;
