class ChunkRegistry {
  public:
    ChunkRegistry(int chunks);
    int join(vector<int> ownedChunks);
    void leave(int userID);
    vector<int> request(int userID, int chunkID);
};
