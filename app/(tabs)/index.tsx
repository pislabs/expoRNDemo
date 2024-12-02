import { Image, StyleSheet } from 'react-native';
import { Button, Stack, View, Text, getTokens, styled } from 'tamagui';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { AnimationsDemo } from '@/components/demos/AnimationsDemo';

const StyledView = styled(View, {
  padding: 10,
  backgroundColor: '$red11',
  borderRadius: '$1'
})

const CalHeader = styled(Text, {
  variants: {
    isHero: {
      true: {
        fontSize: 30,
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: 5
      },
    },
  },
})

const StyledText = styled(Text)

// note the styleable wrapper here:
const HigherOrderStyledText = StyledText.styleable((props, ref) => (
  <StyledText ref={ref} {...props} />
))

const StyledHigherOrderStyledText = styled(HigherOrderStyledText, {
  variants: {
    isHero: {
      true: {
        fontSize: 16,
        backgroundColor: 'red',
        color: 'white',
        borderRadius: 5,
        padding: 10
      },
    },
  },
})

// console.log("StyledHigherOrderStyledText.staticConfig ---------->", StyledHigherOrderStyledText.staticConfig)

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
        
      <View>
        <Button theme="blue">Hello World</Button>
      </View>

      <View>
        <Text>{`${JSON.stringify(getTokens().size.small)}`}</Text>
        <Text>{`${JSON.stringify(getTokens().size.small.variable)}`}</Text>
      </View>

      <View mx="$small" width="$icon.small" backgroundColor="$red3">
        <Text color="$color">S</Text>
      </View>

      <View  width="$icon.middle" backgroundColor="$blue3">
        <Text>M</Text>
      </View>

      <StyledView focusStyle={{backgroundColor: 'green'}}>
        <Text>StyledView</Text>
      </StyledView>

      <View>
        <CalHeader isHero={true} > isHero: true</CalHeader>
        <CalHeader isHero={true} fontSize={20}> isHero: true, fontSize: 20</CalHeader>
        <CalHeader isHero={false} > isHero: false</CalHeader>
      </View>

      <View>
        <StyledHigherOrderStyledText isHero={true}>StyledHigherOrderStyledText</StyledHigherOrderStyledText>
      </View>

      <View>
        <AnimationsDemo>
          <View width={50} height={50} backgroundColor={"red"}>
            <Text>OK</Text>
          </View>
        </AnimationsDemo>
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
