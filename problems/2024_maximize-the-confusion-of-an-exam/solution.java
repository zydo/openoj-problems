class Solution {

    public int maxConsecutiveAnswers(String answerKey, int k) {
        int t = 0,
            f = 0;
        int left = 0;
        int best = 0;
        int n = answerKey.length();
        for (int right = 0; right < n; right++) {
            if (answerKey.charAt(right) == 'T') t++;
            else f++;
            while (Math.min(t, f) > k) {
                if (answerKey.charAt(left) == 'T') t--;
                else f--;
                left++;
            }
            best = Math.max(best, right - left + 1);
        }
        return best;
    }
}
