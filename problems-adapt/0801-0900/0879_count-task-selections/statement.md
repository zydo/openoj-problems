# Count Task Selections

## Description

You have `n` workers available and a catalogue of tasks. Task `i` occupies
`crew[i]` of the workers for as long as it runs and returns `payoff[i]` when
it finishes. A worker committed to one task cannot be counted towards another,
so a set of tasks can be run together only if the crews it asks for total at
most `n`.

Return how many sets of tasks can be run together while returning at least
`minPayoff` in total. Selecting nothing is a valid set, and it returns 0.
Because the count grows quickly, give it modulo `10^9 + 7`.

### Example 1

```text
Input: n = 7, minPayoff = 5, crew = [3,4,2], payoff = [4,3,1]
Output: 2
Explanation: {0,1} uses all 7 workers and returns 7; {0,2} uses 5 and returns
5. Every other set either falls short of 5 or asks for more than 7 workers.
```

### Example 2

```text
Input: n = 4, minPayoff = 0, crew = [2,3], payoff = [5,1]
Output: 3
Explanation: With no payoff floor the only limit is the workforce, so the
empty set, {0} and {1} all qualify. Running both needs 5 workers.
```

### Example 3

```text
Input: n = 12, minPayoff = 2, crew = [4,4,4], payoff = [9,9,9]
Output: 7
Explanation: The workforce covers all three tasks at once, and any single task
already clears the floor, so all 7 non-empty sets count.
```

### Constraints

- `1 <= n <= 100`
- `0 <= minPayoff <= 100`
- `crew.length == payoff.length`, and that common length is between 1 and 100
- `1 <= crew[i] <= 100`
- `0 <= payoff[i] <= 100`

## Hints

### Hint 1

Every task is either in the set or out of it, and you are counting rather than
optimising. That is a knapsack whose cells hold counts instead of best values.

### Hint 2

Two running totals describe a partial selection: workers committed so far, and
payoff earned so far. The first is bounded by `n`. The second looks unbounded,
but every total at or above `minPayoff` behaves identically from then on, so
clamp it there and the table has at most `101 * 101` cells.

### Hint 3

Fold one task into the table at a time. Walking both budgets downward means
each cell you read still holds the count from before this task was offered,
which is what stops a task from being selected twice. Reduce modulo
`10^9 + 7` at every addition, and seed the "at least 0 payoff" column with 1
so the empty selection is counted exactly once.
