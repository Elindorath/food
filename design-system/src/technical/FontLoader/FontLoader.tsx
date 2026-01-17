import { useFonts } from 'expo-font'
import { View, Text as RNText } from 'react-native'

import { Fonts } from '@/assets'

import type { FontSource } from 'expo-font'

import type { FontLoaderProps } from './FontLoader.types.tsx'

const fonts: { [key in keyof typeof Fonts]: FontSource } = {
  Lora: Fonts.Lora as FontSource,
  Inter: Fonts.Inter as FontSource,
}

export function FontLoader({ children }: FontLoaderProps) {
  const [areFontsLoaded, error] = useFonts(fonts)

  if (error) {
    return <RNText>Error loading fonts</RNText>
  }

  if (!areFontsLoaded) {
    return <View />
  }

  return children
}
