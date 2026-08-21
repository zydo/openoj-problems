class TransitLog {
  public:
    TransitLog();
    void tapIn(int id, string stop, int t);
    void tapOut(int id, string stop, int t);
    double averageTrip(string fromStop, string toStop);
};
