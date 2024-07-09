import React, {useEffect} from 'react';
import Logo from '@app/Components/Views/Logo';
import SectionView from '@app/Components/Views/SectionView';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const {reset} = useNavigation();

  useEffect(() => {
    setTimeout(navigateToHoldings, 2000);
  }, []);

  const navigateToHoldings = (): void => {
    reset({
      index: 0,
      routes: [{name: 'Holding' as never}],
    });
  };

  return (
    <SectionView flexed justify="center" alignItem="center">
      <Logo />
    </SectionView>
  );
};

export default Splash;
