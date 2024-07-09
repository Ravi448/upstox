// UI of holding listing
import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import SectionView from '@app/Components/Views/SectionView';
import {fetchHoldings} from '@app/Network/services/holding.service';
import {IHoldings, IHoldingsData, IUserHolding} from '@app/Utils/holding.types';
import {APIResponse} from '@app/Network/core/responseParser';
import TxText from '@app/Components/Typography/TxText';
import HoldingCard from '@app/Components/Cards/HoldingCard';

type Props = {};

const UserHoldings = (props: Props) => {
  const [holdings, setHoldings] = useState<Array<IHoldings>>();

  useEffect(() => {
    fetchUserHoldings();
  }, []);

  const fetchUserHoldings = async () => {
    const response: APIResponse<IUserHolding> = await fetchHoldings();
    const res: IUserHolding = response.data as IUserHolding;
    setHoldings(res.userHolding);
  };

  return (
    <SectionView>
      <FlatList
        data={holdings}
        renderItem={({item}) => <HoldingCard data={item} />}
        keyExtractor={item => item.symbol}
        contentContainerStyle={styles.listContainer}
      />
    </SectionView>
  );
};

export default UserHoldings;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 50
  },
});
