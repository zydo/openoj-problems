# One Pair Among Triples

## Description

Call a string **uniform** when every one of its characters is identical —
`"8888"` and `"55"` qualify, `"892"` does not.

You are given a digit string `s`. Cut it into consecutive uniform pieces so
that every piece has length 3 **except exactly one**, which has length 2.
The pieces must partition the string from left to right, and no piece of
any other length is allowed.

Return `true` when such a cutting exists and `false` otherwise.

(Here a piece is a contiguous slice of `s`.)

### Example 1

```text
Input: s = "22111444"
Output: true
Explanation: the cuts produce ["22", "111", "444"] — one piece of length
2 and two pieces of length 3.
```

### Example 2

```text
Input: s = "772255"
Output: false
Explanation: every run of equal digits here needs to host the single
length-2 piece: ["77", "22", "55"] uses three of them, but only one
length-2 piece is permitted.
```

### Example 3

```text
Input: s = "3331"
Output: false
Explanation: the lone trailing '1' forms a uniform piece of length 1,
which no allowed piece size can cover.
```

### Constraints

- `1 <= s.length <= 1000`
- `s` consists of only digits '0' through '9'.

## Hints

### Hint 1

The cuts always land on boundaries between equal digits, so scan maximal
runs of one digit: greedily carve off groups of 3, and when a run leaves a
remainder of 2, that run hosts the lone length-2 piece.

### Hint 2

Remember the piece of length 2 may appear at most once across the whole
string.

### Hint 3

A run that is neither a multiple of 3 nor 2 more than a multiple of 3
leaves a stranded single digit — the cutting is impossible.
