class MemoryMap {
  public:
    MemoryMap(int n);
    int allocate(int size, int mID);
    int freeMemory(int mID);
};
