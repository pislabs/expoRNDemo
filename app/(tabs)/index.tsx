import { Image, StyleSheet, Text, View } from "react-native";
import { vars, useColorScheme, remapProps } from "nativewind";
import type { PropsWithChildren } from "react";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { HelloWave } from "@/components/HelloWave";
import TButton from "@/components/button/TButton";

const userTheme = vars({
  "--color-primary": "0 255 0",
  "--color-primary-rgb": "rbg(0 0 255)",
});

const themes = {
  brand: {
    light: vars({
      "--color-primary": "255 0 0",
      "--color-secondary": "0 255 0",
    }),
    dark: {
      "--color-primary": "0 0 255",
      "--color-secondary": "0 255 0",
    },
  },

  christmas: {
    light: vars({
      "--color-primary": "0 0 255",
      "--color-secondary": "100 100 0",
    }),
    dark: vars({
      "--color-primary": "0 0 255",
      "--color-secondary": "0 255 0",
    }),
  },
};

function Theme(props: PropsWithChildren<{ name: keyof typeof themes }>) {
  let { colorScheme } = useColorScheme();

  if (colorScheme == undefined) colorScheme = "light";

  return <View style={themes[props.name][colorScheme]}>{props.children}</View>;
}

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <View style={styles.titleContainer}>
        <Text className="font-bold text-3xl text-error">Welcome!</Text>
        <HelloWave />
      </View>
      <View style={styles.stepContainer}>
        <TButton />
      </View>

      <View>
        <Text
          className={
            "text-error  bg-green-200 p-2 px-5 rounded-md text-lg shadow tracking-widest " +
            "line-clamp-2 leading-10 uppercase underline decoration-600" +
            "decoration-dashed rotate-12"
          }
        >
          Error1Error1Error1Error1Error1Error1Error1Error1Error1Error1Error1Error1Erro
        </Text>
      </View>

      <View className="container border-solid border-spacing-3 border-red-600 bg-slate-100 opacity-80">
        <Text className="text-primary active:text-secondary cursor-pointer caret-slate-500">
          Text Active111
        </Text>

        <Text className="text-secondary">Text Secondary</Text>
        <Text className="text-[--color-primary-rgb]">
          Or the variable directly
        </Text>

        <Text className="text-red-500" style={{ color: "green" }}>
          Text Mix1
        </Text>

        <Text className="!text-red-500" style={{ color: "green" }}>
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

        <View style={vars({ "--brand-color": "green" })}>
          <Text className="text-[--brand-color] p-1 font-bold">
            Brand Color
          </Text>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    position: "absolute",
  },
});
