class Solution {

    public int characterReplacement(String s, int k) {
        int[] count = new int[128];
        int best = 0,
            left = 0,
            maxFreq = 0;
        for (int right = 0; right < s.length(); right++) {
            int c = s.charAt(right);
            if (++count[c] > maxFreq) maxFreq = count[c];
            while (right - left + 1 - maxFreq > k) {
                count[s.charAt(left)]--;
                left++;
            }
            if (right - left + 1 > best) best = right - left + 1;
        }
        return best;
    }
}
