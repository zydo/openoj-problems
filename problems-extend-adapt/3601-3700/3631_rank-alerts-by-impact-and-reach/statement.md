# Rank Alerts By Impact And Reach

## Description

You are given a 2D integer array `alerts`, where each

    alerts[i] = [IDᵢ, impactᵢ, reachᵢ]

- `IDᵢ` is the alert's unique identifier.
- `impactᵢ` measures how much damage the alert can cause.
- `reachᵢ` measures how widely it can spread.

An alert's handling priority is scored as

    score = 2 × impactᵢ + reachᵢ

Reorder the array so the alerts appear from highest score to lowest.
Whenever two alerts carry the same score, the one with the smaller `ID`
comes first.

Return the reordered array.

### Example 1

```text
Input: alerts = [[7,1,4],[3,2,1],[9,2,3]]
Output: [[9,2,3],[7,1,4],[3,2,1]]
Explanation:
- alerts[0]: ID 7, score = 2 × 1 + 4 = 6
- alerts[1]: ID 3, score = 2 × 2 + 1 = 5
- alerts[2]: ID 9, score = 2 × 2 + 3 = 7
Highest score first gives [[9,2,3],[7,1,4],[3,2,1]].
```

### Example 2

```text
Input: alerts = [[11,3,2],[12,2,6],[13,4,0]]
Output: [[12,2,6],[11,3,2],[13,4,0]]
Explanation:
- alerts[0]: score = 2 × 3 + 2 = 8
- alerts[1]: score = 2 × 2 + 6 = 10
- alerts[2]: score = 2 × 4 + 0 = 8
Alerts 11 and 13 tie at 8, so 11 is placed before 13.
```

### Example 3

```text
Input: alerts = [[5,1,1],[8,1,1]]
Output: [[5,1,1],[8,1,1]]
Explanation: Both alerts score 3, so they stay in ascending ID order.
```

### Constraints

- `1 <= alerts.length <= 10⁵`
- `alerts[i] == [IDᵢ, impactᵢ, reachᵢ]`
- `1 <= IDᵢ <= 10⁶`
- `1 <= impactᵢ, reachᵢ <= 10⁹`
- All `IDᵢ` are unique.

## Hints

### Hint 1

Order the records with a comparator keyed on the score first and the
identifier second; nothing beyond that single ordering is required.
