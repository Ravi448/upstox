// UI of holding listing
import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import SectionView from '@app/Components/Views/SectionView';
import {fetchHoldings} from '@app/Network/services/holding.service';
import {IHoldings, IHoldingsData, IUserHolding} from '@app/Utils/holding.types';
import {APIResponse} from '@app/Network/core/responseParser';
import TxText from '@app/Components/Typography/TxText';

type Props = {};

const UserHoldings = (props: Props) => {
  const [holdings, setHoldings] = useState<Array<IHoldings>>();

  useEffect(() => {
    fetchUserHoldings();
  }, []);

  const fetchUserHoldings = async () => {
    const response: APIResponse<IUserHolding> = await fetchHoldings();
    const res: IUserHolding = response.data as IUserHolding;
    console.log(res.userHolding);
    setHoldings(res.userHolding);
  };

  return (
    <SectionView>
      <FlatList
        data={holdings}
        renderItem={({item}) => <TxText>{item.symbol}</TxText>}
        keyExtractor={item => item.symbol}
      />
    </SectionView>
  );
};

export default UserHoldings;
