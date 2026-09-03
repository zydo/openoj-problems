# The Farthest Unequal Pair II

## Description

You are given an array of strings `words`.

Pick two positions `i < j` holding different words — `words[i] != words[j]`.
The pair is measured by `j - i + 1`, the count of slots its two ends span.
Return the greatest measurement any valid pair reaches; when no unequal pair
can be formed — the array holds one word, or all of its words are identical —
return `0`.

### Example 1

```text
Input: words = ["lake","lake","peak","lake","lake"]
Output: 3
Explanation: "peak" at slot 2 differs from every other word, so pairing it
with the last slot measures 4 - 2 + 1 = 3, the widest reachable.
```

### Example 2

```text
Input: words = ["dune","dune","dune","mesa"]
Output: 4
Explanation: The outermost slots already differ — "dune" versus "mesa" — so
the pair measures 3 - 0 + 1 = 4 and spans everything.
```

### Example 3

```text
Input: words = ["tide","tide","tide"]
Output: 0
Explanation: Every slot holds the same word, so no valid pair exists and the
answer is 0.
```

### Constraints

- `1 <= words.length <= 10⁵`
- `1 <= words[i].length <= 10`
- `words[i]` consists of lowercase English letters.

## Hints

### Hint 1

The widest pair never needs to sit strictly inside: some optimal pair can be
slid so that one of its ends is position 0 or position n - 1.

### Hint 2

If the two outermost words differ, you are done immediately.

### Hint 3

Otherwise both ends share one word, so scan once from each side for the first
word that differs from that shared word.
