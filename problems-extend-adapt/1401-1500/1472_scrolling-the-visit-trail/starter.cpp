class VisitTrail {
  public:
    VisitTrail(string homepage);
    void visit(string url);
    string back(int steps);
    string forward(int steps);
};
