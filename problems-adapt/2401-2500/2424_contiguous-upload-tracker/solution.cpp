class UploadPrefixTracker {
  public:
    // Uploaded marks in a boolean array plus a prefix pointer that only
    // moves forward. markUploaded() sets one mark; longestReadyPrefix() advances the
    // pointer while the next video is already uploaded. The pointer
    // never retreats, so its total travel across all calls is bounded
    // by n and every query is amortized constant.
    UploadPrefixTracker(int n) : n_(n), uploaded_(n + 1, false) {}

    void markUploaded(int video) { uploaded_[video] = true; }

    int longestReadyPrefix() {
        while (prefix_ < n_ && uploaded_[prefix_ + 1])
            ++prefix_;
        return prefix_;
    }

  private:
    int n_;
    vector<bool> uploaded_;
    int prefix_ = 0;
};
