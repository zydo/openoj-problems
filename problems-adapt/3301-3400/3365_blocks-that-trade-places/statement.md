# Blocks That Trade Places

## Description

You are given two strings `s` and `t` — anagrams of each other, meaning
one can be turned into the other by shuffling letters — and an integer
`k`.

Cut `s` into `k` consecutive blocks of equal length; the length of `s`
is always divisible by `k`. The blocks may then be laid back down in any
order you like, stringing them together into one piece again.

Decide whether some ordering of those blocks reproduces `t` exactly.
Return `true` if it does and `false` otherwise.

### Example 1

```text
Input: s = "moon", t = "onmo", k = 2
Output: true
Explanation: Cutting s into 2 blocks of length 2 gives ["mo", "on"].
Laying them down as ["on", "mo"] strings together into "onmo", which is
exactly t.
```

### Example 2

```text
Input: s = "zzxx", t = "xzxz", k = 2
Output: false
Explanation: The blocks of s are ["zz", "xx"], while t falls into
["xz", "xz"]. No block of s equals "xz", so no ordering of the blocks
can produce t.
```

### Example 3

```text
Input: s = "abc", t = "cab", k = 3
Output: true
Explanation: Every block is a single character — ["a", "b", "c"] — and
laying them down as ["c", "a", "b"] reproduces t.
```

### Constraints

- `1 <= s.length == t.length <= 2 * 10^5`
- `1 <= k <= s.length`
- `s.length` is divisible by `k`.
- `s` and `t` consist only of lowercase English letters.
- `s` and `t` are anagrams of each other.

## Hints

### Hint 1

With the joining order free, only the collection of blocks matters: cut
both strings into their `k` blocks and ask whether the two collections
match piece for piece and count for count.
