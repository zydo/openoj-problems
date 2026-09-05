# Crate Demolition Score

## Description

A loading dock has a single row of shipping crates lined up for
demolition. Every crate carries a color, given as a positive integer.

Demolition happens in rounds. In each round you pick a run of
**consecutive** crates that all share the same color — a run of `k`
crates, `k >= 1` — and clear the whole run in one blow, scoring
`k * k` points. Clearing a run pulls whatever was on either side of it
next to each other, so later rounds may find crates newly adjacent
that started out far apart.

Keep clearing runs, round after round, until the row is empty. Report
the highest total score reachable across every possible order of
demolition.

### Example 1

```text
Input: crates = [7,9,2,2,2,9,5,9,7]
Output: 23
Explanation:
[7, 9, 2, 2, 2, 9, 5, 9, 7]
----> [7, 9, 9, 5, 9, 7] (3*3=9 points)
----> [7, 9, 9, 9, 7] (1*1=1 points)
----> [7, 7] (3*3=9 points)
----> [] (2*2=4 points)
```

### Example 2

```text
Input: crates = [4,4,4]
Output: 9
```

### Example 3

```text
Input: crates = [8]
Output: 1
```

### Example 4

```text
Input: crates = [3,1,3,4,3]
Output: 11
Explanation: Clear the 4 alone (1 point), then the 1 alone (1 point),
which leaves the three 3s adjacent to clear together (9 points).
```

### Constraints

- `1 <= crates.length <= 100`
- `1 <= crates[i] <= 100`
