import java.util.concurrent.ThreadLocalRandom;

class Solution {

    // Prefix sums lay the weights end to end over [0, total); one uniform
    // draw lands in exactly one segment, so index i comes back with
    // probability exactly weights[i] / total.
    private final long[] prefix;

    public Solution(int[] weights) {
        this.prefix = new long[weights.length + 1];
        for (int i = 0; i < weights.length; i++) {
            prefix[i + 1] = prefix[i] + weights[i];
        }
    }

    public int drawIndex() {
        long target = ThreadLocalRandom.current().nextLong(1, prefix[prefix.length - 1] + 1);
        int low = 1,
            high = prefix.length - 1; // first index with prefix[i] >= target
        while (low < high) {
            int mid = (low + high) >>> 1;
            if (prefix[mid] >= target) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        return low - 1;
    }
}
