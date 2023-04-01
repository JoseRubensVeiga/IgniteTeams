import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION } from '@storage/storageConfig';
import groupsGetAll from './groupsGetAll';
import { AppError } from '@utils/AppError';

const groupCreate = async (newGroup: string) => {
  try {
    const storedGroups = await groupsGetAll();

    if (storedGroups.includes(newGroup)) {
      throw new AppError('Já existe um grupo cadastrado com esse nome.');
    }

    const addedGroups = [...storedGroups, newGroup];

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(addedGroups));
  } catch (error) {
    throw error;
  }
};

export default groupCreate;
