class Solution {
  public:
    int minimumTwoItemContainers(vector<int> &weights, int capacity) {
        vector<int> sorted_people = weights;
        sort(sorted_people.begin(), sorted_people.end());
        int i = 0;
        int j = (int)sorted_people.size() - 1;
        int boats = 0;
        while (i <= j) {
            // The heaviest boards either way; the lightest is their best
            // partner, since a heavier one only risks exceeding the capacity.
            // The i < j guard keeps the last person from pairing with themself.
            if (i < j && sorted_people[i] + sorted_people[j] <= capacity) {
                i++;
            }
            j--;
            boats++;
        }
        return boats;
    }
};
