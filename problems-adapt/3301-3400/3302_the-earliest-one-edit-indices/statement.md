# The Earliest One-Edit Indices

## Description

Two strings `word1` and `word2` are given. Say a string `x` is a one-edit
match for `y` when changing at most a single character turns `x` into `y`.

Pick out indices of `word1` and call the pick valid when:

- The indices read in ascending order.
- Spelling `word1` at exactly those positions produces a one-edit match
  for `word2`.

Among every valid pick, return the index array that is lexicographically
smallest, with one entry per character of `word2`. If no pick qualifies,
return an empty array. The array of indices itself is what gets compared —
not the string it spells.

### Example 1

```text
Input: word1 = "bccb", word2 = "ab"
Output: [0,3]
Explanation: Change word1[0] from 'b' to 'a' and let word1[3] supply the
'b'; the indices 0 and 3 are the smallest pair that works.
```

### Example 2

```text
Input: word1 = "aabbcc", word2 = "abc"
Output: [0,1,4]
Explanation: No change is needed — word1[0] is 'a', word1[1] is 'b' and
word1[4] is 'c', and no earlier combination of three indices spells "abc".
```

### Example 3

```text
Input: word1 = "banana", word2 = "ann"
Output: [0,2,4]
Explanation: Spending the one change on the opening 'b' turns it into
'a', and the 'n' at indices 2 and 4 completes "ann". Starting anywhere
later would only make the array larger.
```

### Example 4

```text
Input: word1 = "abd", word2 = "cc"
Output: []
Explanation: Neither a 'c' nor a spare change can cover two needed
characters, so every pick falls short.
```

### Constraints

- `1 <= word2.length < word1.length <= 3 * 10⁵`
- `word1` and `word2` consist only of lowercase English letters.

## Hints

### Hint 1

Work right to left and record, for each position of `word1`, how long a
tail of `word2` can still be spelled exactly from that point onward.

### Hint 2

The table extends one character at a time: if `word1[i]` equals the
character the tail needs, the exact reach from `i` is one more than the
reach from `i + 1`; otherwise it simply inherits the reach from `i + 1`.

### Hint 3

Scan `word1` from the left, taking exact matches without hesitation.
When a mismatch appears, spend the single allowed change there only if
the table guarantees the rest of `word2` can still be spelled exactly
after this position; a second mismatch is never allowed.
