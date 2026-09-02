# Vowel-Bounded Words per Query

## Description

You are given a 0-indexed string array `words` and a 2D integer array
`queries`. Call a word vowel-bounded when its first and its last
character are both vowels, the vowels being 'a', 'e', 'i', 'o', and 'u'.

Each query `queries[i] = [li, ri]` asks how many words at the positions
`li` through `ri`, endpoints included, are vowel-bounded. Return the
array whose i-th entry replies to the i-th query.

### Example 1

```text
Input: words = ["ice","ore","map","aqua","end","eye"], queries = [[0,5],[1,3],[2,4],[0,0]]
Output: [4,2,1,1]
Explanation: The vowel-bounded strings are "ice", "ore", "aqua", and
"eye". Range [0, 5] contains all four, [1, 3] contains "ore" and
"aqua", [2, 4] contains only "aqua", and [0, 0] contains "ice".
```

### Example 2

```text
Input: words = ["sky","fly"], queries = [[0,1],[1,1]]
Output: [0,0]
Explanation: Neither word both begins and ends with a vowel, so every
query counts zero.
```

### Example 3

```text
Input: words = ["a","oo","untie"], queries = [[0,2],[2,2]]
Output: [3,1]
Explanation: All three words are vowel-bounded, so the full range counts
3 and the single-position range [2, 2] counts just "untie".
```

### Constraints

- `1 <= words.length <= 10⁵`
- `1 <= words[i].length <= 40`
- `words[i]` consists only of lowercase English letters.
- `sum(words[i].length) <= 3 * 10⁵`
- `1 <= queries.length <= 10⁵`
- `0 <= li <= ri < words.length`

## Hints

### Hint 1

Mark each word with a 1 or a 0 according as its first and last
characters are both vowels or not.

### Hint 2

Run those marks into a prefix-sum array so any range is answered with a
single subtraction.

### Hint 3

A small set holding the five vowels keeps the two-ended membership check
for a word cheap.

### Hint 4

For a query `[l, r]` the answer is `prefix[r + 1] - prefix[l]`.
