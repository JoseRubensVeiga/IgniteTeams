import AsyncStorage from '@react-native-async-storage/async-storage';
import { PlayerStorageDTO } from './PlayerStorageDTO';
import { PLAYER_COLLECTION } from '@storage/storageConfig';

export async function playersGetByGroup(group: string) {
  try {
    const result = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);

    const players: PlayerStorageDTO[] = result ? JSON.parse(result) : [];

    return players;
  } catch (error) {
    throw error;
  }
}
