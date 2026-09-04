# Universal Words

## Description

Two lists of lowercase words are given: `words1` and `words2`.

Say a word `b` is covered by a word `a` when every letter `b` contains also
occurs in `a`, counting multiplicity — `b` may not ask for any letter more
often than `a` supplies it. For instance, `"ss"` is covered by `"casserole"`
but not by `"salad"`, which carries a single "s".

A word `a` from `words1` is called universal when every word in `words2` is
covered by it.

Return all universal words of `words1`, preserving the order in which they
appear in `words1`.

### Example 1

```text
Input: words1 = ["meadow","wander","warmed","shadow","dwarf"], words2 = ["ad","we"]
Output: ["meadow","wander","warmed"]
Explanation: Covering both entries of words2 takes one "a", one "d", one "w"
and one "e". meadow, wander and warmed each supply all four; shadow and dwarf
have no "e".
```

### Example 2

```text
Input: words1 = ["assess","stashes","assets","seesaws"], words2 = ["sss","ee"]
Output: ["seesaws"]
Explanation: The demands combine into three "s" and two "e". seesaws carries
both; assess, stashes and assets each hold a single "e".
```

### Example 3

```text
Input: words1 = ["bball","ballgame","cabana","balboa"], words2 = ["bb","aa","l"]
Output: ["balboa"]
Explanation: Together the three entries of words2 call for two "b", two "a"
and one "l". balboa qualifies; bball holds only one "a" and ballgame only
one "b".
```

### Constraints

- `1 <= words1.length, words2.length <= 10⁴`
- `1 <= words1[i].length, words2[i].length <= 10`
- Every word in both lists consists of lowercase English letters.
- The words of `words1` are pairwise distinct.
