class ScoreBook {
  public:
    ScoreBook();
    void record(int time, int score);
    long long windowTotal(int startTime, int endTime);
};
