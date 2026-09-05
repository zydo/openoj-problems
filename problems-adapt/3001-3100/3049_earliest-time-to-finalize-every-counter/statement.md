# Earliest Time to Finalize Every Counter

## Description

You are given two arrays, both indexed from 1. The array `nums` of length `n`
holds one counter per position: counter `i` starts at `nums[i]`. The array
`resets` of length `m` hands out reset rights: during second `s` (for
`s = 1, 2, ..., m`) you may perform exactly one of these actions:

- Knock one unit off any single counter.
- Zero out the counter at position `resets[s]` — only that position, only
  during second `s`.
- Finalize any counter whose value is currently `0`.
- Wait.

Every counter starts unfinalized. Return the earliest second by which all `n`
counters can be finalized with optimal play, or `-1` if the `m` seconds do not
suffice.

### Example 1

```text
Input: nums = [4,0], resets = [1,2,1,2]
Output: 3
Explanation: Second 1 zeroes counter 1 (the entry resets[1] = 1 grants the
right), taking it from 4 to 0. Counter 2 began at 0, so both counters are
finalizable right away: second 2 finalizes counter 1, second 3 finalizes
counter 2. No schedule finishes inside two seconds, since the two finalizations
alone need two seconds after the reset.
```

### Example 2

```text
Input: nums = [1,2], resets = [2,2,2,2,2,2]
Output: 4
Explanation: Counter 1 never appears in resets, so its unit must be knocked
off by hand. One optimal schedule: second 1 zeroes counter 2, second 2 knocks
counter 1 down to 0, second 3 finalizes counter 1, second 4 finalizes
counter 2. Counter 1 costs two seconds and counter 2 costs two more, so four
is also a floor.
```

### Example 3

```text
Input: nums = [4,2], resets = [1,2,1]
Output: -1
Explanation: Even using every second on resets — zeroing counter 1 at second 1
and counter 2 at second 2 — only second 3 remains, and two counters still need
finalizing. Three seconds can never hold two resets plus two finalizations.
```

### Constraints

- `1 <= n == nums.length <= 5000`
- `0 <= nums[i] <= 10^9`
- `1 <= m == resets.length <= 5000`
- `1 <= resets[i] <= n`

## Hints

### Hint 1

Suppose no counter is ever zeroed. The schedule then costs `sum(nums) + n`
seconds — one per unit knocked off, one finalization each. A zeroing replaces
every knock of one counter, so it saves `nums[i] - 1` seconds.

### Hint 2

Whether a deadline `t` suffices is monotone: if all counters can be finalized
within `t` seconds, any later deadline also works. What does that suggest for
finding the earliest one?

### Hint 3

For a candidate `t`, scan the seconds backwards. Spare seconds accumulate;
at a counter's first appearance, tentatively buy its zeroing — pushing its
saving into a min-heap and reserving one later second for its finalization —
and when no spare second is free, cancel the least profitable purchase so
far. Scanning backwards is what guarantees every reserved finalization lands
after its zeroing.

### Hint 4

A counter absent from `resets` can never be zeroed; budget its full knocking
cost from the start, which also gives the search a decent lower bound.
