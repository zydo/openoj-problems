class Solution {

    // The first word fixes the target vowel count; every later word
    // sharing it is reversed, the rest pass through untouched.
    public String reverseWords(String s) {
        String[] words = s.split(" ");
        int target = countVowels(words[0]);
        StringBuilder out = new StringBuilder(words[0]);
        for (int i = 1; i < words.length; i++) {
            out.append(' ');
            if (countVowels(words[i]) == target) {
                out.append(new StringBuilder(words[i]).reverse());
            } else {
                out.append(words[i]);
            }
        }
        return out.toString();
    }

    private int countVowels(String word) {
        int count = 0;
        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                count++;
            }
        }
        return count;
    }
}
