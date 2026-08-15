class Solution {
  public:
    int numPairsDivisibleBy60(vector<int> &time) {
        array<long long, 60> counts{};
        long long total = 0;
        for (int duration : time) {
            int remainder = duration % 60;
            total += counts[(60 - remainder) % 60];
            counts[remainder]++;
        }
        return (int)total;
    }
};
