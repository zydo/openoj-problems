class FrequencyCache {
  public:
    FrequencyCache(int capacity);
    int get(int key);
    void put(int key, int value);
};
