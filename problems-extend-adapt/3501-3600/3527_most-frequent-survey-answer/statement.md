# Most Frequent Survey Answer

## Description

You are given a 2D string array `responses`, where `responses[i]` holds the
answers collected by a survey on day `i`.

First discard duplicate answers within each day — an answer repeated
several times on the same day still counts only once for that day. Then
count, across all days, how many days each distinct answer appeared on.

Return the answer with the highest day count. If several answers tie for
the highest count, return the lexicographically smallest of them.

### Example 1

```text
Input: responses = [["yes","no","yes"],["no","maybe"],["maybe","yes","no"]]
Output: "no"
Explanation:
After per-day deduplication the days are ["yes", "no"], ["no", "maybe"],
and ["maybe", "yes", "no"]. Then "yes" and "no" each appear on 3 days
while "maybe" appears on 2. The tie between "yes" and "no" goes to "no",
the lexicographically smaller word.
```

### Example 2

```text
Input: responses = [["alpha"],["beta","beta"],["gamma","alpha","alpha"]]
Output: "alpha"
Explanation:
Deduplicating each day leaves ["alpha"], ["beta"], and ["gamma", "alpha"].
"alpha" appears on 2 days; "beta" and "gamma" appear on 1 day each.
```

### Example 3

```text
Input: responses = [["cool","cool"],["warm","cool","warm"]]
Output: "cool"
Explanation:
Day 0 collapses to ["cool"] and day 1 to ["warm", "cool"], so "cool"
appears on both days and "warm" on one.
```

### Constraints

- `1 <= responses.length <= 1000`
- `1 <= responses[i].length <= 1000`
- `1 <= responses[i][j].length <= 10`
- `responses[i][j]` consists of only lowercase English letters

## Hints

### Hint 1

A hash map keyed by answer, holding a day count, is enough — but make sure
a repeated answer inside one day only bumps the count once.

### Hint 2

After tallying, one comparison pass over the map decides the winner:
higher counts beat lower ones, and equal counts are settled by
lexicographic order.
