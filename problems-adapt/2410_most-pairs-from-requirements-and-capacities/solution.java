import java.util.Arrays;

class Solution {

    public int mostRequirementCapacityPairs(int[] requirements, int[] capacities) {
        Arrays.sort(requirements);
        Arrays.sort(capacities);
        // Greedy: pair the weakest unmatched requirement with the weakest
        // unmatched capacity — optimal by an exchange argument.
        int i = 0;
        int j = 0;
        int matches = 0;
        while (i < requirements.length && j < capacities.length) {
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
}
