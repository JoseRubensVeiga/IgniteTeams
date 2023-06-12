import AsyncStorage from '@react-native-async-storage/async-storage';
import groupsGetAll from './groupsGetAll';
import { GROUP_COLLECTION } from '@storage/storageConfig';

export async function groupRemoveByName(group: string) {
  try {
    const groups = await groupsGetAll();

    const filteredGroups = groups.filter((g) => g !== group);

    AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(filteredGroups));
    AsyncStorage.removeItem(`${GROUP_COLLECTION}-${group}`);
  } catch (error) {
    throw error;
  }
}
