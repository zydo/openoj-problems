# Shortest String After Peeling Ends

## Description

A string `s` is built only from the letters `a`, `b`, and `c`. You may
repeat the following move as many times as you like:

- Choose a non-empty prefix of `s` made up of one single repeated
  letter.
- Choose a non-empty suffix of `s` made up of one single repeated
  letter.
- The prefix and the suffix may not share any position.
- The two runs must consist of the same letter.
- Delete both the prefix and the suffix from the string.

Return the shortest length `s` can reach through any sequence of such
moves, including doing nothing at all.

### Example 1

```text
Input: s = "bcbbcab"
Output: 5
Explanation: Peel the b at each end once, leaving "cbbca". Now the
ends are c and a, which do not match, so nothing more can go.
```

### Example 2

```text
Input: s = "aabaaa"
Output: 1
Explanation: Peel the prefix "aa" and the suffix "aaa" in one move —
both runs are letter a and they do not overlap — leaving just "b",
which can never be removed.
```

### Example 3

```text
Input: s = "aabba"
Output: 0
Explanation: Peel "aa" and "a" to get "bb", then peel "b" and "b" to
get the empty string.
```

### Constraints

- `1 <= s.length <= 10^5`
- `s` consists only of the characters `a`, `b`, and `c`.

## Hints

### Hint 1

Whenever the two end letters disagree, the string is stuck — no move
applies.

### Hint 2

When the end letters agree, every move that helps consumes the entire
run of that letter from each end at once; peeling shorter pieces only
postpones the same result.

### Hint 3

So the process is forced: repeatedly eat the full matching runs off
both ends until the ends differ or the survivors cross.

### Hint 4

A single two-pointer sweep simulates the whole process; be careful to
stop correctly when one letter makes up the entire remaining string,
which survives as a length-1 answer.
