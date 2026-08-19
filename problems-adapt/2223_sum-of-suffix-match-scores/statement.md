# Sum of Suffix Match Scores

## Description

Take a string `s` of length `n` and look at all `n` of its suffixes: the
one of length 1, the one of length 2, and so on up to `s` itself.

The match score of a suffix is the length of the longest common prefix it
shares with `s`. The full string `s` is its own suffix and scores `n`.

Return the sum of the match scores of all `n` suffixes.

### Example 1

```text
Input: s = "abcab"
Output: 7
Explanation: Reading suffixes shortest first: "b" scores 0, "ab" shares
its two characters with the front of s and scores 2, "cab" scores 0,
"bcab" scores 0, and s itself scores 5. The total is 0 + 2 + 0 + 0 + 5 = 7.
```

### Example 2

```text
Input: s = "xhyxhx"
Output: 9
Explanation: The length-1 suffix "x" scores 1, the length-3 suffix "xhx"
matches the first two characters "xh" for a score of 2, and s itself
scores 6. Every other suffix starts with the wrong character and scores 0.
The total is 1 + 2 + 6 = 9.
```

### Example 3

```text
Input: s = "aabb"
Output: 5
Explanation: "b" and "bb" score 0, "abb" matches the leading "a" for 1,
and "aabb" scores 4 — a total of 5.
```

### Constraints

- `1 <= s.length <= 10^5`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

The suffix starting at position `i` scores the length of the longest
prefix of `s` that reappears starting exactly at `i`. Does that quantity
have a name?

### Hint 2

It is the Z-array: `z[i]` is the longest prefix of `s` matching the
substring that starts at `i`, with `z[0] = n` by convention.

### Hint 3

Compute the Z-array in one linear left-to-right pass, reusing earlier
matches inside the rightmost known window, and sum its entries.
