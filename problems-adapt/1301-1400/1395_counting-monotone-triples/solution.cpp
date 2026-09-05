class Solution {
  public:
    int countMonotoneTriples(vector<int> &rating) {
        // Fix the middle index j: a rising triple picks any smaller rating
        // on the left and any larger on the right; a falling triple mirrors
        // it. Summing the four counts over every j counts each triple
        // exactly once, by its middle element.
        int n = rating.size();
        int triples = 0;
        for (int j = 0; j < n; ++j) {
            int lessLeft = 0;
            for (int i = 0; i < j; ++i) {
                lessLeft += rating[i] < rating[j];
            }
            int greaterLeft = j - lessLeft;
            int greaterRight = 0;
            for (int k = j + 1; k < n; ++k) {
                greaterRight += rating[k] > rating[j];
            }
            int lessRight = n - 1 - j - greaterRight;
            triples += lessLeft * greaterRight + greaterLeft * lessRight;
        }
        return triples;
    }
};
