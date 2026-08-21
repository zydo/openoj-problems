class PacketBuffer {
  public:
    PacketBuffer(int capacity);
    bool receive(int source, int destination, int timestamp);
    vector<int> dispatch();
    int countInWindow(int destination, int startTime, int endTime);
};
