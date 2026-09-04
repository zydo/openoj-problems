# Longest Non-Dropping Run With One Rewrite

## Description

An integer array `nums` sits on the table. You get to rewrite at most one
position: choose a single index (or none at all) and overwrite that element
with any integer — the replacement is unbounded and may even duplicate the
value it displaces.

Afterwards, measure runs: a run is a subarray, and it counts as non-dropping
when no element is smaller than the one before it. Return the length of the
longest non-dropping run the array can be coaxed into.

### Example 1

```text
Input: nums = [5,7,4,8,9]
Output: 5
Explanation: Rewrite the 4 at index 2 to any value from 7 through 8 — say
7 — and the array becomes [5,7,7,8,9], non-dropping from end to end, so
the whole length-5 array is one run.
```

### Example 2

```text
Input: nums = [6,5,4,3]
Output: 2
Explanation: Every element drops from its predecessor. One rewrite can
repair a single position — for instance turning the 5 into a 6 to make
[6,6,4,3] — but the best run afterwards still spans only 2 elements.
```

### Example 3

```text
Input: nums = [-4,-2,-3,-1]
Output: 4
Explanation: Rewriting the -3 at index 2 to any value between -2 and -1,
say -2, gives [-4,-2,-2,-1], which never drops, so all 4 elements form
one run.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`

## Hints

### Hint 1

Make one left-to-right pass recording `pref[i]`, the length of the longest
non-dropping run that ends at `i`, and one right-to-left pass recording
`suff[i]`, the length of the longest run that starts at `i`.

### Hint 2

Never rewriting is an option, so the untouched runs already give a
baseline: `max(max(pref), max(suff))`.

### Hint 3

A rewritten slot may also serve just one side. Since the replacement is an
unbounded integer, `pref[i - 1] + 1` and `suff[i + 1] + 1` are always
within reach whenever the neighboring index exists.

### Hint 4

Joining both sides through the rewritten slot works only when the gap can
be closed from within: whenever `nums[i - 1] <= nums[i + 1]`, a value
between the two neighbors welds the runs into `pref[i - 1] + suff[i + 1]

- 1`.
