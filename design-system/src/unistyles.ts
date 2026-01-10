import { StyleSheet } from 'react-native-unistyles'

import { lightTheme } from './theme/light'
import { darkTheme } from './theme/dark'

const appThemes = {
  light: lightTheme,
  dark: darkTheme,
}

type AppThemes = typeof appThemes

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

type AppBreakpoints = typeof breakpoints

declare module 'react-native-unistyles' {
  /* eslint-disable @typescript-eslint/consistent-type-definitions, @typescript-eslint/no-empty-object-type -- Required to override the existing types */
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  /* eslint-enable */
}

const settings = {
  initialTheme: 'light',
  // TODO: Implement theme switching
  // initialTheme: () => {
  //   // get preferred theme from user's preferences/MMKV/SQL/StanJS etc.
  //   return storage.getString('preferredTheme') ?? 'light'
  // }
} as const

export const configureStyles = () => {
  StyleSheet.configure({
    themes: appThemes,
    breakpoints,
    settings,
  })
}
