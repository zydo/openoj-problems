class BoundedStackShelf {
  public:
    BoundedStackShelf(int capacity);
    void push(int val);
    int pop();
    int popFromStack(int index);
};
