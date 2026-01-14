import type { Preview } from '@storybook/react-native-web-vite'

import { View } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'
import { configureStyles } from '../src/unistyles'
import { useFonts } from 'expo-font'

configureStyles();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#FFFFFF',
        },
        {
          name: 'dark',
          value: '#1A1A1A',
        },
      ],
    },
  },
  decorators: [
    (Story) => {
      const [fontsLoaded] = useFonts({
        'PlayfairDisplay': require('../assets/fonts/PlayfairDisplay-Regular.ttf'),
        'Inter-Bold': require('../assets/fonts/Inter_28pt-Bold.ttf'),
      })

      if (!fontsLoaded) {
        return <View />
      }

      return (
        <View style={styles.container}>
          <Story />
        </View>
      )
    },
  ],
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
})

export default preview
