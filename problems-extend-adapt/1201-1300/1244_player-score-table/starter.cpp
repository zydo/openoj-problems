class ScoreTable {
  public:
    ScoreTable();
    void recordScore(int playerId, int score);
    long long topScores(int K);
    void reset(int playerId);
};
