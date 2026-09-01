# Most Crowded Year

## Description

A registry holds one life record per person: `logs[i] = [birth_i,
death_i]` gives the years in which the ith person was born and died.

Call a year crowded in proportion to how many people were alive then.
A person counts toward year `x` exactly when `x` falls in the inclusive
range `[birth_i, death_i - 1]` — someone who dies in year `d` is no
longer counted in `d` itself.

Return the earliest year in which the living population reaches its
largest value.

### Example 1

```text
Input: logs = [[1985,1995],[1990,2001]]
Output: 1990
Explanation: Both people are alive from 1990 through 1994, so the peak
population of 2 first occurs in 1990.
```

### Example 2

```text
Input: logs = [[2000,2010],[2002,2005],[2008,2019]]
Output: 2002
Explanation: The population is 2 during 2002, 2003, and 2004 — the only
years shared by the first two records — and 2002 is the earliest of
them.
```

### Example 3

```text
Input: logs = [[1975,1976]]
Output: 1975
Explanation: With a single person the population is 1 only in 1975; the
person is not counted in the death year 1976.
```

### Constraints

- `1 <= logs.length <= 100`
- `1950 <= birth_i < death_i <= 2050`

## Hints

### Hint 1

Each record contributes one unit of presence to every year from its
birth through the year before its death, so any year's total is just
the number of records covering it.

### Hint 2

The total only changes at endpoints: adding one when a life begins and
subtracting one the year it ends. Stamp those deltas, sweep the years in
increasing order, and keep the first year that strictly improves the
running maximum.
