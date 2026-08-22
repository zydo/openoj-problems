import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

class Solution {

    // One trie node: 26 child slots indexed by c - 'a'; word is set when a
    // catalog word ends here, top caches the best three words through it.
    private static final class Node {

        final Node[] children = new Node[26];
        String word;
        List<String> top = new ArrayList<>(3);
    }

    public String[][] suggestWords(String[] catalog, String query) {
        Node root = new Node();
        // spell every word down the tree; nodes appear only where needed
        for (String word : catalog) {
            Node node = root;
            for (int index = 0; index < word.length(); index++) {
                int slot = word.charAt(index) - 'a';
                if (node.children[slot] == null) {
                    node.children[slot] = new Node();
                }
                node = node.children[slot];
            }
            node.word = word;
        }
        // merge phase, deepest nodes first: a node's best three are its own
        // word first (a prefix of every other word through it, hence the
        // smallest), then the children's lists in letter order; every
        // existing child already holds a non-empty list, so gathering stops
        // by the third child consulted
        List<Node> order = new ArrayList<>();
        Deque<Node> pending = new ArrayDeque<>();
        pending.push(root);
        while (!pending.isEmpty()) {
            Node node = pending.pop();
            order.add(node);
            for (Node child : node.children) {
                if (child != null) {
                    pending.push(child);
                }
            }
        }
        for (int index = order.size() - 1; index >= 0; index--) {
            Node node = order.get(index);
            List<String> top = new ArrayList<>(3);
            if (node.word != null) {
                top.add(node.word);
            }
            for (Node child : node.children) {
                if (top.size() >= 3) break;
                if (child != null) {
                    for (String candidate : child.top) {
                        if (top.size() >= 3) break;
                        top.add(candidate);
                    }
                }
            }
            node.top = top;
        }
        // a keystroke is one pointer move; once a slot is empty it stays
        // empty, because prefixes only ever grow
        String[][] result = new String[query.length()][];
        Node node = root;
        for (int t = 0; t < query.length(); t++) {
            if (node != null) {
                node = node.children[query.charAt(t) - 'a'];
            }
            result[t] = node == null ? new String[0] : node.top.toArray(new String[0]);
        }
        return result;
    }
}
