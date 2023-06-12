import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { playerGetByGroupAndTeam } from './playerGetByGroupAndTeam';

export async function playerRemoveFromTeam(
  playerName: string,
  group: string,
  team: string
) {
  try {
    const players = await playerGetByGroupAndTeam(group, team);

    const filteredPlayers = players.filter((p) => p.name !== playerName);

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${group}`,
      JSON.stringify(filteredPlayers)
    );

    return filteredPlayers;
  } catch (error) {
    throw error;
  }
}
