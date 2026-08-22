# Solutions — Shortest Common Supersequence

## Longest Common Subsequence with Reconstruction

A supersequence must spend at least one character on every character of `s`
and `t`, except where one emitted character is consumed by both strings at
once. The characters doing double duty form a common subsequence, and the
more of them we double up, the shorter the result — so the optimal length is
`|s| + |t| - LCS(s, t)`, and the whole task is to weave the strings
together along a longest common subsequence.

The code tabulates `dp[i][j]` = the LCS length of the suffixes `s[i:]` and
`t[j:]`, filling the table from the bottom-right corner upward so each cell
only reads cells whose suffixes are shorter. Reconstruction then starts at
`(0, 0)` and walks toward the corner. When the two current heads agree,
that character is one unit of doubling-up: emit it once and step both
pointers. When they differ, one head must be emitted on its own; the table
says which choice is safe — advance the pointer belonging to the side whose
remaining table entry is at least as large, so no potential is destroyed.
Ties take the `s` side; either branch preserves optimality. Once a string
is exhausted, the rest of the other is appended verbatim: it can no longer
pair with anything.

Worked on Example 1 (`s = "mango"`, `t = "goman"`): the heads `m` and `g`
differ, and the table says dropping `g` keeps the full potential, so `g` is
emitted first. Next `m` meets `m`: emit once, advance both. Then `a`/`o`
differ — emit `o`; `n` meets `n` — emit once; and the leftovers `g` and `o`
of `s` are appended, giving `gomango`, of length 7 = 5 + 5 − 3 with `man`
shared. Identical inputs never leave the agreement branch and return
themselves; inputs with nothing in common emit both strings back to back.

**Complexity:** `O(n·m)` time and `O(n·m)` space for input lengths `n` and
`m`.
