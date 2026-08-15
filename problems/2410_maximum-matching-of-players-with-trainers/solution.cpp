class Solution {
  public:
    int matchPlayersAndTrainers(vector<int> &players, vector<int> &trainers) {
        sort(players.begin(), players.end());
        sort(trainers.begin(), trainers.end());
        int i = 0;
        int j = 0;
        int matches = 0;
        while (i < (int)players.size() && j < (int)trainers.size()) {
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
};
