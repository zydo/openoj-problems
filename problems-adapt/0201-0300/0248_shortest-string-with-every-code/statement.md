# Shortest String With Every Code

## Description

Fix two integers `n` and `k`. A **code** is a string of exactly `n` characters,
each drawn from the digits `0` through `k - 1`; there are `kⁿ` distinct codes.

Build one string over those same digits that contains every code as a
contiguous block of `n` characters, and make it as short as any such string can
be. Return it. Neighbouring blocks are free to overlap — that overlap is what
keeps the total short — and when several shortest strings qualify, one of them
is enough.

### Example 1

```text
Input: n = 1, k = 3
Output: "210"
Explanation: The codes are "0", "1" and "2". A block of length 1 is a single
character, so nothing can overlap and three characters is the floor; any order
of the three digits reaches it.
```

### Example 2

```text
Input: n = 2, k = 4
Output: "03322312113020100"
Explanation: There are 16 codes and the answer is 17 characters long, so every
position but the last opens a fresh code: "03", "33", "32", "22", "23", "31",
"12", "21", "11", "13", "30", "02", "20", "01", "10", "00". Reading each code
separately would have cost 32 characters.
```

### Constraints

- `1 <= n <= 4`
- `1 <= k <= 10`
- `1 <= kⁿ <= 4096`

## Hints

### Hint 1

Two codes can sit `1` apart in the output exactly when the last `n - 1`
characters of the first equal the first `n - 1` characters of the second. Give
each of the `k^(n-1)` strings of length `n - 1` a vertex, and each code the
directed edge from its prefix to its suffix.

### Hint 2

A shortest answer is then a route that traverses every edge exactly once. Each
vertex has `k` edges leaving it and `k` edges arriving, so the degrees are
balanced and such a closed route always exists — no clever choice of starting
point is needed.

### Hint 3

Greedily following unused edges can strand you at a vertex while edges elsewhere
remain. Fix that by recording a vertex's incoming digit only once it has no
unused edges left: the pieces stitched on after a dead end land in the right
place automatically.
