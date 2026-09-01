class AffineSequence {
  public:
    AffineSequence();
    void append(int val);
    void shiftAll(int inc);
    void scaleAll(int m);
    int getIndex(int idx);
};
