import type { Preview } from '@storybook/react-native-web-vite'

import { View } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'
import { configureStyles } from '../src/unistyles'

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
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
})

export default preview
