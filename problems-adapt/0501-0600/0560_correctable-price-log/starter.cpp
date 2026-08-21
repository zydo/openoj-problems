class PriceLog {
  public:
    PriceLog();
    void record(int timestamp, int price);
    int latest();
    int highest();
    int lowest();
};
