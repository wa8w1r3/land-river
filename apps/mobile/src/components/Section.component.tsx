import React, {FC, PropsWithChildren} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useTailwind} from 'tailwind-rn/dist';

const Section: FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const tw = useTailwind();

  return (
    <View style={tw('m-4')}>
      <Text
        style={[
          tw('text-xl font-bold mb-2'),
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <View style={[tw('rounded-md bg-white p-4'), styles.shadow]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});

export default Section;
