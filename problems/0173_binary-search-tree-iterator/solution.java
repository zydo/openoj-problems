import java.util.ArrayDeque;
import java.util.Deque;
import java.util.LinkedList;
import java.util.Queue;

class BSTIterator {

    private static final int MARKER = -1;

    private static final class Node {

        int val;
        Node left;
        Node right;

        Node(int val) {
            this.val = val;
        }
    }

    private final Deque<Node> stack = new ArrayDeque<>();

    // Rebuild the tree from the trimmed marker level-order array, then push
    // the left spine of the root: the stack top is the smallest unvisited
    // node and the stack holds exactly one root-to-node path (O(h) memory).
    public BSTIterator(int[] root) {
        pushSpine(build(root));
    }

    private static Node build(int[] level) {
        if (level == null || level.length == 0) {
            return null;
        }
        Node root = new Node(level[0]);
        Queue<Node> queue = new LinkedList<>();
        queue.offer(root);
        int index = 1;
        while (!queue.isEmpty() && index < level.length) {
            Node node = queue.poll();
            if (index < level.length) {
                int value = level[index++];
                if (value != MARKER) {
                    node.left = new Node(value);
                    queue.offer(node.left);
                }
            }
            if (index < level.length) {
                int value = level[index++];
                if (value != MARKER) {
                    node.right = new Node(value);
                    queue.offer(node.right);
                }
            }
        }
        return root;
    }

    private void pushSpine(Node node) {
        while (node != null) {
            stack.push(node);
            node = node.left;
        }
    }

    // Pop the smallest unvisited node, then schedule its right subtree by
    // pushing that child's left spine.
    public int next() {
        Node node = stack.pop();
        pushSpine(node.right);
        return node.val;
    }

    public boolean hasNext() {
        return !stack.isEmpty();
    }
}
