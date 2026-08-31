class NumberPool {
  public:
    NumberPool(int maxNumbers);
    int acquire();
    bool isAvailable(int number);
    void returnNumber(int number);
};
