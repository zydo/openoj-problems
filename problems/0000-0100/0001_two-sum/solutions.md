# Solutions — Two Sum

## Hash map, one pass

For each number `value` we are really looking for its partner, `target - value`. A hash map from value to index answers "have I already seen the complement, and where" in constant time, which turns the nested brute-force scan into a single pass.

The code walks `nums` once with `enumerate`. At each position it first computes the complement and checks whether it is already in the `seen` map; only afterwards does it record the current value at its index. Doing the lookup before the insert is what guarantees the two returned indices are different, so the same element is never used twice — the current element cannot match itself, because it is not in the map yet.

As soon as a complement is found the method returns `[seen[complement], index]`, the earlier index first. If the loop finishes without a match it returns an empty list, though the statement promises every input has exactly one solution. Duplicate values are handled naturally: for `nums = [3, 3]` and `target = 6`, the first 3 is stored in `seen`, and the second 3 finds it as its complement.

**Complexity:** `O(n)` time, `O(n)` space.
