import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IHoldings} from '@app/Utils/holding.types';
import SectionView from '../Views/SectionView';
import TxText from '../Typography/TxText';
import {Divider} from 'react-native-paper';
import {AppConstants} from '@app/Constants/AppContants';
import {calculatePL, IntlFormatter} from '@app/Utils/stockCalulator';

type Props = {
  data: IHoldings;
};

const HoldingCard = (props: Props) => {
  const PnL = calculatePL(props.data);

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
          <TxText variant="small">
            LTP:{' '}
            <TxText mode="medium" variant="subTitle">
              {IntlFormatter.format(props.data.ltp)}
            </TxText>
          </TxText>
        </SectionView>

        {/* Row 2 */}
        <SectionView direction="row" justify="space-between">
          <TxText variant='subTitle'>{props.data.quantity}</TxText>
          <TxText variant="small">
            P/L:{' '}
            <TxText
              mode="medium"
              variant="subTitle"
              color={PnL < 0 ? 'error' : 'success'}>
              {IntlFormatter.format(PnL)}
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
    paddingVertical: 14,
  },
});
