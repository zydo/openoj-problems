import java.util.HashMap;
import java.util.Map;

class PrefixSumMap {

    // A plain key -> value hash map: no nodes, no per-put maintenance.
    // put() stores the pair and stops -- the map carries no structure
    // beyond the pairs themselves -- and prefixSum() pays for that at
    // query time, scanning every stored key and summing the values of
    // those that start with the prefix.
    private final Map<String, Integer> values = new HashMap<>();

    public PrefixSumMap() {}

    public void put(String key, int val) {
        values.put(key, val);
    }

    public int prefixSum(String prefix) {
        long total = 0;
        for (Map.Entry<String, Integer> entry : values.entrySet()) {
            if (entry.getKey().startsWith(prefix)) {
                total += entry.getValue();
            }
        }
        return (int) total;
    }
}
