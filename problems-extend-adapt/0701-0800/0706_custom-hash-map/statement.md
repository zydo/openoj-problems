# Custom Hash Map

## Description

Build a map from integer keys to integer values, without relying on any
built-in hash-table library.

Implement the `CustomHashMap` class:

- `CustomHashMap()` initializes an empty map.
- `put(key, value)` inserts `(key, value)`, overwriting any existing
  value already stored for `key`.
- `get(key)` returns the value stored for `key`, or `-1` if `key` has no
  stored value.
- `remove(key)` deletes the mapping for `key` if one exists; does nothing
  otherwise.

### Example 1

```text
Input:
["CustomHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [4, 40], [8, 80], [4], [6], [8, 81], [8], [8], [8]]
Output: [null, null, null, 40, -1, null, 81, null, -1]
Explanation:
CustomHashMap map = new CustomHashMap();
map.put(4, 40); // {4: 40}
map.put(8, 80); // {4: 40, 8: 80}
map.get(4);     // returns 40
map.get(6);     // returns -1 — no mapping
map.put(8, 81); // {4: 40, 8: 81} — overwrites 8's old value
map.get(8);     // returns 81
map.remove(8);  // {4: 40}
map.get(8);     // returns -1 — just removed
```

### Constraints

- `0 <= key, value <= 10⁶`
- At most `10⁴` calls total are made to `put`, `get`, and `remove`.
