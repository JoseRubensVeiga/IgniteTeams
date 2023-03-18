import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Container} from './styles';


const CustomSafeArea = () => {
    const insets = useSafeAreaInsets();
    
    return <Container paddingTop={insets.top} />;
}

export default CustomSafeArea;