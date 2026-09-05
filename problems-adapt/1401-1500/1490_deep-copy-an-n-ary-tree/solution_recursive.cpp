class Solution {
  public:
    Node *copyTree(Node *root) {
        if (root == nullptr)
            return nullptr;
        Node *clone = new Node(root->val);
        for (Node *child : root->children)
            clone->children.push_back(copyTree(child));
        return clone;
    }
};
