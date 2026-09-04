# Shuffling Tree Paths Into Palindromes

## Description

You are given an undirected tree with `n` nodes labeled `0` to `n - 1`,
described by a 2D array `edges` of length `n - 1`, where `edges[i] =
[ui, vi]` connects nodes `ui` and `vi`. A string `s` of length `n`
gives each node its letter: `s[i]` is written on node `i`.

Process a string array `queries` in order. Each entry is one of:

- `"update ui c"`: rewrite the letter on node `ui` as `c`.
- `"query ui vi"`: collect the letters on the unique path between
  nodes `ui` and `vi` (both ends included) and decide whether they can
  be shuffled into a palindrome.

Recall that a collection of letters can be shuffled into a palindrome
exactly when at most one letter occurs an odd number of times.

Return a boolean array `answer`, where `answer[j]` is the verdict of
the `jth` `"query ui vi"` operation.

### Example 1

```text
Input: n = 4, edges = [[0,1],[1,2],[2,3]], s = "noon", queries = ["query 0 3","update 0 k","query 0 3"]
Output: [true,false]
Explanation:
    "query 0 3": The path 0 → 1 → 2 → 3 spells "noon"; two letters
    each appear twice, so it shuffles into a palindrome (it already is
    one). answer[0] = true.
    "update 0 k": Node 0 now holds 'k', so s = "koon".
    "query 0 3": The path spells "koon" — 'k' and 'n' both occur an
    odd number of times, so no palindrome is reachable.
Thus, answer = [true, false].
```

### Example 2

```text
Input: n = 5, edges = [[0,1],[0,2],[0,3],[0,4]], s = "abcda", queries = ["query 1 4","update 4 b","query 1 4","query 2 3"]
Output: [true,true,false]
Explanation:
    "query 1 4": The path 1 → 0 → 4 collects "baa"; only 'b' is odd,
    and "aba" is a palindrome. answer[0] = true.
    "update 4 b": Node 4 now holds 'b', so s = "abcdb".
    "query 1 4": The path collects "bab", again a palindrome.
    answer[1] = true.
    "query 2 3": The path 2 → 0 → 3 collects "cad" — three letters
    each appear once, so it cannot be shuffled into a palindrome.
    answer[2] = false.
Thus, answer = [true, true, false].
```

### Example 3

```text
Input: n = 4, edges = [[0,1],[1,2],[1,3]], s = "qqrr", queries = ["query 0 3","update 1 c","query 0 3"]
Output: [true,false]
Explanation:
    "query 0 3": The path 0 → 1 → 3 spells "qqr" — only 'r' occurs an
    odd number of times, so a palindrome ("rqq") exists.
    answer[0] = true.
    "update 1 c": Node 1 now holds 'c'.
    "query 0 3": The path spells "qcr", with three different letters
    each appearing once — no palindrome is reachable.
    answer[1] = false.
Thus, answer = [true, false].
```

### Constraints

- `1 <= n == s.length <= 5 * 10⁴`
- `edges.length == n - 1` and `edges` describes a valid tree
- `s` consists of lowercase English letters
- `1 <= queries.length <= 5 * 10⁴`
- every query is either `"update ui c"` or `"query ui vi"`
- `0 <= ui, vi <= n - 1`
- `c` is a lowercase English letter

## Hints

### Hint 1

Only the parities of letter counts along a path matter — store, for
each node, the 26-bit mask of letters seen an odd number of times
between the root and that node.

### Hint 2

The parity mask of the path between `u` and `v` is `mask(u) ^
mask(v) ^ bit(s[lca])`: the shared stretch above the lowest common
ancestor cancels, and the ancestor's own letter must be restored. The
verdict is that the final mask has at most one bit set.

### Hint 3

Letter rewrites are point updates, so the root-to-node masks must be
maintained dynamically. On the entry/exit tick timeline of a
depth-first search, the ancestors of a node are exactly the nodes
whose `[tin, tout]` interval covers its `tin`; flipping a rewritten
letter at both `tin` and `tout + 1` turns every root-to-node read into
a prefix XOR, which a Fenwick tree answers in logarithmic time.

### Hint 4

Lowest common ancestors fall out of a sparse table over the Euler
walk of the tree; build everything with one iterative traversal,
since the constraints allow a path deep enough to overflow recursive
stacks.
