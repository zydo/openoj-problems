class UploadPrefixTracker {
  public:
    UploadPrefixTracker(int n);
    void markUploaded(int video);
    int longestReadyPrefix();
};
