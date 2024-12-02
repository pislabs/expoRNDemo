import { Button, Image, StyleSheet, Text, View, Share } from 'react-native';
import { vars, useColorScheme, remapProps } from 'nativewind';
import type { PropsWithChildren } from 'react';

import { useActionSheet } from '@expo/react-native-action-sheet';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { HelloWave } from '@/components/HelloWave';
import TButton from '@/components/button/TButton';
import { ActivityIndicator } from '@/components/nativewindui/ActivityIndicator';
import { BottomSheetView, Sheet, useSheetRef } from '@/components/nativewindui/Sheet';

const userTheme = vars({
  '--color-primary': '0 255 0',
  '--color-primary-rgb': 'rbg(0 0 255)',
});

const themes = {
  brand: {
    light: vars({
      '--color-primary': '255 0 0',
      '--color-secondary': '0 255 0',
    }),
    dark: {
      '--color-primary': '0 0 255',
      '--color-secondary': '0 255 0',
    },
  },

  christmas: {
    light: vars({
      '--color-primary': '0 0 255',
      '--color-secondary': '100 100 0',
    }),
    dark: vars({
      '--color-primary': '0 0 255',
      '--color-secondary': '0 255 0',
    }),
  },
};

function Theme(props: PropsWithChildren<{ name: keyof typeof themes }>) {
  let { colorScheme } = useColorScheme();

  if (colorScheme == undefined) colorScheme = 'light';

  return <View style={themes[props.name][colorScheme]}>{props.children}</View>;
}

export default function HomeScreen() {
  const { showActionSheetWithOptions } = useActionSheet();

  const bottomSheetModalRef = useSheetRef();

  const onPressMe = () => {
    const options = ['Delete', 'Save', 'Cancel'];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex?: number) => {
        switch (selectedIndex) {
          case 1:
            // Save
            break;

          case destructiveButtonIndex:
            // Delete
            break;

          case cancelButtonIndex:
          // Canceled
        }
      }
    );
  };

  const onShareMe = async () => {
    try {
      const result = await Share.share({
        message: 'NativeWindUI | Familiar interface, native feel.',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const onSheetMe = () => {
    bottomSheetModalRef.current?.present();
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <View style={styles.titleContainer}>
        <Text className="text-3xl font-bold text-error">Welcome!</Text>
        <HelloWave />
      </View>
      <View style={styles.stepContainer}>
        <Button onPress={onPressMe} title="Press Me" />
        <Button onPress={onShareMe} title="Share Me" />
        <Button onPress={onSheetMe} title="Sheet Me" />
        <TButton />
        <ActivityIndicator />
      </View>

      <Sheet ref={bottomSheetModalRef} snapPoints={[200]}>
        <BottomSheetView className="flex-1 items-center justify-center pb-8">
          <Text className="text-foreground">@gorhom/bottom-sheet 🎉</Text>
        </BottomSheetView>
      </Sheet>

      <View>
        <Text
          className={
            'rounded-md  bg-green-200 p-2 px-5 text-lg tracking-widest text-error shadow ' +
            'decoration-600 line-clamp-2 uppercase leading-10 underline' +
            'rotate-12 decoration-dashed'
          }>
          Error1Error1Error1Error1Error1Error1Error1Error1Error1Error1Error1Error1Erro
        </Text>
      </View>

      <View className="container border-spacing-3 border-solid border-red-600 bg-slate-100 opacity-80">
        <Text className="cursor-pointer text-primary caret-slate-500 active:text-secondary">
          Text Active111
        </Text>

        <Text className="text-secondary">Text Secondary</Text>
        <Text className="text-[--color-primary-rgb]">Or the variable directly</Text>

        <Text className="text-red-500" style={{ color: 'green' }}>
          Text Mix1
        </Text>

        <Text className="!text-red-500" style={{ color: 'green' }}>
          Text Mix2
        </Text>

        <View style={userTheme}>
          <Text className="text-primary">I am now green!</Text>
          <Text className="text-[--color-primary-rgb]">I am now blue!</Text>
        </View>

        <Theme name="brand">
          <Text className="text-primary">I am themed!</Text>
          <Theme name="christmas">
            <Text className="text-secondary">I am themed!</Text>
          </Theme>
        </Theme>

        <View style={vars({ '--brand-color': 'green' })}>
          <Text className="p-1 font-bold text-[--brand-color]">Brand Color</Text>
        </View>
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
