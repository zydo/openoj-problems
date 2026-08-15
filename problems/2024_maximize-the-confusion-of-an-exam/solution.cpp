class Solution {
  public:
    int maxConsecutiveAnswers(string answerKey, int k) {
        int t = 0, f = 0;
        int left = 0;
        int best = 0;
        int n = answerKey.size();
        for (int right = 0; right < n; right++) {
            if (answerKey[right] == 'T')
                t++;
            else
                f++;
            while (min(t, f) > k) {
                if (answerKey[left] == 'T')
                    t--;
                else
                    f--;
                left++;
            }
            best = max(best, right - left + 1);
        }
        return best;
    }
};
