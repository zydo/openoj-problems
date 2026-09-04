# Longest Capturing March

## Description

A line of `n` sites is described by a 0-indexed array `forts`, where
`forts[i]` is one of three values:

- `-1` — the site is empty.
- `0` — an enemy outpost holds the site.
- `1` — one of your forts occupies the site.

You may pick one of your forts at index `i` and march its army to an
empty site at index `j`. The march is legal only when every site strictly
between the two — each `k` with `min(i, j) < k < max(i, j)` — is an enemy
outpost, and every one of those outposts is captured on the way.

Return the largest number of enemy outposts any single legal march can
capture. If no march is possible at all, return `0`.

### Example 1

```text
Input: forts = [-1,0,0,0,1,0,1]
Output: 3
Explanation: Marching from your fort at index 4 to the empty site at
index 0 crosses three enemy outposts and captures them all. No other
march does better, so the answer is 3.
```

### Example 2

```text
Input: forts = [0,1,0,0,0,-1,0,0]
Output: 3
Explanation: The army leaves your fort at index 1 and settles at the
empty site at index 5, capturing the three outposts in between.
```

### Example 3

```text
Input: forts = [0,0,0,1]
Output: 0
Explanation: There is a fort under your command but no empty site to
march to, so nothing can be captured.
```

### Constraints

- `1 <= forts.length <= 1000`
- `forts[i]` is `-1`, `0`, or `1`.

## Hints

### Hint 1

Only the non-zero sites matter: a march always starts at a `1` and ends
at a `-1` (or the reverse) with nothing but `0`s between them.

### Hint 2

Sweep once and remember the previous non-zero site. When the next one
appears, the outposts between the two indices are captured exactly when
the two endpoint values differ.

### Hint 3

The best march is the widest such gap with differing endpoints — a
two-pointer style scan settles it in one pass.
