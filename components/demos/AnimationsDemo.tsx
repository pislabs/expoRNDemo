import { LogoIcon } from "@tamagui/logo";
import { Play } from "@tamagui/lucide-icons";
import { PropsWithChildren } from "react";
import {
  Button,
  Square,
  ThemeName,
  useControllableState,
  useEvent,
  Text,
  View,
} from "tamagui";

export function AnimationsDemo(
  props: PropsWithChildren & {
    position?: number;
    animation?: string;
    tint?: ThemeName;
  }
) {
  const [positionI, setPositionI] = useControllableState({
    strategy: "most-recent-wins",
    prop: props.position,
    defaultProp: 0,
  });
  const position = positions[positionI];
  const onPress = useEvent(() => {
    setPositionI((x: number) => {
      return (x + 1) % positions.length;
    });
  });

  return (
    <View width={100} height={100} backgroundColor={"green"}>
      <Square
        animation={(props.animation || "bouncy") as any}
        animateOnly={["transform"]}
        onPress={onPress}
        size={104}
        borderColor="$borderColor"
        borderWidth={1}
        borderRadius="$9"
        backgroundColor="$color9"
        hoverStyle={{
          scale: 1.5,
        }}
        pressStyle={{
          scale: 0.9,
        }}
        {...position}
      >
        {props.children || <LogoIcon downscale={0.75} />}
      </Square>

      <Button
        position="absolute"
        bottom={20}
        left={20}
        icon={Play}
        theme={props.tint}
        size="$5"
        circular
        onPress={onPress}
      />
    </View>
  );
}

export const positions = [
  {
    x: 0,
    y: 0,
    scale: 1,
    rotate: "0deg",
  },
  {
    x: -50,
    y: -50,
    scale: 0.5,
    rotate: "-45deg",
    hoverStyle: {
      scale: 0.6,
    },
    pressStyle: {
      scale: 0.4,
    },
  },
  {
    x: 50,
    y: 50,
    scale: 1,
    rotate: "180deg",
    hoverStyle: {
      scale: 1.1,
    },
    pressStyle: {
      scale: 0.9,
    },
  },
];
