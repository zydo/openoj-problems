// A plain key -> value hash map: no nodes, no per-put maintenance. put()
// stores the pair and stops -- the map carries no structure beyond the
// pairs themselves -- and prefixSum() pays for that at query time,
// scanning every stored key and summing the values of those that start
// with the prefix.
class PrefixSumMap {
    constructor() {
        this.values = new Map();
    }

    put(key, val) {
        this.values.set(key, val);
    }

    prefixSum(prefix) {
        let total = 0;
        for (const [key, val] of this.values) {
            if (key.startsWith(prefix)) {
                total += val;
            }
        }
        return total;
    }
}
