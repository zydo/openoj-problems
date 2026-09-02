# Longest Two-Each Window

## Description

You are given a string `s`. Return the length of its longest substring in
which no letter occurs more than twice — every distinct character that
appears in the piece may appear at most two times.

A substring is a contiguous run of characters taken from `s`.

### Example 1

```text
Input: s = "abcabc"
Output: 6
Explanation: each of the three letters occurs exactly twice in the full
string, so the whole string already qualifies.
```

### Example 2

```text
Input: s = "xxox"
Output: 3
Explanation: the window "xox" has two "x" letters and fits the limit,
while any window of length 4 would be the entire string and carry a
third "x".
```

### Example 3

```text
Input: s = "dedede"
Output: 4
Explanation: "dede" spans four characters with each letter appearing
exactly twice; stretching to length 5 forces one letter to appear three
times.
```

### Constraints

- `2 <= s.length <= 100`
- `s` consists only of lowercase English letters.

## Hints

### Hint 1

The string is short enough that examining every substring works, and a
sliding window compresses that sweep into one pass.

### Hint 2

Extend the window one character to the right at a time. Only the letter
just added can break its budget of two, so shrink from the left until
that letter is back within budget, then record the window's width.
