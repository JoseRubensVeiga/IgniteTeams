import { ThemeProvider } from 'styled-components/native'

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';

import { Groups } from '@screens/Groups'
import theme from './src/theme';
import { useCallback } from 'react';
import { View } from 'react-native';


SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  }); 

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{flexGrow: 1}} onLayout={onLayoutRootView}>
      <ThemeProvider theme={theme}>
          <Groups />
      </ThemeProvider>
    </View>
  );
}