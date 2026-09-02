class Solution {
  public:
    int maxWordCount(vector<string> &sentences) {
        int maximum = 0;
        for (const string &sentence : sentences) {
            int words = 1;
            for (char character : sentence) {
                if (character == ' ') {
                    words++;
                }
            }
            maximum = max(maximum, words);
        }
        return maximum;
    }
};
