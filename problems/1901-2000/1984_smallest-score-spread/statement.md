# Smallest Score Spread

## Description

An array `nums` holds one score per student, and an integer `k` says how
many of those scores you get to keep. Choose any `k` of the entries. The
kept group is judged by its spread: its largest score minus its smallest
one. Pick the group that makes this spread as small as it can be, and
return that minimum.

### Example 1

```text
Input: nums = [13,41,7,26,34], k = 3
Output: 15
Explanation: Read in order, the scores line up as `7, 13, 26, 34, 41`.
Keeping `26`, `34`, and `41` spans `41 - 26 = 15`, and no other trio of
scores sits tighter together.
```

### Example 2

```text
Input: nums = [8,30,17,2,22,8,25], k = 4
Output: 13
Explanation: Sorted, the scores are `2, 8, 8, 17, 22, 25, 30`. The
quartet `17, 22, 25, 30` covers `13`, while every other quartet covers
more.
```

### Example 3

```text
Input: nums = [40,10,25], k = 3
Output: 30
Explanation: With `k` equal to the array length there is nothing to
choose — all three scores are kept, so the spread is fixed at
`40 - 10 = 30`.
```

### Constraints

- `1 <= k <= nums.length <= 1000`
- `0 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Only the two extreme scores of a kept group set its spread; everything
between them is filler. So the question is really which extreme values
can be forced close together.

### Hint 2

Once the scores are ordered, the tightest groups can only consist of
neighbors — stretching a group past a nearer score never helps.

### Hint 3

Slide a window of exactly `k` consecutive scores along the sorted order
and answer with the narrowest window you meet.
