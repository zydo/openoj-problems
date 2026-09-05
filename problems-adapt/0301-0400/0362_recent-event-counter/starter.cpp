class RecentEventCounter {
  public:
    RecentEventCounter();
    void recordEvent(int timestamp);
    int countRecent(int timestamp);
};
