class LayerCube {
  public:
    LayerCube(int n);
    void setCell(int x, int y, int z);
    void unsetCell(int x, int y, int z);
    int densestLayer();
};
