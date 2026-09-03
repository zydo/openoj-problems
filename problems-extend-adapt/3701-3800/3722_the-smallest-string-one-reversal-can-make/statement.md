# The Smallest String One Reversal Can Make

## Description

You are given a string `s` of length `n` made of lowercase English letters.

Exactly one operation must be performed: pick an integer `k` with
`1 <= k <= n` and either reverse the first `k` characters of `s` or reverse
the last `k` characters of `s`.

Among every string this single operation can produce, return the
lexicographically smallest. Each choice of `k` together with a choice of end
yields one candidate, and the answer is simply the minimum of all those
candidates in dictionary order.

### Example 1

```text
Input: s = "bcaz"
Output: "acbz"
Explanation: Take k = 3 on the front. The prefix "bca" flips into "acb",
leaving "acbz" — the smallest string reachable from here.
```

### Example 2

```text
Input: s = "monday"
Output: "adnomy"
Explanation: Take k = 5 on the front. The first five letters "monda" flip
into "adnom", producing "adnomy".
```

### Example 3

```text
Input: s = "edcba"
Output: "abcde"
Explanation: Reversing all 5 characters — from either end, since the two
ranges coincide here — sorts the letters into "abcde".
```

### Example 4

```text
Input: s = "aab"
Output: "aab"
Explanation: Every allowed reversal either reproduces `s` or lands on a
larger string, so `s` itself is already the best.
```

### Constraints

- `1 <= n == s.length <= 1000`
- `s` consists of lowercase English letters.

## Hints

### Hint 1

There are only about 2n distinct operations to consider — every `k` at each
of the two ends — so try them all.

### Hint 2

Reversing a single character changes nothing, which means `s` itself is
always among the reachable strings and can seed the minimum.

### Hint 3

Each candidate costs one linear slice-reverse-concatenate, so the whole
sweep stays comfortably quadratic in the worst case.
