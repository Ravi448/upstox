// UI of holding listing
import {FlatList, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchHoldings} from '@app/Network/services/holding.service';
import {IHoldings, IUserHolding} from '@app/Utils/holding.types';
import {APIResponse} from '@app/Network/core/responseParser';
import TxText from '@app/Components/Typography/TxText';
import HoldingCard from '@app/Components/Cards/HoldingCard';
import Body from '@app/Components/Views/Body';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAppTheme} from '@app/Themes';
import BottomSheet from '@app/Components/Views/BottomSheet';

type RootParam = {
  UserHoldings?: any;
};

type Props = NativeStackScreenProps<RootParam, 'UserHoldings'>;

const UserHoldings = (props: Props) => {
  const [holdings, setHoldings] = useState<Array<IHoldings>>();
  const {colors} = useAppTheme();

  useEffect(() => {
    fetchUserHoldings();
    props.navigation.setOptions({
      headerTitle: 'My Holdings',
      headerTitleStyle: {
        color: colors.background,
      },
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerLeft: () => (
        <Image
          source={require('@app/Resources/Images/minilogo.jpeg')}
          resizeMode="contain"
          style={{height: 40, width: 40}}
        />
      ),
    });
  }, []);

  const fetchUserHoldings = async () => {
    const response: APIResponse<IUserHolding> = await fetchHoldings();
    const res: IUserHolding = response.data as IUserHolding;
    setHoldings(res.userHolding);
  };

  return (
    <Body flexed>
      <FlatList
        data={holdings}
        renderItem={({item}) => <HoldingCard data={item} />}
        keyExtractor={item => item.symbol}
        contentContainerStyle={styles.listContainer}
      />
      <BottomSheet />
    </Body>
  );
};

export default UserHoldings;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
});
