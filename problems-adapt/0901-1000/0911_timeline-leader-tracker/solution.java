class TimelineLeaderTracker {

    // The lead can only change hands when a vote is cast, so the constructor
    // reduces the whole history to one array: it walks the votes once, keeping
    // running counts and the current leader, and a ballot that merely ties the
    // maximum takes the lead — the most recent vote among the tied candidates.
    // leaderAt(t) then only has to locate the last vote at or before t, which is a
    // binary search because times is strictly increasing, and read the leader
    // recorded there.
    private final int[] times;
    private final int[] leaders;

    public TimelineLeaderTracker(int[] labels, int[] times) {
        this.times = times;
        // person ids are dense in [0, n), so a plain count array indexes them
        int[] counts = new int[labels.length];
        int[] leaders = new int[labels.length];
        int best = 0;
        int leader = 0;
        for (int i = 0; i < labels.length; ++i) {
            // a tie at the maximum hands the lead to the caster of this very
            // ballot — the most recent vote among the tied candidates
            if (++counts[labels[i]] >= best) {
                best = counts[labels[i]];
                leader = labels[i];
            }
            leaders[i] = leader;
        }
        this.leaders = leaders;
    }

    public int leaderAt(int t) {
        // upper bound: the first index past every vote at or before t, so a
        // ballot cast exactly at t counts
        int lo = 0,
            hi = times.length;
        while (lo < hi) {
            int mid = (lo + hi) >>> 1;
            if (times[mid] <= t) lo = mid + 1;
            else hi = mid;
        }
        return leaders[lo - 1];
    }
}
