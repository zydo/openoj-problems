class RunLengthCursor {
  public:
    RunLengthCursor(string compressedString);
    string nextChar();
    bool hasMore();
};
