class Solution {
  public:
    std::vector<std::vector<int>> collectPairs(HiddenFormula &hiddenFormula, int z) {
        std::vector<std::vector<int>> pairs;
        int x = 1;
        int y = 1000;
        while (x <= 1000 && y >= 1) {
            int value = hiddenFormula.evaluate(x, y);
            if (value == z) {
                pairs.push_back({x, y});
                ++x;
                --y;
            } else if (value < z) {
                ++x;
            } else {
                --y;
            }
        }
        return pairs;
    }
};
