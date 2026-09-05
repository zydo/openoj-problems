# Weaving Three Words Into One

## Description

Given three strings `a`, `b` and `c`, weave them into a single string of
the smallest possible length that contains all three of them as
substrings. If several strings of that smallest length exist, return the
lexicographically smallest.

Between two strings of equal length, the lexicographically smaller one is
the one whose first differing character comes earlier in the alphabet.

A substring is a contiguous run of characters within a string.

### Example 1

```text
Input: a = "xy", b = "yz", c = "zx"
Output: "xyzx"
Explanation: The words overlap pairwise in a cycle — the y ending "xy"
begins "yz", and the z ending "yz" begins "zx". Chaining them in the
order xy → yz → zx fuses both overlaps and gives "xyzx", which contains
xy = ans[0..1], yz = ans[1..2] and zx = ans[2..3]. Nothing shorter holds
all three, and among the length-4 candidates this one sorts first.
```

### Example 2

```text
Input: a = "ab", b = "bc", c = "cd"
Output: "abcd"
Explanation: The words already form a chain — each neighbor shares one
letter — so "abcd" contains ab = ans[0..1], bc = ans[1..2] and
cd = ans[2..3]. Six characters minus the two shared ones makes four the
least possible length.
```

### Example 3

```text
Input: a = "hello", b = "ell", c = "world"
Output: "helloworld"
Explanation: The word "ell" already sits inside "hello", so the answer
only has to cover "hello" and "world". Those two share no overlap, and
of the two plain joins "helloworld" is the lexicographically smaller.
```

### Constraints

- `1 <= a.length, b.length, c.length <= 100`
- `a`, `b` and `c` consist only of lowercase English letters.

## Hints

### Hint 1

Any answer lines its words up in some order along the string, each
neighboring pair fused where a suffix of the earlier word equals a
prefix of the later one — and with three words there are only a handful
of orders to try.

### Hint 2

A word already contained in another never extends an answer, so drop
such words first; then fuse every ordering on its largest overlaps and
keep the shortest candidate, breaking ties lexicographically.
