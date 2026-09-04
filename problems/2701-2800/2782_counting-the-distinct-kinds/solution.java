class Solution {

    public int numberOfCategories(KindOracle kindOracle, int n) {
        // Keep one representative index per kind discovered so far.
        // Kind-sharing is an equivalence relation behind the oracle, so
        // by transitivity element i shares a kind with some earlier
        // element exactly when it shares one with that kind's
        // representative: scanning representatives only never misses a
        // join and never invents one. A miss across all representatives
        // means i opens a genuinely new kind and becomes its
        // representative; at most i queries are spent on element i, so
        // the whole sweep stays within n(n-1)/2 calls.
        int[] representatives = new int[n];
        int count = 0;
        for (int i = 0; i < n; i++) {
            boolean joined = false;
            for (int r = 0; r < count; r++) {
                if (kindOracle.hasSameKind(i, representatives[r])) {
                    joined = true;
                    break;
                }
            }
            if (!joined) {
                representatives[count++] = i;
            }
        }
        return count;
    }
}
