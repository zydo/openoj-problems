# The Fading Harvest

## Description

Two arrays describe a row of plots and an integer `m` bounds your total
number of picks:

- `value[i]` is what plot `i` yields the first time you pick it.
- `decay[i]` is how much plot `i`'s yield drops each time you pick it again.

You may return to the same plot as often as you like, but the grand total of
picks across all plots is capped at `m`. The `t`-th pick of plot `i`
(numbered from 1) nets `value[i] - decay[i] * (t - 1)`.

Harvest the greatest possible total. Because it can grow very large, report
it modulo `10⁹ + 7`.

### Example 1

```text
Input: value = [10,4], decay = [3,1], m = 3
Output: 21
Explanation:
    Take plot 0 twice and plot 1 once:
        pick 1 of plot 0: 10
        pick 2 of plot 0: 10 - 3 = 7
        pick 1 of plot 1: 4

    The total is 10 + 7 + 4 = 21, and no other three picks do better.
```

### Example 2

```text
Input: value = [9], decay = [5], m = 2
Output: 13
Explanation:
    The single plot yields 9, then 9 - 5 = 4, for a total of 13.
```

### Example 3

```text
Input: value = [2,8], decay = [10,2], m = 10
Output: 22
Explanation:
    Plot 0 is worth a single pick (2 — a second would pay 2 - 10, less than
    nothing). Plot 1 pays 8, 6, 4, 2 before its next yield would hit 0.
    There are only 5 picks worth making, which is within the budget of 10,
    so the total is 2 + 8 + 6 + 4 + 2 = 22.
```

### Constraints

- `1 <= value.length == decay.length <= 10⁵`
- `1 <= value[i], decay[i] <= 10⁹`
- `1 <= m <= 10⁹`

## Hints

### Hint 1

Repeated picks of one plot pay out a shrinking arithmetic ladder:
`value[i]`, `value[i] - decay[i]`, `value[i] - 2 * decay[i]`, ...

### Hint 2

You are never forced to spend the whole budget, so a pick that pays nothing
or less should simply be skipped.

### Hint 3

Binary-search the cutoff yield: the smallest gain still worth collecting.

### Hint 4

Given a cutoff `g`, each plot contributes a computable number of gains at
least `g`, and their total comes from the arithmetic-progression formula.

### Hint 5

If the chosen cutoff overfills the budget, trim the surplus by removing
copies of the cutoff gain itself.
