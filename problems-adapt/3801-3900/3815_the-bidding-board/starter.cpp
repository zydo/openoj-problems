class BidBoard {
  public:
    BidBoard();
    void addBid(int userId, int itemId, int bidAmount);
    void updateBid(int userId, int itemId, int newAmount);
    void removeBid(int userId, int itemId);
    int getHighestBidder(int itemId);
};
