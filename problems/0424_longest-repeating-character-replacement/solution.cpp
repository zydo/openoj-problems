class Solution {
  public:
    int characterReplacement(string s, int k) {
        int count[128] = {0};
        int best = 0, left = 0, maxFreq = 0;
        for (int right = 0; right < (int)s.size(); right++) {
            int c = (unsigned char)s[right];
            if (++count[c] > maxFreq)
                maxFreq = count[c];
            while ((right - left + 1) - maxFreq > k) {
                count[(unsigned char)s[left]]--;
                left++;
            }
            best = max(best, right - left + 1);
        }
        return best;
    }
};
