class NewsBoard {
  public:
    NewsBoard();
    void postMessage(int userId, int messageId);
    vector<int> getFeed(int userId);
    void follow(int followerId, int followeeId);
    void unfollow(int followerId, int followeeId);
};
