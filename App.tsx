import { StatusBar, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native'

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import theme from './src/theme';
import Loading from '@components/Loading';
import CustomSafeArea from '@components/CustomSafeArea';
import Routes from './src/routes';


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
        <CustomSafeArea />
          { fontsLoaded ? <Routes /> : <Loading /> }
      </ThemeProvider>
    </SafeAreaProvider>
  );
}