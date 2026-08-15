class Solution {
  public:
    int longestDecomposition(string text) {
        int n = text.size();
        int count = 0;
        int left = 0;
        int right = n;
        while (left < right) {
            int size = 1;
            bool matched = false;
            while (left + size <= right - size) {
                if (text.compare(left, size, text, right - size, size) == 0) {
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
};
