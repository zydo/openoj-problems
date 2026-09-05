class Solution {

    public int fewestToggles(int start, int goal) {
        return Integer.bitCount(start ^ goal);
    }
}
