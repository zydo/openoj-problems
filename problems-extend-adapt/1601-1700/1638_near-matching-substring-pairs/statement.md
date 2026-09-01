# Near-Matching Substring Pairs

## Description

Two strings `s` and `t` are given. Count the pairs made of one
non-empty substring of `s` and one non-empty substring of `t` — both of
the same length — whose characters disagree at exactly one position.

Equivalently, count the triples `(i, j, len)` where the length-`len`
substring of `s` starting at index `i` and the length-`len` substring
of `t` starting at index `j` both fit inside their own string and are
identical everywhere except for a single character.

A substring is a contiguous run of characters within a string.

### Example 1

```text
Input: s = "abc", t = "abd"
Output: 9
Explanation: Seven pairs use single characters — every character of
"abc" against every character of "abd" except the two equal matches.
The rest are "bc" against "bd" and the full "abc" against "abd".
```

### Example 2

```text
Input: s = "aaa", t = "aa"
Output: 0
Explanation: Every same-length substring pair here is identical, so no
pair differs at exactly one position.
```

### Example 3

```text
Input: s = "abcd", t = "dcba"
Output: 16
Explanation: Twelve pairs use single characters — all sixteen
combinations except the four where the two letters are equal — and
four use length-2 substrings, such as "ab" against "cb".
```

### Constraints

- `1 <= s.length, t.length <= 100`
- `s` and `t` consist of lowercase English letters only.

## Hints

### Hint 1

Fix a starting index in each string and compare the two strings
forward in lockstep. The number of mismatches seen so far can only
grow — it never drops back down.

### Hint 2

That monotonicity means the comparison lengths with exactly one
mismatch form one contiguous block, which invites a dynamic program
over pairs of ending positions.

### Hint 3

For every pair of ending positions, remember the length of the run of
perfect matches ending there and the length of the run with at most
one mismatch ending there. Their difference is the number of
single-mismatch pairs with that ending, and the grand total is the sum
over all ending pairs.
