class SeatPool {
  public:
    SeatPool(int n);
    int reserve();
    void release(int seat);
};
