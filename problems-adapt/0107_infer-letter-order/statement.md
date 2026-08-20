# Infer Letter Order

## Description

A list of strings `words` is claimed to be sorted — but not by the alphabet
you know. The lowercase English letters are arranged in some fixed, secret
order, strings compare position by position under that arrangement, and a
string that runs out of letters while still matching comes first.

Work out what the claim implies. Return a string listing every distinct
letter that occurs in `words`, in an order that makes `words` sorted.
Several orders may be consistent with the list; in that case return the
one that is lexicographically smallest under ordinary letter order
(`a < b < ... < z`). If no letter ordering can sort `words`, return `""`.

### Example 1

```text
Input: words = ["won","woo","ox","oxx","xu"]
Output: "nuwox"
Explanation: The pairs pin down n < o, w < o, and o < x, while u is
unconstrained. Three letters are immediately placeable; taking them in
ordinary alphabetical order yields the smallest consistent string.
```

### Example 2

```text
Input: words = ["hi","ha"]
Output: "hia"
Explanation: The words agree on h and disagree on their second letter, so
i must precede a; h itself is unconstrained and goes first.
```

### Example 3

```text
Input: words = ["ba","ab","ba"]
Output: ""
Explanation: "ba" before "ab" forces b < a, while "ab" before "ba" forces
a < b. The claims contradict each other, so no ordering exists.
```

### Constraints

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 100`
- every `words[i]` consists of lowercase English letters.

## Hints

### Hint 1

Line up two adjacent words and read them together: the comparison is
decided at the first position where they disagree, and every position
after that is irrelevant. One disagreement, one fact.

### Hint 2

If the left word runs out while still agreeing, nothing is decided — but
if the *right* word runs out first, the left word sits before its own
prefix, and no ordering of letters can rescue that. Answer `""` on the
spot.

### Hint 3

Register every letter you see as a node and every decided pair as a
directed edge. What you must output is a topological order of this graph;
a cycle means the answer is empty.

### Hint 4

The "lexicographically smallest" clause changes the algorithm: instead of
any topological order, always emit the alphabetically smallest letter
whose predecessors have all been emitted — a min-heap over the ready set.
