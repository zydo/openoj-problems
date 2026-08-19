# Substring Palindrome Queries

## Description

You are given a string `s` and an array `queries`, where each
`queries[i] = [left_i, right_i, k_i]` asks about the stretch
`s[left_i..right_i]` (both ends included).

For a query you may, within that stretch only:

- shuffle the letters into any order, and
- overwrite at most `k_i` of the letters, each with any lowercase letter
  you like — every overwritten letter counts individually toward the `k_i`
  budget.

The query's answer is `true` when a palindrome can be produced this way.
Queries never modify `s`; each one works on the untouched original. Return
one boolean per query, in order.

### Example 1

```text
Input: s = "level", queries = [[0,4,0],[0,2,0],[0,2,1],[1,4,0],[2,4,1]]
Output: [true,false,true,false,true]
Explanation:
[0,4,0]: "level" is a palindrome already.
[0,2,0]: "lev" cannot become one — its three letters are all different.
[0,2,1]: one overwrite turns "lev" into, say, "vev".
[1,4,0]: "evel" holds one e too many for its one v; no budget to fix it.
[2,4,1]: "vel" — overwrite the l with a v and shuffle into "vev",
one overwrite against a budget of one.
```

### Example 2

```text
Input: s = "codee", queries = [[0,4,0],[0,4,2],[2,4,0]]
Output: [false,true,true]
Explanation:
[0,4,0]: "codee" has three lone letters (c, o, d); pairing any two still
leaves a third, so no budget means no palindrome.
[0,4,2]: one overwrite joins two of the loners — "cocec" style shuffles
exist — and two are allowed.
[2,4,0]: "dee" rearranges to "ede" for free.
```

### Example 3

```text
Input: s = "missme", queries = [[0,5,1],[1,4,2],[0,2,0]]
Output: [true,true,false]
Explanation:
[0,5,1]: pairing the lone i with the lone e (one overwrite) leaves
"msssm", a palindrome after shuffling.
[1,4,2]: two overwrites are more than enough for "issm".
[0,2,0]: "mis" cannot be shuffled into a palindrome and has no budget.
```

### Constraints

- `1 <= s.length, queries.length <= 10⁵`
- `0 <= left_i <= right_i < s.length`
- `0 <= k_i <= s.length`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

Shuffling makes the order of the stretch irrelevant — only how many times
each letter occurs there can matter.

### Hint 2

A multiset of letters can be arranged into a palindrome exactly when no
more than one letter occurs an odd number of times.

### Hint 3

Answering 10⁵ queries means each one must cost a handful of operations:
precompute something per prefix of `s` so any stretch's letter counts are
retrievable without rescanning it.

### Hint 4

Only parities matter, so 26 of them fit in one integer mask — and an
overwrite flips two parities at once, which tells you exactly how many
overwrites a stretch needs.
