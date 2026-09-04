class RingBufferQueue {
  public:
    RingBufferQueue(int k);
    bool enQueue(int value);
    bool deQueue();
    int Front();
    int Rear();
    bool isEmpty();
    bool isFull();
};
