# Pairing Off the Array

## Description

Given a 0-indexed integer array `nums`, play the following move as often
as it can be played: pick two entries of `nums` that hold the same value
and delete both from the array.

Once no move remains, report how the game ended. Return an array
`answer` of size 2 in which `answer[0]` counts the pairs that were
removed and `answer[1]` counts the entries still left in `nums`.

### Example 1

```text
Input: nums = [5,5,5,9,9,1]
Output: [2,2]
Explanation: The two 9s pair off and leave, as do two of the three 5s.
The remaining 5 and the 1 have no partners, so two pairs form and two
entries are left behind.
```

### Example 2

```text
Input: nums = [8,8,8,8]
Output: [2,0]
Explanation: The four equal entries form two pairs and leave the array
empty.
```

### Example 3

```text
Input: nums = [3,3,3,3,3,3,3]
Output: [3,1]
Explanation: Seven copies of one value yield three pairs, and the
seventh copy is stranded without a partner.
```

### Constraints

- `nums` holds between 1 and 100 entries.
- Every entry lies in `[0, 100]`.

## Hints

### Hint 1

A pair needs two equal entries, so each distinct value's frequency
decides that value's contribution entirely on its own.

### Hint 2

A value appearing `c` times offers `c // 2` pairs, and when `c` is odd
exactly one of its copies is stranded.
