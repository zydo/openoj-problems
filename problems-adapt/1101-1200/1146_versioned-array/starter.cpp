class VersionedArray {
  public:
    VersionedArray(int length);
    void set(int index, int val);
    int commit();
    int get(int index, int commit_id);
};
