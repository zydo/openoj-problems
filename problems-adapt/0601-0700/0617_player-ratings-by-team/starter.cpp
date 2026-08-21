class PlayerRatings {
  public:
    PlayerRatings(vector<string> players, vector<string> teams, vector<int> scores);
    void setRating(string player, int score);
    string bestPlayer(string team);
};
