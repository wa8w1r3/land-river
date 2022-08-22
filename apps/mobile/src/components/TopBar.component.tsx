import React from 'react';
import {Image, Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {OWNER} from '../Types';

const TopBar = () => {
  const tw = useTailwind();

  return (
    <View style={tw('px-4 py-2 bg-primary-dark flex flex-row')}>
      <Image
        style={tw('w-full h-8')}
        source={require('../assets/logo-full-white.png')}
        resizeMode="contain"
      />

      <View style={tw('flex-row items-center ml-auto')}>
        <Text style={tw('font-medium text-white')}>{OWNER}</Text>
        <View style={tw('py-1 px-2 rounded-full bg-white ml-2')}>
          <Text style={tw('font-bold text-primary ')}>{OWNER.slice(0, 1)}</Text>
        </View>
      </View>
    </View>
  );
};

export default TopBar;
