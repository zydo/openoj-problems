# Versioned Array

## Description

An array of integers starts out as all zeros and evolves through `set` calls.
At any moment its current state can be **committed**: frozen under an id, so
that the values held at that moment stay readable forever, even after further
`set` calls change the live array.

Implement the `VersionedArray` class:

- `VersionedArray(int length)` — create the array with `length` positions, all
  equal to `0`.
- `void set(int index, int val)` — assign `val` to position `index` of the
  current (still evolving) state.
- `int commit()` — freeze the current state under the next version id and
  return that id. Ids are handed out in call order, starting from `0`.
- `int get(int index, int commit_id)` — report the value position `index` had
  in version `commit_id`.

### Example 1

```text
Input:
["VersionedArray", "set", "commit", "set", "set", "commit", "get", "get", "get"]
[[2], [1, 4], [], [1, 9], [0, 3], [], [1, 0], [1, 1], [0, 1]]
Output: [null, null, 0, null, null, 1, 4, 9, 3]
Explanation:
VersionedArray arr = new VersionedArray(2); // [0, 0]
arr.set(1, 4);    // [0, 4]
arr.commit();     // version 0 records [0, 4]
arr.set(1, 9);    // [0, 9]
arr.set(0, 3);    // [3, 9]
arr.commit();     // version 1 records [3, 9]
arr.get(1, 0);    // 4 — version 0 is untouched by the later writes
arr.get(1, 1);    // 9
arr.get(0, 1);    // 3
```

### Example 2

```text
Input:
["VersionedArray", "commit", "set", "set", "commit", "get", "get"]
[[1], [], [0, 6], [0, 2], [], [0, 0], [0, 1]]
Output: [null, 0, null, null, 1, 0, 2]
Explanation:
VersionedArray arr = new VersionedArray(1);
arr.commit();     // version 0 records the initial [0]
arr.set(0, 6);
arr.set(0, 2);    // the 6 is overwritten before any commit sees it
arr.commit();     // version 1 records [2]
arr.get(0, 0);    // 0
arr.get(0, 1);    // 2
```

### Constraints

- `1 <= length <= 5 * 10⁴`
- `0 <= index < length`
- `0 <= val <= 10⁹`
- `0 <= commit_id <` the number of `commit()` calls made so far
- At most `5 * 10⁴` calls in total to `set`, `commit`, and `get`.

### Follow-up

Freezing the whole array on every `commit` is quadratic work in the worst
case. Can each version cost no more than the writes that produced it?

## Hints

### Hint 1

Duplicating the entire array at each freeze is what makes versions expensive —
and consecutive versions usually differ in a handful of positions. Record
**what changed** instead: a position only needs the sequence of values written
to it, each tagged with the version being built when the write happened.

### Hint 2

Give every position a history of `(commit_id, val)` pairs. A `set` appends to
one position's history only; `commit()` advances a counter — the version
itself is never materialized, it is implied by the histories.

### Hint 3

Histories are sorted by construction, since version ids never decrease, so
`get(index, commit_id)` binary-searches for the rightmost entry whose id does
not exceed the query. That entry's value is what the position held at that
version; no entry at or before the query means the position was still `0`.
Two writes landing inside the same version must not both survive — the later
one replaces the last entry.
