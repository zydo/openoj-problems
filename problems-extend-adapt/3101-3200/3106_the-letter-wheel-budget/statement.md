# The Letter Wheel Budget

## Description

Picture the lowercase alphabet bent into a wheel, where `a` follows
`z`. The gap between two letters is the number of single slides around
that wheel separating them, counted the shorter way around: `a` and `z`
stand 1 apart, `b` and `y` stand 3 apart.

You receive a string `s` of lowercase letters and an integer budget
`k`. Letters may be rewritten freely — any position, any target letter,
any number of times. A rewrite `t` has a cost: sum the wheel gap
between each original letter of `s` and the letter that replaces it.

Of all rewrites costing at most `k`, return the lexicographically
smallest string that can be produced.

### Example 1

```text
Input: s = "cba", k = 2
Output: "aba"
Explanation: Sliding `c` two positions back reaches `a` and spends the
entire budget; the remaining letters stay put. The rewrite "aba" costs
exactly 2 and nothing cheaper is affordable.
```

### Example 2

```text
Input: s = "zyxw", k = 26
Output: "aaaa"
Explanation: Every one of the four letters sits a single slide from
`a` on the wheel, so turning them all into `a` costs just 4 — well
within 26.
```

### Example 3

```text
Input: s = "potato", k = 12
Output: "antato"
Explanation: `p` rides 11 slides down to `a`, then `o` takes the last
remaining slide to become `n`; the tail is untouched. The cost is 11 +
1 = 12.
```

### Constraints

- `1 <= s.length <= 100`
- `0 <= k <= 2000`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

Work greedily from the front: a smaller letter at an earlier position
outranks anything you might do further right, and untouched positions
cost nothing.

### Hint 2

At each position first ask whether `a` is affordable. The price is the
wheel gap from `s[i]` to `a`, which never exceeds 13.

### Hint 3

When `a` costs more than what remains, no letter below `s[i]` is
affordable either — the best you can do is slide `budget` positions
down from `s[i]`, after which the budget is gone and everything after
keeps its original letter.
