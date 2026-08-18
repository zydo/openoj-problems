# Random Draw Multiset

## Description

Build a container that holds a multiset of integers — the same value may be
stored any number of times — and supports adding an occurrence, dropping an
occurrence, and reporting a held value, each in **average O(1)** time.

Implement the `RandomDrawMultiset` class:

- `RandomDrawMultiset()` — start with an empty multiset.
- `boolean insert(int val)` — add **one** occurrence of `val`, even when
  `val` is already held. Report `true` exactly when `val` was entirely absent
  beforehand, `false` when at least one occurrence already existed.
- `boolean remove(int val)` — drop **one** occurrence of `val` if any are
  held. Report `true` exactly when `val` was held beforehand.
- `int draw()` — report a held value. Only ever called while the multiset is
  non-empty.

### Which occurrence the judge expects

A random report cannot be checked against a fixed answer, so the judge pins
the whole container down to one deterministic behaviour. Every correct
implementation must act as if it kept a plain array `a` under exactly these
rules:

1. `insert(val)` places `val` after the last entry of `a`.
2. `remove(val)` targets the **leftmost** copy of `val`, say at index `i`.
   The final entry of `a` is copied into slot `i` (unless `i` is itself the
   final slot) and `a` loses its last slot. Entries other than the targeted
   one may end up reordered.
3. `draw()` reports whatever sits at `a[0]`.

Follow the rules and your return values match the expected ones exactly. The
canonical construction keeps `a` next to a hash map from each value to the
ordered collection of indices where it sits in `a`, repaired on every add,
copy, and drop.

### Example 1

```text
Input:
["RandomDrawMultiset", "insert", "insert", "insert", "draw", "remove", "draw", "remove", "draw"]
[[], [3], [8], [3], [], [3], [], [8], []]
Output: [null, true, true, false, 3, true, 3, true, 3]
Explanation:
RandomDrawMultiset bag = new RandomDrawMultiset();
bag.insert(3);  // true — 3 was absent.      a = [3]
bag.insert(8);  // true —                    a = [3, 8]
bag.insert(3);  // false — 3 already held.   a = [3, 8, 3]
bag.draw();     // reports a[0] = 3
bag.remove(3);  // the leftmost 3 (slot 0) is targeted; the final entry
                // is also a 3 and lands on itself, so a copy survives:
                // a = [3, 8]
bag.draw();     // reports 3 again — a 3 is still held
bag.remove(8);  // the final entry 8 fills the slot of the leftmost 8,
                // so a = [3]
bag.draw();     // reports 3
```

### Example 2

```text
Input:
["RandomDrawMultiset", "insert", "insert", "insert", "remove", "draw", "insert", "remove", "draw", "remove", "draw"]
[[], [10], [5], [7], [10], [], [5], [5], [], [7], []]
Output: [null, true, true, true, true, 7, false, true, 7, true, 5]
Explanation:
RandomDrawMultiset bag = new RandomDrawMultiset();
bag.insert(10);  // a = [10]
bag.insert(5);   // a = [10, 5]
bag.insert(7);   // a = [10, 5, 7]
bag.remove(10);  // the final entry 7 moves into slot 0: a = [7, 5]
bag.draw();      // reports 7
bag.insert(5);   // false — 5 is held; a = [7, 5, 5]
bag.remove(5);   // the leftmost 5 (slot 1) is targeted, the final 5 lands
                 // on itself: a = [7, 5]
bag.draw();      // reports 7
bag.remove(7);   // the final entry 5 moves into slot 0: a = [5]
bag.draw();      // reports 5
```

### Example 3

```text
Input:
["RandomDrawMultiset", "remove", "insert", "insert", "draw", "remove", "draw", "insert", "draw"]
[[], [2], [2], [9], [], [2], [], [2], []]
Output: [null, false, true, true, 2, true, 9, true, 9]
Explanation:
RandomDrawMultiset bag = new RandomDrawMultiset();
bag.remove(2);  // false — nothing is held yet
bag.insert(2);  // a = [2]
bag.insert(9);  // a = [2, 9]
bag.draw();     // reports 2
bag.remove(2);  // the final entry 9 fills slot 0: a = [9]
bag.draw();     // reports 9
bag.insert(2);  // a = [9, 2]
bag.draw();     // reports 9
```

### Constraints

- `-2³¹ <= val <= 2³¹ - 1`
- At most `2 * 10⁵` calls to `insert`, `remove`, and `draw` in total.
- `draw` is only called while the multiset holds at least one value.

### Follow-up

Meet the average `O(1)` bound with one backing array plus a hash map from
each value to an ordered set of the indices where it currently sits. What
does the ordered-set discipline buy you when the judge always targets the
leftmost copy?

## Hints

### Hint 1

An array alone cannot certify absence without a scan; a hash set alone cannot
hand back "the entry at slot 0". Carry both: the entries in an array `a`, and
next to it a map from each value to the set of slots where it sits. The map
answers presence and locates copies; the array serves `a[0]`.

### Hint 2

Erasing from the middle of an array is linear — unless reordering is allowed.
Write the **final** entry over the slot being vacated, then drop the final
slot. Constant time, but the relocated entry's slot set must be repaired: it
loses the final index and gains the vacated one.

### Hint 3

The subtle case: the value being dropped also occupies the final slot. The
copy then writes a value onto a slot that already holds it, so its slot set
must shed exactly the final index and keep the vacated slot's entry — one
copy remains behind. And because the judge always targets the leftmost copy,
each slot set must answer "smallest index" quickly, which is what keeping it
sorted buys.
