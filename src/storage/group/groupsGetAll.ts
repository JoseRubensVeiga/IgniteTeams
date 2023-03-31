import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION } from '@storage/storageConfig';

const groupsGetAll = async () => {
  try {
    const result = await AsyncStorage.getItem(GROUP_COLLECTION);

    const groups: string[] = result ? JSON.parse(result) : [];

    return groups;
  } catch (error) {
    throw error;
  }
};

export default groupsGetAll;
