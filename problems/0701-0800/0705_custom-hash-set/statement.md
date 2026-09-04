# Custom Hash Set

## Description

Build a set of integers from scratch, without relying on any built-in
hash-table library.

Implement the `CustomHashSet` class:

- `CustomHashSet()` initializes an empty set.
- `add(key)` inserts `key` into the set.
- `remove(key)` removes `key` from the set if present; does nothing
  otherwise.
- `contains(key)` returns whether `key` is currently in the set.

### Example 1

```text
Input:
["CustomHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
[[], [5], [9], [5], [7], [9], [9], [9], [9]]
Output: [null, null, null, true, false, null, true, null, false]
Explanation:
CustomHashSet set = new CustomHashSet();
set.add(5);      // set = {5}
set.add(9);      // set = {5, 9}
set.contains(5); // returns true
set.contains(7); // returns false — never added
set.add(9);      // set = {5, 9} — adding an existing key changes nothing
set.contains(9); // returns true
set.remove(9);   // set = {5}
set.contains(9); // returns false — just removed
```

### Constraints

- `0 <= key <= 10⁶`
- At most `10⁴` calls total are made to `add`, `remove`, and `contains`.
