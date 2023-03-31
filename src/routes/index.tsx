import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import AppRoutes from './app.routes';

const Routes = () => {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.gray600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
};

export default Routes;
