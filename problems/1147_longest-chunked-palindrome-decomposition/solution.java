class Solution {

    public int longestDecomposition(String text) {
        int n = text.length();
        int count = 0;
        int left = 0;
        int right = n;
        while (left < right) {
            int size = 1;
            boolean matched = false;
            while (left + size <= right - size) {
                if (
                    text
                        .substring(left, left + size)
                        .equals(text.substring(right - size, right))
                ) {
                    count += 2;
                    left += size;
                    right -= size;
                    matched = true;
                    break;
                }
                size += 1;
            }
            if (!matched) {
                count += 1;
                break;
            }
        }
        return count;
    }
}
