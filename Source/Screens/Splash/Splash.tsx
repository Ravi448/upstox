import React, {useEffect} from 'react';
import Logo from '@app/Components/Views/Logo';
import Body from '@app/Components/Views/Body';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootParam = {
  Splash?: any;
};

type Props = NativeStackScreenProps<RootParam, 'Splash'>;

const Splash = (props: Props) => {
  useEffect(() => {
    setTimeout(navigateToHoldings, 2000);
  }, []);

  const navigateToHoldings = (): void => {
    props.navigation.reset({
      index: 0,
      routes: [{name: 'UserHoldings' as never}],
    });
  };

  return (
    <Body flexed justify="center" alignItem="center">
      <Logo />
    </Body>
  );
};

export default Splash;
