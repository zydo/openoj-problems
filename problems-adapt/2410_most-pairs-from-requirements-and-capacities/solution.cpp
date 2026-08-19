class Solution {
  public:
    int mostRequirementCapacityPairs(vector<int> &requirements, vector<int> &capacities) {
        sort(requirements.begin(), requirements.end());
        sort(capacities.begin(), capacities.end());
        // Greedy: pair the weakest unmatched requirement with the weakest
        // unmatched capacity — optimal by an exchange argument.
        int i = 0;
        int j = 0;
        int matches = 0;
        while (i < (int)requirements.size() && j < (int)capacities.size()) {
            if (requirements[i] <= capacities[j]) {
                matches += 1;
                i += 1;
                j += 1;
            } else {
                // Capacity too weak for the weakest remaining requirement; requirements
                // only get stronger, so it is useless forever — skip it.
                j += 1;
            }
        }
        return matches;
    }
};
