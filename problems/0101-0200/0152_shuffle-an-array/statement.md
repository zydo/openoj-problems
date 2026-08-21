# Shuffle an Array

## Description

You are given an array `nums` of distinct integers. Produce random
reorderings of it in which **every one of the `n!` arrangements** is equally
likely, and recover the starting arrangement on demand.

Implement the `Solution` class:

- `Solution(int[] nums)` — prepare the shuffler from the array `nums`.
- `int[] reset()` — hand back the array exactly as it was first given.
- `int[] shuffle()` — hand back a random reordering of the array, with all
  arrangements equally likely.

### How the shuffle is judged

A random ordering cannot be matched against one fixed answer, so the judge
verifies `shuffle` statistically. Each judged `shuffle` is replayed many
times — the count grows with the table, roughly 10000 replays for three
elements and 170000 for five. Every returned array must be a reordering of
the original, and the observed frequency of each arrangement must stay
within a tolerance band of `1 / n!`. Because the buckets are the returned
arrays themselves, the statistical cases stay small (at most five elements,
where the table is enumerable). `reset` is compared exactly, so shuffling
must never disturb the stored original.

### Example 1

```text
Input:
["Solution", "reset", "shuffle", "shuffle"]
[[[6, 2, 9]], [], [], []]
Output: [null, [6, 2, 9], [2, 9, 6], [9, 2, 6]]
Explanation:
Solution solution = new Solution([6, 2, 9]);
solution.reset();    // [6, 2, 9] — the untouched starting arrangement
solution.shuffle();  // one of the six orderings, e.g. [2, 9, 6]
solution.shuffle();  // again any of the six, e.g. [9, 2, 6]
// Each of the six orderings of [6, 2, 9] comes up about one sixth of
// the time.
```

### Example 2

```text
Input:
["Solution", "reset", "shuffle", "reset"]
[[[-7]], [], [], []]
Output: [null, [-7], [-7], [-7]]
Explanation:
Solution solution = new Solution([-7]);
solution.reset();    // [-7] — nothing has been shuffled yet
solution.shuffle();  // a one-element array has exactly one arrangement
solution.reset();    // [-7] again
```

### Constraints

- `1 <= nums.length <= 50`
- `-10⁶ <= nums[i] <= 10⁶`
- The elements of `nums` are pairwise distinct.
- At most `10⁴` calls to `reset` and `shuffle` in total.

## Hints

### Hint 1

`reset` can only stay correct if shuffling never scrambles what it must
restore: store one pristine copy at construction, hand out copies of it, and
build each shuffled result from a fresh copy rather than permuting the
stored array in place.

### Hint 2

Assemble the reordering one slot at a time, from the top down: for `i` from
`n - 1` to `1`, swap slot `i` with a uniformly random slot in `[0, i]`. Step
`i` has exactly `i + 1` outcomes, no two choice-sequences land on the same
final ordering, and `n · (n-1) · … · 1` equally likely sequences exist —
one per ordering — so every ordering gets probability exactly `1 / n!`.
This is Fisher-Yates.

### Hint 3

The near-miss — swapping every slot with a random slot in the whole
`[0, n)` — is biased: the starting arrangement is reachable by far more
swap-sequences than a rotation is, and equally likely sequences do not make
equally likely orderings. Keep the pool for slot `i` inside the unfixed
prefix.
