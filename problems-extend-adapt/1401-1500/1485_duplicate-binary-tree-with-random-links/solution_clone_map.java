import java.util.HashMap;
import java.util.Map;

class Solution {

    private Map<RandomTreeNode, RandomTreeNode> copies = new HashMap<>();

    public RandomTreeNode duplicateRandomLinkedTree(RandomTreeNode root) {
        if (root == null) {
            return null;
        }
        RandomTreeNode existing = copies.get(root);
        if (existing != null) {
            return existing;
        }
        RandomTreeNode copy = new RandomTreeNode(root.val);
        copies.put(root, copy);
        copy.left = duplicateRandomLinkedTree(root.left);
        copy.right = duplicateRandomLinkedTree(root.right);
        copy.random = duplicateRandomLinkedTree(root.random);
        return copy;
    }
}
