class PrefixTree {
  public:
    PrefixTree();
    void insert(string word);
    bool search(string word);
    bool hasPrefix(string prefix);
};
