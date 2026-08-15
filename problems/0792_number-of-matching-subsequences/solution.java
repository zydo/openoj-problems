class Solution {

    public int numMatchingSubseq(String s, String[] words) {
        java.util.List<int[]>[] waiting = new java.util.List[26]; // char -> list of (wordIndex, nextIndex)
        int count = 0;
        for (int wi = 0; wi < words.length; wi++) {
            String w = words[wi];
            if (w.isEmpty()) {
                count++;
            } else {
                int c = w.charAt(0) - 'a';
                if (waiting[c] == null) {
                    waiting[c] = new java.util.ArrayList<>();
                }
                waiting[c].add(new int[] { wi, 1 });
            }
        }
        for (int i = 0; i < s.length(); i++) {
            int c = s.charAt(i) - 'a';
            java.util.List<int[]> its = waiting[c];
            if (its == null || its.isEmpty()) continue;
            waiting[c] = new java.util.ArrayList<>();
            for (int[] entry : its) {
                String w = words[entry[0]];
                if (entry[1] == w.length()) {
                    count++;
                } else {
                    int nc = w.charAt(entry[1]) - 'a';
                    if (waiting[nc] == null) {
                        waiting[nc] = new java.util.ArrayList<>();
                    }
                    waiting[nc].add(new int[] { entry[0], entry[1] + 1 });
                }
            }
        }
        return count;
    }
}
