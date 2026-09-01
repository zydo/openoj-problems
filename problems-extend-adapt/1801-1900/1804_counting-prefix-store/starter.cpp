class PrefixStore {
  public:
    PrefixStore();
    void insert(string word);
    int countExact(string word);
    int countPrefixed(string prefix);
    void erase(string word);
};
