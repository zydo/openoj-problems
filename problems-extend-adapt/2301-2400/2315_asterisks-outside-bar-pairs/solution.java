class Solution {

    public int countVisibleStars(String s) {
        int count = 0;
        boolean inside = false;
        for (int index = 0; index < s.length(); index++) {
            char ch = s.charAt(index);
            if (ch == '|') {
                inside = !inside;
            } else if (!inside && ch == '*') {
                count++;
            }
        }
        return count;
    }
}
