import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {Asset, AssetStatus} from '../Types';
import Status from './Status.component';

interface Props {
  asset: Asset;
}

const AssetCard: FC<Props> = ({asset}) => {
  const tw = useTailwind();

  return (
    <View>
      <View style={tw('flex-row justify-between items-center my-1')}>
        <Text style={tw('font-medium')}>ID: {asset.id}</Text>
        <Text>
          <Status status={asset.status as AssetStatus} />{' '}
        </Text>
      </View>
      <Text style={tw('mb-1')}>Location: {asset.location}</Text>
      <Text style={tw('mb-1')}>Size: {asset.size} m2</Text>
    </View>
  );
};

export default AssetCard;
