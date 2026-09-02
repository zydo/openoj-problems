# Shrinking An Array With Modulo Pairs

## Description

You are given an array `nums` of positive integers, indexed from 0.

Repeat the following move as many times as you wish, or skip it entirely:

- choose two different positions `i` and `j` whose values are both greater
  than zero;
- append `nums[i] % nums[j]` to the end of the array;
- erase the elements at positions `i` and `j`.

Each move therefore trades two positive elements for one appended
remainder. Return the fewest elements `nums` can be left containing.

### Example 1

```text
Input: nums = [9,2,7,4]
Output: 1
Explanation: The smallest value is 2 and it occurs once. Pair 2 with 9:
append 2 % 9 = 2 and erase both, leaving [7,4,2]. Pair 2 with 7, leaving
[4,2]. Pair 2 with 4, leaving [2]. A lone positive element can no longer
be consumed, so the answer is 1.
```

### Example 2

```text
Input: nums = [6,6,6,6,6]
Output: 3
Explanation: Every pairing of two equal sixes appends 6 % 6 = 0. Two such
pairings shrink the array to [6,0,0], and zeros may never be chosen
again, so the remaining 6 has no positive partner. Three elements are
left, and no sequence does better.
```

### Example 3

```text
Input: nums = [10,10,10]
Output: 2
Explanation: Merging two tens appends 10 % 10 = 0 and removes both,
leaving [10,0]. The zeros are unusable, so the last 10 can never be
paired. The answer is 2.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`

## Hints

### Hint 1

Everything hinges on the smallest value in the array; call it `x`.

### Hint 2

If `x` occurs exactly once, it absorbs the whole array: paired with any
larger `y` it deletes `y` and re-inserts itself, since `x % y == x`. One
element remains.

### Hint 3

If some value `y` satisfies `y % x != 0`, a single move replaces the pair
with `y % x` — a fresh value strictly below `x`, which brings you back to
the previous case.

### Hint 4

Otherwise every value is a multiple of `x`, so every remainder ever
produced is too, and nothing positive can ever undercut `x`. The only
destruction available is merging two copies of `x`, which appends a zero
that can never be touched again.

### Hint 5

With `cnt` copies of `x`, each merge spends exactly two of them, so the
array can never end below `ceil(cnt / 2)` elements — and that bound is
reachable.
