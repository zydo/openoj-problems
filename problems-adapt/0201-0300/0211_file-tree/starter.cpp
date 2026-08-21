class FileTree {
  public:
    FileTree();
    vector<string> ls(string path);
    void mkdir(string path);
    void appendToFile(string filePath, string content);
    string readFile(string filePath);
};
