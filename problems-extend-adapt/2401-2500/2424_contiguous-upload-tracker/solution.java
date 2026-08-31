class UploadPrefixTracker {

    // Uploaded marks in a boolean array plus a prefix pointer that only
    // moves forward. markUploaded() sets one mark; longestReadyPrefix() advances the
    // pointer while the next video is already uploaded. The pointer
    // never retreats, so its total travel across all calls is bounded
    // by n and every query is amortized constant.
    private final boolean[] uploaded;
    private final int n;
    private int prefix;

    public UploadPrefixTracker(int n) {
        this.n = n;
        this.uploaded = new boolean[n + 1];
    }

    public void markUploaded(int video) {
        uploaded[video] = true;
    }

    public int longestReadyPrefix() {
        while (prefix < n && uploaded[prefix + 1]) {
            prefix++;
        }
        return prefix;
    }
}
