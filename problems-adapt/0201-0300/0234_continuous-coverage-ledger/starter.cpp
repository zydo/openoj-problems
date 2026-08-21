class CoverageLedger {
  public:
    CoverageLedger();
    void addSpan(int start, int end);
    bool coversSpan(int start, int end);
    void removeSpan(int start, int end);
};
