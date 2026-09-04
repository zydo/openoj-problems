# Solutions — Most Strings Within Bit Budgets

## Two-Dimensional 0/1 Knapsack

A budget cannot tell two strings apart when their digit counts match, so the
input first collapses: every string becomes an item costing `(zeros, ones)`
and worth exactly one pick. Maximizing the number of picks under a cap of
`m` zeros and `n` ones is a 0/1 knapsack over two resources, carried by the
table `dp[i][j]` — the most strings usable while spending at most `i` zeros
and `j` ones.

The strings are folded in one at a time against a single `(m+1) × (n+1)`
table, both axes walked downward from their caps. During a string's pass the
code binds `row = dp[i]` and `prev = dp[i - zeros]`, so the candidate
`prev[j - ones] + 1` always consults the table as it stood _before_ this
string was considered: `i` only decreases, so row `i - zeros` has not yet
been rewritten within the pass. That downward walk is what makes the item
0/1 — no string can exploit a state that already contains it — while the
`cand > row[j]` test keeps taking it optional.

The all-zero table is a valid starting state (choose nothing), and a string
too heavy for part of a budget never touches those cells — the loop bound
`range(m, zeros - 1, -1)` encodes that skip. In the first example,
`["110", "01", "1110", "0", "11"]` with `m = 3, n = 5`, the four other
strings cost `(3, 5)` together and drive the corner cell to 4; `1110` would
add `(1, 3)` on top, and neither cap can absorb that, so the corner stays 4.
After the last string, `dp[m][n]` answers directly — the table's budgets are
ceilings, so a cheaper optimum lands in that same corner cell. Counting
digits is one linear scan of the input, negligible beside the sweep itself.

**Complexity:** `O(l·m·n)` time, `O(m·n)` space.
