class Solution {

    public int countAnchors(int[] differences, int lower, int upper) {
        long prefix = 0;
        long minimum = 0;
        long maximum = 0;
        for (int difference : differences) {
            prefix += difference;
            minimum = Math.min(minimum, prefix);
            maximum = Math.max(maximum, prefix);
        }
        long available = (long) upper - lower - (maximum - minimum) + 1;
        return (int) Math.max(0, available);
    }
}
