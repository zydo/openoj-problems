class JobBoard {
  public:
    JobBoard(vector<vector<int>> jobs);
    void post(int userId, int jobId, int priority);
    void reprioritize(int jobId, int newPriority);
    void withdraw(int jobId);
    int runTop();
};
