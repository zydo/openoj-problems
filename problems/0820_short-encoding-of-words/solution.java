class Solution {

    public int minimumLengthEncoding(String[] words) {
        java.util.Set<String> keep = new java.util.HashSet<>(
            java.util.Arrays.asList(words)
        );
        for (String w : words) {
            for (int k = 1; k < w.length(); k++) {
                keep.remove(w.substring(k));
            }
        }
        int total = 0;
        for (String w : keep) {
            total += w.length() + 1;
        }
        return total;
    }
}
