class UpdatableRegions {
  public:
    UpdatableRegions(vector<vector<int>> matrix);
    void setValue(int row, int col, int value);
    long long regionSum(int top, int left, int bottom, int right);
};
