import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ThreadLocalRandom;

class RandomDrawWithExclusions {

    // The n - b allowed values are compressed into [0, n - b); each
    // excluded value inside that range is remapped onto a free value from
    // the upper part [n - b, n). pick() then makes exactly one random call
    // over the compressed range and follows the remap — uniform over exactly
    // the allowed values.
    private final long size;
    private final Map<Integer, Integer> mapping = new HashMap<>();

    public RandomDrawWithExclusions(int n, int[] excluded) {
        Set<Integer> blocked = new HashSet<>();
        for (int value : excluded) {
            blocked.add(value);
        }
        this.size = (long) n - blocked.size();
        long free = size; // scans [size, n) for values that are not excluded
        for (int value : blocked) {
            if (value < size) {
                while (blocked.contains((int) free)) {
                    free++;
                }
                mapping.put(value, (int) free);
                free++;
            }
        }
    }

    public int pick() {
        int draw = (int) ThreadLocalRandom.current().nextLong(size);
        return mapping.getOrDefault(draw, draw);
    }
}
