import AsyncStorage from '@react-native-async-storage/async-storage';

import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';
import { PlayerStorageDTO } from './PlayerStorageDTO';
import { playersGetByGroup } from './playersGetByGroup';

const playerAddByGroup = async (newPlayer: PlayerStorageDTO, group: string) => {
  try {
    const storedPlayers = await playersGetByGroup(group);

    const playerAlreadyExists = storedPlayers.find(
      (p) => p.name === newPlayer.name
    );

    if (playerAlreadyExists) {
      throw new AppError(
        'Essa pessoa já está adicionada em um time neste grupo.'
      );
    }

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${group}`,
      JSON.stringify([...storedPlayers, newPlayer])
    );
  } catch (error) {
    throw error;
  }
};

export default playerAddByGroup;
