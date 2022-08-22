import React, {FC} from 'react';
import {ActivityIndicator, Button, Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {Asset} from '../Types';

interface Props {
  asset: Asset;
  loading?: boolean;
  onClick(id: string): void;
}

const RequestCard: FC<Props> = ({asset, loading, onClick}) => {
  const tw = useTailwind();

  return (
    <View style={tw('flex-row justify-between items-center')}>
      <View>
        <Text style={tw('font-medium my-1')}>ID: {asset.id}</Text>
        <Text style={tw('mb-1')}>Location: {asset.location}</Text>
        <Text style={tw('mb-1')}>Size: {asset.size} m2</Text>
      </View>

      <View>
        {!loading ? (
          <Button title="Accept and Sign" onPress={() => onClick(asset.id)} />
        ) : (
          <ActivityIndicator size="small" color="#106B6B" style={tw('w-20')} />
        )}
      </View>
    </View>
  );
};

export default RequestCard;
