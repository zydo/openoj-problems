class Solution {
  public:
    int numRescueBoats(vector<int> &people, int limit) {
        vector<int> sorted_people = people;
        sort(sorted_people.begin(), sorted_people.end());
        int i = 0;
        int j = (int)sorted_people.size() - 1;
        int boats = 0;
        while (i <= j) {
            if (i < j && sorted_people[i] + sorted_people[j] <= limit) {
                i++;
            }
            j--;
            boats++;
        }
        return boats;
    }
};
