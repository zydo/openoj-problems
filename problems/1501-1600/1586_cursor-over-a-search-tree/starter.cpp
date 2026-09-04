class TreeCursor {
  public:
    TreeCursor(TreeNode *root);
    bool hasNext();
    int next();
    bool hasPrev();
    int prev();
};
