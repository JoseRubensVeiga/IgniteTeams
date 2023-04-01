import { playersGetByGroup } from './playersGetByGroup';

export async function playerGetByGroupAndTeam(group: string, team: string) {
  try {
    return (await playersGetByGroup(group)).filter((p) => p.team === team);
  } catch (error) {
    throw error;
  }
}
