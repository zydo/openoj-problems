class Rover {
  public:
    Rover(int width, int height);
    void step(int num);
    vector<int> getPos();
    string getDir();
};
