import {StyleSheet} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import BottomSheetWrapper, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import SectionView from './SectionView';
import TxText from '../Typography/TxText';
import {IHoldings} from '@app/Utils/holding.types';
import {IntlFormatter, portfolioCalculator} from '@app/Utils/stockCalulator';

type Props = {
  allStocks: Array<IHoldings>;
};

const BottomSheet = (props: Props) => {
  const portfolio = portfolioCalculator(props.allStocks);

  const bottomSheetRef = useRef<BottomSheetWrapper>(null);

  const snapPoints = useMemo(() => [100, '25%', '35%'], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={2}
        pressBehavior="collapse"
      />
    ),
    [],
  );

  return (
    <BottomSheetWrapper
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}>
      <BottomSheetView style={styles.contentContainer}>
        <SectionView direction="row" justify="space-between" alignItem="center">
          <TxText mode="bold" variant="title">
            Current Value
          </TxText>
          <TxText mode="semiBold">
            {IntlFormatter.format(portfolio.currentValue)}
          </TxText>
        </SectionView>

        <SectionView
          direction="row"
          justify="space-between"
          alignItem="center"
          spacing={{vertical: 12}}>
          <TxText mode="bold" variant="title">
            Total Investment
          </TxText>
          <TxText mode="semiBold">
            {IntlFormatter.format(portfolio.totalInvestment)}
          </TxText>
        </SectionView>

        <SectionView direction="row" justify="space-between" alignItem="center">
          <TxText mode="bold" variant="title">
            Today's Profit & Loss
          </TxText>
          <TxText
            color={portfolio.daysPL < 0 ? 'error' : 'success'}
            mode="semiBold">
            {IntlFormatter.format(portfolio.daysPL)}
          </TxText>
        </SectionView>

        <SectionView
          direction="row"
          justify="space-between"
          alignItem="center"
          spacing={{top: 24}}>
          <TxText mode="bold" variant="subHeading">
            Profit & Loss
          </TxText>
          <TxText
            color={portfolio.lifetimePL < 0 ? 'error' : 'success'}
            mode="semiBold">
            {IntlFormatter.format(portfolio.lifetimePL)}
          </TxText>
        </SectionView>
      </BottomSheetView>
    </BottomSheetWrapper>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
