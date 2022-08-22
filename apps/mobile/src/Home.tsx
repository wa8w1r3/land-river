import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  ListRenderItem,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useTailwind} from 'tailwind-rn/dist';
import {AssetCard, RequestCard, Section, TopBar} from './components';
import {acceptAsset, getAssets} from './repos';
import {Asset, AssetStatus, OWNER} from './Types';

const Home = () => {
  const tw = useTailwind();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [assets, setAssets] = useState<Asset[]>();
  const [requests, setRequests] = useState<Asset[]>();

  const fetchData = useCallback(async () => {
    setRefresh(true);

    try {
      const data = await getAssets(OWNER);

      const ownedAssets = data.filter(d => d.status === AssetStatus.OWNED);
      setAssets(ownedAssets);

      const pendingRequest = data.filter(
        d => d.status === AssetStatus.TRANSFER_PENDING,
      );
      setRequests(pendingRequest);

      setRefresh(false);
    } catch (error) {
      const err = await error;
      Alert.alert('Oops!', (err as Error).message);

      setRefresh(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSign = useCallback(
    async (id: string) => {
      setLoading(true);

      try {
        await acceptAsset(id);

        setTimeout(() => {
          fetchData();
          setLoading(false);
        }, 2000);
      } catch (error) {
        const err = await error;
        Alert.alert('Oops!', (err as Error).message);

        setLoading(false);
      }
    },
    [fetchData],
  );

  const renderAsset: ListRenderItem<Asset> = ({item}) => (
    <AssetCard asset={item} />
  );

  const renderRequest: ListRenderItem<Asset> = ({item}) => (
    <RequestCard asset={item} onClick={handleSign} loading={loading} />
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        animated
        translucent
      />
      <TopBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={tw('pt-4')}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={fetchData} />
        }>
        <Section title="My Assets">
          {assets && assets.length > 0 ? (
            <FlatList
              data={assets}
              renderItem={renderAsset}
              keyExtractor={_asset => _asset.id}
            />
          ) : (
            <Text>You currently have no asset.</Text>
          )}
        </Section>
        <Section title="Transfer Request">
          {requests && requests.length > 0 ? (
            <FlatList
              data={requests}
              renderItem={renderRequest}
              keyExtractor={_asset => _asset.id}
            />
          ) : (
            <Text>You currently have no pending transfer request.</Text>
          )}
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
