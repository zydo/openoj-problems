# Smallest Reachable Queue

## Description

Given a lowercase string `s` and an integer `k`, one move chooses any one of
the first `k` characters and moves that chosen character to the end of the
string.

You may make as many moves as you wish. Return the lexicographically smallest
string that can be reached.

### Example 1

```text
Input: s = "baca", k = 1
Output: "abac"
Explanation: With only the first position available, each move is a rotation.
Among the rotations of baca, abac is smallest.
```

### Example 2

```text
Input: s = "dcab", k = 2
Output: "abcd"
Explanation: Having two selectable front positions permits rearranging the
characters until they are in sorted order.
```

### Example 3

```text
Input: s = "zzxy", k = 1
Output: "xyzz"
```

### Constraints

- `1 <= k <= s.length <= 1000`
- `s` contains only lowercase English letters.
