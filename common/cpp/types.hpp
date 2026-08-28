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

struct QuadNode {
    bool val;
    bool isLeaf;
    QuadNode *topLeft, *topRight, *bottomLeft, *bottomRight;
    QuadNode(bool v, bool l) : val(v), isLeaf(l), topLeft(nullptr), topRight(nullptr),
        bottomLeft(nullptr), bottomRight(nullptr) {}
    QuadNode(bool v, bool l, QuadNode* tl, QuadNode* tr, QuadNode* bl, QuadNode* br) :
        val(v), isLeaf(l), topLeft(tl), topRight(tr), bottomLeft(bl), bottomRight(br) {}
};

class NestedInteger {
    bool held;
    long long integer;
    std::vector<NestedInteger> list;
public:
    NestedInteger() : held(false), integer(0) {}
    NestedInteger(long long value) : held(true), integer(value) {}
    bool isInteger() const { return held; }
    long long getInteger() const { return integer; }
    void setInteger(long long value) { held = true; integer = value; list.clear(); }
    void add(const NestedInteger& item) { held = false; list.push_back(item); }
    const std::vector<NestedInteger>& getList() const { return list; }
};

struct NodeWithNext {
    int val;
    NodeWithNext *left, *right, *next, *parent;
    explicit NodeWithNext(int x) : val(x), left(nullptr), right(nullptr),
        next(nullptr), parent(nullptr) {}
};

struct MultiListNode {
    int val;
    MultiListNode *prev, *next, *child;
    explicit MultiListNode(int x) : val(x), prev(nullptr), next(nullptr),
        child(nullptr) {}
};
