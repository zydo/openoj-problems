import java.util.Arrays;

class Solution {

    public int matchPlayersAndTrainers(int[] players, int[] trainers) {
        Arrays.sort(players);
        Arrays.sort(trainers);
        int i = 0;
        int j = 0;
        int matches = 0;
        while (i < players.length && j < trainers.length) {
            if (players[i] <= trainers[j]) {
                matches += 1;
                i += 1;
                j += 1;
            } else {
                j += 1;
            }
        }
        return matches;
    }
}
