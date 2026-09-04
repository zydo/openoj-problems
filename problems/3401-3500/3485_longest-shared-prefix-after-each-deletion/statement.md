# Longest Shared Prefix After Each Deletion

## Description

You are given an array of strings `words` and an integer `k`.

For every index `i`, do the following: take the string at index `i` out of the
array, choose `k` strings at distinct indices from what remains, and measure how
long a prefix those `k` strings share.

Return an array `answer` where `answer[i]` is the longest such share achievable
after deleting index `i`. When a deletion leaves fewer than `k` strings behind,
`answer[i]` is `0`.

### Example 1

```text
Input: words = ["moon","mo","moon","mud"], k = 2
Output: [2,4,2,4]
Explanation: Deleting index 1 leaves two copies of "moon", which share all four
characters. Deleting index 0 or 2 leaves one "moon" beside "mo" and "mud"; the
best pair is "moon" with "mo", sharing two characters.
```

### Example 2

```text
Input: words = ["tree","trek","trend","trim"], k = 3
Output: [2,2,2,3]
Explanation: Deleting any of the first three strings forces "trim" into every
choice of three, and "trim" shares only "tr" with the others. Deleting "trim"
leaves "tree", "trek", "trend", whose common prefix "tre" is three long.
```

### Example 3

```text
Input: words = ["tie","bow"], k = 2
Output: [0,0]
Explanation: Either deletion leaves a single string, fewer than k, so both
answers are 0.
```

### Constraints

- `1 <= k <= words.length <= 10⁵`
- `1 <= words[i].length <= 10⁴`
- every string consists of lowercase English letters
- the lengths of all strings together total at most `10⁵`

## Hints

### Hint 1

Insert every string into a trie, and keep at each node a count of how many
strings pass through it — a node at depth `d` is a prefix of length `d` shared
by that many strings.

### Hint 2

Deleting one string subtracts 1 from the counts along its root-to-leaf path
only; every node off that path keeps its count.

### Hint 3

A prefix survives a deletion either on the deleted path (original count at
least `k + 1`) or off it (count at least `k`). Keep, per depth, the two best
nodes so the deepest off-path witness can be found without rescanning the trie.
