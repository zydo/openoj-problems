class OneEditDictionary {
  public:
    OneEditDictionary();
    void loadWords(vector<string> dictionary);
    bool matchesOneEdit(string searchWord);
};
