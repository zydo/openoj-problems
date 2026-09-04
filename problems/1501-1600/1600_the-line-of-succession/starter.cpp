class SuccessionOrder {
  public:
    SuccessionOrder(string kingName);
    void birth(string parentName, string childName);
    void death(string name);
    vector<string> getInheritanceOrder();
};
