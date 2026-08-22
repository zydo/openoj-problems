class HistoryStore {
  public:
    HistoryStore();
    void set(string key, string value, int timestamp);
    string get(string key, int timestamp);
};
