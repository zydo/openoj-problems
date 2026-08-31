# Frequency Extremes Registry

## Description

Maintain a registry of string keys, each with an integer count. The two
interesting queries name a key at the maximum count and a key at the minimum
count.

Implement the `FrequencyExtremes` class:

- `FrequencyExtremes()` creates an empty registry.
- `void increment(String key)` raises `key`'s count by one, inserting `key`
  with count `1` when it is new.
- `void decrement(String key)` lowers `key`'s count by one, removing the key
  when its count would reach `0`. The key is guaranteed to exist.
- `String maximumKey()` returns a key at the largest count, or `""` when the
  registry is empty.
- `String minimumKey()` returns a key at the smallest count, or `""` when the
  registry is empty.

When several keys share an extreme count, both queries return the
lexicographically smallest among them, so the answers are deterministic.

Every operation must run in `O(1)` average time.

### Example 1

```text
Input:
["FrequencyExtremes", "increment", "increment", "increment", "increment", "increment", "increment", "decrement", "maximumKey", "minimumKey", "increment", "increment", "maximumKey", "minimumKey"]
[[], ["a"], ["a"], ["a"], ["b"], ["b"], ["c"], ["b"], [], [], ["b"], ["c"], [], []]
Output: [null, null, null, null, null, null, null, null, "a", "b", null, null, "a", "b"]
Explanation: After the first six calls, a has count 3, b count 2, and c count
1. Decrementing b leaves counts a:3, b:1, c:1 — the maximum key is "a" and the
minimum (lexicographically smallest at count 1) is "b". Raising b and c to 2
keeps "a" at the top and makes "b" the smallest key at the new minimum.
```

### Constraints

- `1 <= key.length <= 10`
- `key` consists of lowercase English letters.
- Every `decrement` names an existing key.
- At most `5 × 10⁴` calls are made in total.
