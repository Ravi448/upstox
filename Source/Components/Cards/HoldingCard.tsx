import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IHoldings} from '@app/Utils/holding.types';
import SectionView from '../Views/SectionView';
import TxText from '../Typography/TxText';
import {Divider} from 'react-native-paper';
import {AppConstants} from '@app/Constants/AppContants';

type Props = {
  data: IHoldings;
};

const HoldingCard = (props: Props) => {
  return (
    <>
      <Pressable style={styles.cardWrapper}>
        {/* Row 1 */}
        <SectionView
          direction="row"
          justify="space-between"
          spacing={{bottom: 10}}>
          <TxText variant="title" mode="semiBold">
            {props.data.symbol}
          </TxText>
          <TxText>
            LTP:{' '}
            <TxText mode="semiBold">
              {AppConstants.currency}
              {props.data.ltp}
            </TxText>
          </TxText>
        </SectionView>

        {/* Row 2 */}
        <SectionView direction="row" justify="space-between">
          <TxText>{props.data.quantity}</TxText>
          <TxText>
            P/L:{' '}
            <TxText mode="semiBold">
              {AppConstants.currency}
              {props.data.close}
            </TxText>
          </TxText>
        </SectionView>
      </Pressable>
      <Divider />
    </>
  );
};

export default HoldingCard;

const styles = StyleSheet.create({
  cardWrapper: {
    paddingVertical: 12,
  },
});
