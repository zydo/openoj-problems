# Set-Bit Counts to N

## Description

You are given an integer `n`. For every `i` from `0` through `n`, count how
many `1` bits the binary form of `i` contains, and return those counts as a
single array of length `n + 1`.

### Example 1

```text
Input: n = 8
Output: [0,1,1,2,1,2,2,3,1]
Explanation: Written in binary, 5 is 101 (two 1s), 6 is 110 (two), and
7 is 111 (three). Every power of two, such as 8 = 1000, contributes a
single 1.
```

### Example 2

```text
Input: n = 4
Output: [0,1,1,2,1]
Explanation: The values 0, 1, 2, 3, 4 are 0, 1, 10, 11, 100 in binary.
```

### Example 3

```text
Input: n = 0
Output: [0]
Explanation: The range is just the value 0, whose binary form holds no
1 bits at all.
```

### Constraints

- `0 <= n <= 10⁵`

### Follow-up

Computing each count on its own costs about `n log n` bit operations in
total. Can the array be filled in one linear sweep instead?

## Hints

### Hint 1

The entry for `i` can be assembled from entries you have already written —
the array you are filling is also a perfectly good memo.

### Hint 2

Look at the values from `2^m` up to `2^(m+1) - 1`: each is `2^m` plus some
value below `2^m`, so every block repeats the counts of the block before
it, with one more bit set.

### Hint 3

A second lever: `i & (i - 1)` turns off exactly one `1` bit of `i`. Which
already-filled slot does that point to?
