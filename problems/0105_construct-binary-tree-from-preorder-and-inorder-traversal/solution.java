import java.util.HashMap;
import java.util.Map;

class Solution {

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        Map<Integer, Integer> index = new HashMap<>();
        for (int i = 0; i < inorder.length; i++) {
            index.put(inorder[i], i);
        }
        int[] position = { 0 };
        return build(preorder, index, position, 0, inorder.length);
    }

    private TreeNode build(
        int[] preorder,
        Map<Integer, Integer> index,
        int[] position,
        int low,
        int high
    ) {
        if (low >= high) {
            return null;
        }
        int value = preorder[position[0]];
        position[0]++;
        TreeNode node = new TreeNode(value);
        int mid = index.get(value);
        node.left = build(preorder, index, position, low, mid);
        node.right = build(preorder, index, position, mid + 1, high);
        return node;
    }
}
