# Cheapest Letter Rewrites

## Description

You are given two strings `source` and `target` of the same length, made of
lowercase letters, plus a menu of paid rewrite rules given as three parallel
arrays `original`, `changed`, and `cost`: rule `i` charges `cost[i]` to turn
the letter `original[i]` into the letter `changed[i]`.

Starting from `source`, you rewrite one letter at a time. Each operation picks
a position holding some letter `x` and replaces it by a letter `y` for which
the menu lists an `x`-to-`y` rule, paying that rule's price. A position may be
rewritten repeatedly, and letters that already match their counterparts in
`target` can be left alone.

Return the smallest total price for reaching `target`, or `-1` if no sequence
of rewrites ever gets there.

The menu may list the same letter pair more than once, at different prices.

### Example 1

```text
Input: source = "peck", target = "puck", original = ["e","o","e"], changed = ["o","u","u"], cost = [2,3,8]
Output: 5
Explanation: Position 1 is the only one whose letter differs. The menu prices
the direct e -> u rewrite at 8, but e -> o -> u costs 2 + 3 = 5. The p, c, and
k positions already agree with target, so the total is 5.
```

### Example 2

```text
Input: source = "dodo", target = "nono", original = ["d","t"], changed = ["t","n"], cost = [3,4]
Output: 14
Explanation: No rule rewrites d into n outright, so each d travels d -> t -> n
at 3 + 4 = 7. Two positions hold a d, for 2 * 7 = 14.
```

### Example 3

```text
Input: source = "rug", target = "run", original = ["u","s"], changed = ["s","r"], cost = [4,1]
Output: -1
Explanation: The first two letters already agree. No rule ever produces an n,
nor rewrites a g, so the final position is stuck and the task is impossible.
```

### Constraints

- `1 <= source.length == target.length <= 10^5`
- Both strings consist of lowercase English letters.
- `1 <= original.length == changed.length == cost.length <= 2000`
- Every entry of `original` and `changed` is a lowercase English letter.
- `1 <= cost[i] <= 10^6`
- `original[i] != changed[i]`

## Hints

### Hint 1

Positions are independent: each one asks a single question — what is the
cheapest way to turn this letter into that letter?

### Hint 2

Treat the letters as nodes and the rules as priced directed edges. What does a
sequence of rewrites at one position correspond to in that graph?

### Hint 3

The graph has only 26 nodes, so all pairwise cheapest prices can be precomputed
at negligible cost and reused across every position.

### Hint 4

With every pair needed, an all-pairs relaxation (Floyd–Warshall) is the least
code to write. Keep the lowest price when several rules cover the same pair.
