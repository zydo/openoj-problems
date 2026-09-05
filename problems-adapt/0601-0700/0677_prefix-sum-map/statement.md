# Prefix Sum Map

## Description

Build a map from string keys to integer values that can also answer
prefix-sum queries.

Implement the `PrefixSumMap` class:

- `PrefixSumMap()` creates an empty map.
- `void put(String key, int val)` stores `val` under `key`, replacing
  whatever value `key` held before.
- `int prefixSum(String prefix)` returns the sum of every stored value
  whose key starts with `prefix`.

### Example 1

```text
Input:
["PrefixSumMap", "put", "prefixSum", "put", "prefixSum"]
[[], ["apple",3], ["ap"], ["app",2], ["ap"]]
Output: [null, null, 3, null, 5]
Explanation: After storing apple=3, the prefix "ap" sums to 3; storing
app=2 raises the "ap" sum to 5.
```

### Constraints

- `1 <= key.length, prefix.length <= 50`
- Keys and prefixes are lowercase English letters.
- `1 <= val <= 1000`
- At most `50` calls are made to `put` and `prefixSum`.
