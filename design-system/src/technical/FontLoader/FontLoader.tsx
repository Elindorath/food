import { useFonts } from 'expo-font'
import { View, Text as RNText } from 'react-native'

import { Fonts } from '@/assets'

import type { FontSource } from 'expo-font'

import type { FontLoaderProps } from './FontLoader.types.tsx'

export function FontLoader({ children }: FontLoaderProps) {
  const [areFontsLoaded, error] = useFonts({
    PlayfairDisplay: Fonts.PlayfairDisplay as FontSource,
    Inter: Fonts.Inter as FontSource,
  })

  if (error) {
    return <RNText>Error loading fonts</RNText>
  }

  if (!areFontsLoaded) {
    return <View />
  }

  return children
}
