class TreeCodec {
  public:
    TreeCodec();
    string serialize(TreeNode *root);
    TreeNode *deserialize(string data);
};
