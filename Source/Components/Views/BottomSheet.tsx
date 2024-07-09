import {StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import BottomSheetWrapper, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import SectionView from './SectionView';
import TxText from '../Typography/TxText';

type Props = {};

const BottomSheet = (props: Props) => {
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
          <TxText mode="bold">Current Value</TxText>
          <TxText>Current Value</TxText>
        </SectionView>

        <SectionView
          direction="row"
          justify="space-between"
          alignItem="center"
          spacing={{vertical: 12}}>
          <TxText mode="bold">Total Investment</TxText>
          <TxText>Current Value</TxText>
        </SectionView>

        <SectionView direction="row" justify="space-between" alignItem="center">
          <TxText mode="bold">Today's Profit & Loss</TxText>
          <TxText>Current Value</TxText>
        </SectionView>

        <SectionView
          direction="row"
          justify="space-between"
          alignItem="center"
          spacing={{top: 24}}>
          <TxText mode="bold" variant="subHeading">
            Profit & Loss
          </TxText>
          <TxText>Current Value</TxText>
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
