# Random Draw Set

## Description

Build a container that holds a set of integers and supports three things,
each in **average O(1)** time: adding a value, discarding a value, and
handing back one of the values it currently holds, chosen uniformly at
random.

Implement the `RandomDrawSet` class:

- `RandomDrawSet()` — start with an empty set.
- `boolean insert(int val)` — put `val` into the set unless it is already
  there. Report `true` exactly when `val` was absent beforehand.
- `boolean remove(int val)` — take `val` out of the set if it is there.
  Report `true` exactly when `val` was present beforehand.
- `int draw()` — return one of the values currently held, each with equal
  probability. Only ever called while the set is non-empty.

### How the draw is judged

A single random return value cannot be compared against a fixed expectation,
so the judge checks `draw` statistically. Every judged `draw` is repeated
around 2000 times: each returned value must be a member of the set at that
moment, and the observed frequency of every held value must stay within a
tolerance band of its fair share. Any genuinely uniform sampler passes.
`insert` and `remove` results are compared exactly.

### Example 1

```text
Input:
["RandomDrawSet", "insert", "insert", "insert", "remove", "remove", "draw", "insert", "draw"]
[[], [4], [9], [4], [7], [4], [], [4], []]
Output: [null, true, true, false, false, true, <draw>, true, <draw>]
Explanation:
RandomDrawSet set = new RandomDrawSet();
set.insert(4);  // true — 4 was absent.  holds {4}
set.insert(9);  // true — holds {4, 9}
set.insert(4);  // false — a set keeps one copy of 4
set.remove(7);  // false — 7 was never added
set.remove(4);  // true — holds {9}
set.draw();     // 9 is the only value, so it comes up every time
set.insert(4);  // true — removal made room; holds {4, 9} again
set.draw();     // 4 and 9 each come up about half the time
```

### Example 2

```text
Input:
["RandomDrawSet", "insert", "insert", "insert", "remove", "insert", "draw", "remove", "draw"]
[[], [6], [11], [2], [11], [4], [], [2], []]
Output: [null, true, true, true, true, true, <draw>, true, <draw>]
Explanation:
RandomDrawSet set = new RandomDrawSet();
set.insert(6);   // holds {6}
set.insert(11);  // holds {6, 11}
set.insert(2);   // holds {2, 6, 11}
set.remove(11);  // holds {2, 6}
set.insert(4);   // holds {2, 4, 6}
set.draw();      // each of 2, 4, 6 comes up about a third of the time
set.remove(2);   // holds {4, 6}
set.draw();      // 4 and 6 each come up about half the time
```

### Constraints

- `-2³¹ <= val <= 2³¹ - 1`
- At most `2 * 10⁵` calls to `insert`, `remove`, and `draw` in total.
- `draw` is only called while the set holds at least one value.

### Follow-up

Everything above is achievable with one plain array of the held values plus
a hash map from each value to its slot in that array. Which structure answers
membership, and which one makes the uniform draw a single random index?

## Hints

### Hint 1

Neither standard container is enough on its own: an array cannot certify that
a value is absent without scanning, and a hash set cannot produce "the value
at a random index". Hold both — values in an array, and beside it a map from
value to that value's position in the array.

### Hint 2

Erasing from the middle of an array is linear work — unless you are free to
reorder. Copy the array's **final** value over the slot being vacated and
shrink by one. The move is constant-time, but the relocated value's map entry
must be corrected: its slot number just changed.

### Hint 3

Watch the case where the value being removed is itself the final one: the
vacated slot and the donor slot are the same, so only the shrink happens.
And since this is a set, each value has exactly one slot, so one map repair
per removal is always enough.
