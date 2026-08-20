// Common data types supplied to every C++ submission (compiled as one
// translation unit with the submission). Field layout is the judge's
// wire contract — see common/README.md.
#pragma once

#include <vector>

struct ListNode {
    int val;
    ListNode* next;
    explicit ListNode(int x) : val(x), next(nullptr) {}
};

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    explicit TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

struct Node {
    int val;
    std::vector<Node*> children;
    explicit Node(int x) : val(x) {}
};
