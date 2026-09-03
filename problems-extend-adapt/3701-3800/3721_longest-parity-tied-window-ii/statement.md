# Longest Parity-Tied Window II

## Description

You are given an integer array `nums`.

A subarray of `nums` is **parity-tied** when it holds exactly as many
distinct even values as distinct odd values. Distinctness is over values,
not positions: a value that appears several times inside the subarray still
counts once. A parity-tied subarray consequently needs at least one even and
one odd value, so the shortest it can ever be is length 2.

Return the length of the longest parity-tied subarray of `nums`, or `0` if
no subarray ties.

### Example 1

```text
Input: nums = [3,8,5,2]
Output: 4
Explanation: The whole array ties — two distinct even values [8,2] against
two distinct odd values [3,5].
```

### Example 2

```text
Input: nums = [6,6,7,7,9]
Output: 4
Explanation: The window [6,6,7,7] ties one distinct even value (6) against
one distinct odd value (7), with both repeats counting once. Admitting the
trailing 9 would tip the odd side to two, so 4 is the longest.
```

### Example 3

```text
Input: nums = [2,1,1,2,4,7]
Output: 6
Explanation: The entire array ties: two distinct even values [2,4] against
two distinct odd values [1,7], so all six elements count.
```

### Example 4

```text
Input: nums = [4]
Output: 0
Explanation: A single element has nothing to tie against, so no subarray
qualifies.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Score a window with `g = (distinct odds) - (distinct evens)`; the window
ties exactly when `g` is zero, and each distinct value donates its sign to
precisely the windows that contain it.

### Hint 2

Maintain a segment tree indexed by right endpoint whose entry `r` holds the
score of the window beginning at the current left end. Range additions must
be supported, and keeping a minimum and a maximum per node lets an entry
equal to zero be both detected and located.

### Hint 3

Build the scores for left end 0 with one range add per distinct value: the
value's sign (+1 odd, -1 even) lands on every right end from its first
occurrence onward. Each position's next occurrence of the same value can be
precomputed.

### Hint 4

Slide the left end forward: value `v` leaving withdraws its sign exactly on
the right ends that precede its next occurrence, where a later copy takes
over the counting. After each slide, the rightmost zero among ends at or
after `l` completes the longest tied window for that left end.
