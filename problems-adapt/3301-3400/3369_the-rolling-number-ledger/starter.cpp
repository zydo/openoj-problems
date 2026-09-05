class RollingStats {
  public:
    RollingStats();
    void addNumber(int number);
    void removeFirstAddedNumber();
    int getMean();
    int getMedian();
    int getMode();
};
