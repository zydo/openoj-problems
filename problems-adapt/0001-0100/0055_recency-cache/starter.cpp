class RecencyCache {
  public:
    RecencyCache(int capacity);
    int get(int key);
    void put(int key, int value);
};
