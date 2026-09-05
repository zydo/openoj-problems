class MovieRentalDesk {
  public:
    MovieRentalDesk(int n, vector<vector<int>> entries);
    vector<int> search(int movie);
    void rent(int shop, int movie);
    void handBack(int shop, int movie);
    vector<vector<int>> report();
};
