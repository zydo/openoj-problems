# Insert Delete GetRandom O(1)

## Description

Implement the `RandomizedSet` class:

- `RandomizedSet()` Initializes the `RandomizedSet` object.
- `boolean insert(int val)` Inserts the item `val` into the set if not
  present. Returns `true` if the item was not present, `false` otherwise.
- `boolean remove(int val)` Removes the item `val` from the set if present.
  Returns `true` if the item was present, `false` otherwise.
- `int getRandom()` Returns an element of the current set. It is only called
  when the set contains at least one element.

Each of the three operations must run in **average O(1)** time.

### Deterministic judging rule

In the original formulation `getRandom` picks an element uniformly at random,
which cannot be compared against an expected output. OpenOJ therefore judges a
**deterministic variant** in which the set behaves as if it were backed by a
plain array `a` maintained under exactly these rules:

1. `insert(val)` appends `val` to the **end** of `a` (and leaves `a` untouched
   when `val` is already present — in a set each value occurs at most once).
2. `remove(val)` locates the occurrence of `val` in `a`, at index `i`. The
   element at the **end** of `a` is moved into slot `i` (unless `i` already is
   the end), and `a` shrinks by one. The relative order of the other elements
   may change.
3. `getRandom()` returns `a[0]`, the element stored at the smallest index.

Any implementation that follows these rules produces identical return values —
the classic one keeps `a` together with a hash map from each value to its
index in `a`, updated on every insert, swap and removal.

### Example 1

```text
Input:
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output: [null, true, false, true, 1, true, false, 2]
Explanation:
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1);   // true — 1 was absent.  a = [1]
randomizedSet.remove(2);   // false — 2 is not present
randomizedSet.insert(2);   // true — a = [1, 2]
randomizedSet.getRandom(); // returns a[0] = 1
randomizedSet.remove(1);   // true — the last element 2 fills slot 0, so a = [2]
randomizedSet.insert(2);   // false — 2 is already present
randomizedSet.getRandom(); // returns a[0] = 2
```

### Example 2

```text
Input:
["RandomizedSet", "remove", "insert", "insert", "getRandom", "remove", "getRandom", "remove", "insert", "getRandom"]
[[], [9], [9], [4], [], [9], [], [4], [7], []]
Output: [null, false, true, true, 9, true, 4, true, true, 7]
Explanation:
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.remove(9);   // false — the set starts empty
randomizedSet.insert(9);   // true — a = [9]
randomizedSet.insert(4);   // true — a = [9, 4]
randomizedSet.getRandom(); // returns a[0] = 9
randomizedSet.remove(9);   // true — the last element 4 fills slot 0, so a = [4]
randomizedSet.getRandom(); // returns a[0] = 4
randomizedSet.remove(4);   // true — a = []
randomizedSet.insert(7);   // true — a = [7]
randomizedSet.getRandom(); // returns a[0] = 7
```

### Constraints

- `-2³¹ <= val <= 2³¹ - 1`
- At most `2 * 10⁵` calls in total will be made to `insert`, `remove`, and
  `getRandom`.
- `getRandom` is only called when the set contains at least one element.

### Follow-up

Could you implement each of `insert`, `remove`, and `getRandom` in average
`O(1)` time using one backing array plus a hash map from values to indices?

## Hints

### Hint 1

An array alone cannot tell you whether a value is present without a scan, and
a hash set alone cannot deliver `a[0]` and `a[-1]` positions on demand.
Combine them: keep the elements in an array `a` and, alongside it, a hash map
from each value to its index in `a`. The map answers presence and locates
occurrences; the array answers `a[0]` for `getRandom` and gives removal its
swap partner.

### Hint 2

Deleting from the middle of an array costs `O(n)` — unless you may reorder.
Overwrite the slot being removed with the **last** element of the array and
then drop the final slot. That is `O(1)`, but remember to repair the moved
element's entry in the index map: its index changes from the last index to the
vacated one.

### Hint 3

Mind the self-swap: when the value being removed is itself the last element,
the vacated slot and the last slot coincide, so the array just shrinks — and
the removed value's map entry is deleted either way. Since each value occurs
at most once, there is exactly one index to fix per removal.
