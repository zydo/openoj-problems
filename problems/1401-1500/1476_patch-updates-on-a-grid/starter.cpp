class PatchableGrid {
  public:
    PatchableGrid(vector<vector<long long>> rectangle);
    void updatePatch(int row1, int col1, int row2, int col2, long long newValue);
    long long getValue(int row, int col);
};
