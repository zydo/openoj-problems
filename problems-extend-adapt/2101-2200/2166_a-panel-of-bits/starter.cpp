class BitPanel {
  public:
    BitPanel(int size);
    void fix(int idx);
    void unfix(int idx);
    void flip();
    bool all();
    bool one();
    int count();
    string toString();
};
