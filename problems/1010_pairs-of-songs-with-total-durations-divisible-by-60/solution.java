class Solution {

    public int numPairsDivisibleBy60(int[] time) {
        int[] counts = new int[60];
        int total = 0;
        for (int duration : time) {
            int remainder = duration % 60;
            total += counts[(60 - remainder) % 60];
            counts[remainder]++;
        }
        return total;
    }
}
