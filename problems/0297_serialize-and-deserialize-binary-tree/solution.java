import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

class Codec {

    private static final int MARKER = 100001;

    private static final class Node {

        int val;
        Node left;
        Node right;

        Node(int val) {
            this.val = val;
        }
    }

    // Rebuild the tree from the marker array, then walk it in level order
    // emitting one token per slot ("null" for a missing child), trimming
    // trailing nulls.
    public String serialize(int[] root) {
        Node tree = build(root);
        List<String> tokens = new ArrayList<>();
        Queue<Node> queue = new LinkedList<>();
        if (tree != null) {
            queue.offer(tree);
        }
        // The queue holds nulls too: a null emits a token and enqueues
        // nothing, so every child slot gets exactly one token.
        while (!queue.isEmpty()) {
            Node node = queue.poll();
            if (node == null) {
                tokens.add("null");
                continue;
            }
            tokens.add(Integer.toString(node.val));
            queue.offer(node.left);
            queue.offer(node.right);
        }
        // Trailing nulls only mark absent slots, so trimming them keeps
        // the sequence uniquely recoverable.
        while (
            !tokens.isEmpty() && tokens.get(tokens.size() - 1).equals("null")
        ) {
            tokens.remove(tokens.size() - 1);
        }
        return String.join(",", tokens);
    }

    // Mirror image: split the tokens, rebuild the tree with a queue (null
    // slots fill a child position without joining it), walk back to markers.
    public int[] deserialize(String data) {
        if (data.isEmpty()) {
            return new int[0];
        }
        String[] tokens = data.split(",", -1);
        Node root = new Node(Integer.parseInt(tokens[0]));
        Deque<Node> queue = new ArrayDeque<>();
        queue.offer(root);
        int index = 1;
        while (!queue.isEmpty() && index < tokens.length) {
            // Consume tokens as child slots in queue order; a "null"
            // fills the slot without adding a node to the queue.
            Node node = queue.poll();
            if (index < tokens.length) {
                String token = tokens[index++];
                if (!token.equals("null")) {
                    node.left = new Node(Integer.parseInt(token));
                    queue.offer(node.left);
                }
            }
            if (index < tokens.length) {
                String token = tokens[index++];
                if (!token.equals("null")) {
                    node.right = new Node(Integer.parseInt(token));
                    queue.offer(node.right);
                }
            }
        }
        return level(root);
    }

    private static Node build(int[] level) {
        if (level == null || level.length == 0) {
            return null;
        }
        Node root = new Node(level[0]);
        Deque<Node> queue = new ArrayDeque<>();
        queue.offer(root);
        int index = 1;
        while (!queue.isEmpty() && index < level.length) {
            // MARKER fills an absent child slot; markers have no
            // children, so they never join the queue.
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

    private static int[] level(Node root) {
        List<Integer> values = new ArrayList<>();
        Queue<Node> queue = new LinkedList<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            Node node = queue.poll();
            if (node == null) {
                values.add(MARKER);
                continue;
            }
            values.add(node.val);
            queue.offer(node.left);
            queue.offer(node.right);
        }
        while (!values.isEmpty() && values.get(values.size() - 1) == MARKER) {
            values.remove(values.size() - 1);
        }
        int[] out = new int[values.size()];
        for (int index = 0; index < out.length; index++) {
            out[index] = values.get(index);
        }
        return out;
    }
}
