# Counting Peak-Beauty K-Letter Picks

## Description

A string `s` of lowercase English letters and an integer `k` are given.
Consider every way of choosing `k` positions of `s` whose characters are
pairwise different — call such a choice a _k-pick_. Two picks are counted as
different as soon as their position sets differ, even if the letters they
spell out are the same.

For a letter `c`, write `f(c)` for the number of occurrences of `c` in `s`.
The beauty of a k-pick is `f(c)` summed over the `k` distinct letters it
chooses, so a letter that recurs often in `s` boosts the beauty of any pick
containing it.

Return how many k-picks achieve the maximum beauty among all k-picks. The
count can be enormous, so report it modulo 10⁹ + 7. When `s` holds fewer
than `k` distinct letters, no k-pick exists and the answer is 0.

### Example 1

```text
Input: s = "cbcb", k = 2
Output: 4
Explanation: Here f('c') = 2 and f('b') = 2, so every 2-pick has beauty
2 + 2 = 4. The four picks come from pairing either occurrence of 'c' with
either occurrence of 'b', and all four share the maximum beauty.
```

### Example 2

```text
Input: s = "aaabbccd", k = 3
Output: 12
Explanation: The frequencies are f('a') = 3, f('b') = 2, f('c') = 2, and
f('d') = 1, so a maximum-beauty 3-pick takes 'a' together with one of
'b' or 'c', reaching beauty 5. There are 3 ways to place 'a' and, for each,
2 letters to choose from times 2 positions for that letter: 3 × 4 = 12
picks in total.
```

### Example 3

```text
Input: s = "zzz", k = 2
Output: 0
Explanation: Only one distinct letter occurs, so no 2-pick can be formed
and the count is 0.
```

### Constraints

- `1 <= s.length <= 2 * 10⁵`
- `1 <= k <= s.length`
- `s` consists only of lowercase English letters.

## Hints

### Hint 1

A pick never repeats a letter, so the strongest picks draw from the largest
frequencies available: the maximum beauty equals the sum of the `k` largest
frequency values among the distinct letters.

### Hint 2

Handle the degenerate case first — with fewer than `k` distinct letters in
`s`, there is nothing to count.

### Hint 3

Collect the distinct letters into groups that share a frequency, then walk
the groups from the largest frequency downward, absorbing whole groups
until the remaining demand of `k` falls inside one group.

### Hint 4

A split group of size `g` at frequency `x` contributes a binomial
coefficient `C(g, t)` for which `t` of its letters join the pick, and each
joining letter multiplies the count by `x` — one factor per occurrence
position — so the group factor is `C(g, t) · x^t`, all reduced modulo
10⁹ + 7.
