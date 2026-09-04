import java.util.HashMap;
import java.util.Map;

class PrefixSumMap {

    // A prefix trie whose every node on a key's path carries the prefixSum of the
    // current values of all live keys passing through it: put() adds the
    // key's CHANGE in value along its path -- a side map remembers the
    // previous value, so overwriting a key corrects the running totals
    // instead of double-counting -- and prefixSum() walks the prefix and returns
    // the node's total, or 0 when the walk falls off the trie.
    private static class Node {

        final Map<Character, Node> children = new HashMap<>();
        long score;
    }

    private final Node root = new Node();
    private final Map<String, Integer> values = new HashMap<>();

    public PrefixSumMap() {}

    public void put(String key, int val) {
        long delta = val - values.getOrDefault(key, 0);
        values.put(key, val);
        Node node = root;
        for (int index = 0; index < key.length(); ++index) {
            node = node.children.computeIfAbsent(key.charAt(index), letter -> new Node());
            node.score += delta;
        }
    }

    public int prefixSum(String prefix) {
        Node node = root;
        for (int index = 0; index < prefix.length(); ++index) {
            node = node.children.get(prefix.charAt(index));
            if (node == null) {
                return 0;
            }
        }
        return (int) node.score;
    }
}
