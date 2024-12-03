import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { Appbar, Button, Avatar, Badge, Banner } from 'react-native-paper';

import ParallaxScrollView from '@/components/ParallaxScrollView';

import { useAppTheme } from '@/hooks/useAppTheme';
import React from 'react';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export default function HomeScreen() {
  const theme = useAppTheme();

  const [visible, setVisible] = React.useState(true);

  console.log('App theme --------->', theme)

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
      </Appbar.Header>
      <View style={{ backgroundColor: theme.colors.brandPrimary }}>
        <Button icon="camera" raised theme={{ roundness: 3 }}>
          Press me
        </Button>
      </View>

      <View>
        <Avatar.Icon size={24} icon="folder" />
        <Badge>3</Badge>
      </View>

      <View>
        <Banner
          visible={visible}
          actions={[
            {
              label: 'Fix it',
              onPress: () => setVisible(false),
            },
            {
              label: 'Learn more',
              onPress: () => setVisible(false),
            },
          ]}
          icon={({size}) => (
            <Image
              source={{
                uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
              }}
              style={{
                width: size,
                height: size,
              }}
            />
          )}>
          There was a problem processing a transaction on your credit card.
        </Banner>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
