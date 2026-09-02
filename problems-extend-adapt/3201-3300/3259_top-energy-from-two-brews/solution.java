class Solution {

    public long maxBrewEnergy(int[] brewA, int[] brewB) {
        // A plan that drinks A at hour i either drank A at hour i-1 or
        // drank B at hour i-2 and idled through the cleanse hour i-1, so
        // dpA[i] = max(dpA[i-1], dpB[i-2]) + brewA[i] and
        // symmetrically for B. Four rolling variables carry the current
        // pair and the one-hour-older pair; totals reach 10^10, past the
        // 32-bit range.
        long a = (long) brewA[0] + brewA[1];
        long b = (long) brewB[0] + brewB[1];
        long oldA = brewA[0],
            oldB = brewB[0];
        for (int i = 2; i < brewA.length; i++) {
            long nextA = Math.max(a, oldB) + brewA[i];
            long nextB = Math.max(b, oldA) + brewB[i];
            oldA = a;
            oldB = b;
            a = nextA;
            b = nextB;
        }
        return Math.max(a, b);
    }
}
