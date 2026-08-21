class UpdatableRanges {
  public:
    UpdatableRanges(vector<int> nums);
    void setValue(int index, int value);
    long long rangeSum(int left, int right);
};
