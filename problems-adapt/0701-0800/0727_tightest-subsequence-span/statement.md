# Tightest Subsequence Span

## Description

You're given two strings, `s1` and `s2`. Find the shortest contiguous
substring of `s1` that contains `s2` as a subsequence — that is, a
stretch of `s1` from which you could delete some characters (possibly
none) and be left with exactly `s2`, in order.

If no substring of `s1` contains `s2` as a subsequence, return the empty
string `""`. When several substrings tie for the shortest length, return
the one that starts earliest in `s1`.

### Example 1

```text
Input: s1 = "cabtctatbb", s2 = "cat"
Output: "cabt"
Explanation: "cabt" and "ctat" are both length-4 windows that contain
"cat" as a subsequence (c...a...t in order), and no shorter window works
anywhere in s1. "cabt" starts earlier, so it wins the tie. A substring
like "abtc" would not qualify even though it has the same letters,
because its 'c' comes after its 'a', breaking the required order.
```

### Example 2

```text
Input: s1 = "hjkmnpqrstvwxyzhjkmnpqrstvwxyz", s2 = "b"
Output: ""
```

### Constraints

- `1 <= s1.length <= 2 * 10⁴`
- `1 <= s2.length <= 100`
- `s1` and `s2` consist of lowercase English letters.

## Hints

### Hint 1

Let `reach[j][e]` be the largest start index `s` such that the substring
`s1[s..e]` still contains `s2[:j]` as a subsequence.
