import { StatusBar, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native'

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Groups } from '@screens/Groups'
import theme from './src/theme';
import Loading from '@components/Loading';


export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  }); 

  
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          backgroundColor='transparent'
          translucent
        />
          { fontsLoaded ? <Groups /> : <Loading />}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}