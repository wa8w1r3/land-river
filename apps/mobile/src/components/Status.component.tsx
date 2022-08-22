import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {AssetStatus} from '../Types';

interface Props {
  status: AssetStatus;
}

const Status: FC<Props> = ({status}) => {
  const tw = useTailwind();

  switch (status) {
    case AssetStatus.OWNED:
      return (
        <View style={tw('bg-primary rounded-xl py-1 px-3')}>
          <Text style={tw(' font-semibold text-center text-sm text-white')}>
            Owned
          </Text>
        </View>
      );
    case AssetStatus.REGISTERED:
      return (
        <View style={tw('bg-slate-500 rounded-xl py-1 px-3')}>
          <Text style={tw('font-semibold text-center text-sm text-white')}>
            Registered
          </Text>
        </View>
      );
    case AssetStatus.TRANSFER_PENDING:
      return (
        <View style={tw('bg-amber-500 rounded-xl py-1 px-3')}>
          <Text style={tw('font-semibold text-center text-sm text-white')}>
            Transfer Pending
          </Text>
        </View>
      );
    default:
      return (
        <View style={tw('bg-red-500 rounded-xl py-1 px-3')}>
          <Text style={tw('font-semibold text-center text-sm text-white')}>
            Locked
          </Text>
        </View>
      );
  }
};

export default Status;
