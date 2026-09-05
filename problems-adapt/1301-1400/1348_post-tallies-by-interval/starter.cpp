class PostTally {
  public:
    PostTally();
    void recordPost(string name, long long time);
    vector<int> countsPerInterval(string span, string name, long long startTime, long long endTime);
};
