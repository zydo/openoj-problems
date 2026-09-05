class Solution {
  public:
    int crossBeams(vector<string> &floors) {
        int beams = 0;
        int previous = 0;
        for (const string &row : floors) {
            int devices = count(row.begin(), row.end(), '1');
            if (devices > 0) {
                beams += previous * devices;
                previous = devices;
            }
        }
        return beams;
    }
};
