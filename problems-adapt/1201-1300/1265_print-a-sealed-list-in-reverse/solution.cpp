class SealedListNode;

class Solution {
  public:
    void emitListInReverse(SealedListNode &sealedListNode) {
        // Forward is the only direction the API offers, and output must run
        // backward — recurse on a pointer that walks the next chain, since
        // only the sealedListNode arrives by reference; null marks the end of the
        // list.
        recurse(&sealedListNode);
    }

  private:
    void recurse(SealedListNode *node) {
        if (node == nullptr) {
            return;
        }
        recurse(node->successor());
        node->emitValue();
    }
};
