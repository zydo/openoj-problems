# Wrapping Word Pairs II

## Description

A word `a` wraps a word `b` when `b` both opens and closes with `a` — the
characters of `a` appear as a prefix of `b` and, read from the other end, as
its suffix too. So `aba` wraps `ababa`, but `abc` does not wrap `abcd`: the
longer word starts with `abc` yet ends with `bcd`.

Given a 0-indexed array of words, count the index pairs `(i, j)` with `i < j`
such that `words[i]` wraps `words[j]`. This version works at a scale where
comparing every pair directly is far too slow — see the constraints.

### Example 1

```text
Input: words = ["ab","ba","abab","baba"]
Output: 2
Explanation: "abab" opens and closes with "ab" (i = 0, j = 2), and "baba"
does the same with "ba" (i = 1, j = 3). Neither word wraps the other, so
the answer is 2.
```

### Example 2

```text
Input: words = ["aa","a","aa"]
Output: 2
Explanation: The pair (0, 2) counts because the equal words "aa" and "aa"
wrap each other, and the pair (1, 2) counts because "a" wraps "aa".
"aa" is too long to wrap "a", leaving the total at 2.
```

### Example 3

```text
Input: words = ["zz","zz","zz"]
Output: 3
Explanation: All three words are equal, and every one of the three index
pairs therefore counts.
```

### Constraints

- `1 <= words.length <= 10⁵`
- `1 <= words[i].length <= 10⁵`
- Every word consists solely of lowercase English letters.
- The combined length of all `words[i]` is at most `5 * 10⁵`.

## Hints

### Hint 1

There can be 10⁵ words, so a scan over all pairs of words is out of reach —
the words need to be indexed so each one can find its earlier wrappers
quickly.

### Hint 2

Index a word by pairing its `j`-th character from the front with its `j`-th
character from the back, and insert those pairs into a trie. A single trie
path then checks "starts with" and "ends with" at the same time.

### Hint 3

Give each trie node a counter of how many earlier words end exactly there.

### Hint 4

Sweep the words left to right. While descending the trie to insert the
current word, add up the counters passed on the way — each one marks an
earlier word that both begins and ends the current word with a matching
stretch — then bump the counter at the final node.
