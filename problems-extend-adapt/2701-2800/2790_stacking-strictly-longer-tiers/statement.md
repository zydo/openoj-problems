# Stacking Strictly Longer Tiers

## Description

You are given a 0-indexed array `usageLimits` of length `n`, describing
`n` labels numbered `0` through `n - 1`: label `i` may be placed at most
`usageLimits[i]` times in total.

Stack as many tiers as possible out of these placements, subject to two
rules:

- A tier never repeats a label — every label it holds is distinct.
- Each tier after the first holds strictly more labels than the tier
  directly below it.

Return the largest number of tiers a legal stack can have.

### Example 1

```text
Input: usageLimits = [1,2,3,4]
Output: 4
Explanation: Label 0 may appear once, label 1 twice, label 2 three
times, and label 3 four times. A four-tier stack of sizes 1, 2, 3, 4:
- tier 1 holds [3]
- tier 2 holds [2,3]
- tier 3 holds [1,2,3]
- tier 4 holds [0,1,2,3]
Every budget is respected, and four tiers cannot be beaten.
```

### Example 2

```text
Input: usageLimits = [2,2,2,2,2]
Output: 4
Explanation: Five labels with two placements each make 10 placements
available. Four tiers hold exactly 1 + 2 + 3 + 4 = 10 labels and a
no-repeat staffing of that shape exists, while adding a fifth tier
would raise the demand to 15.
```

### Example 3

```text
Input: usageLimits = [4,4,1,1]
Output: 3
Explanation: The budgets sum to exactly the 10 labels that four tiers
hold, yet four tiers are still out of reach: the three biggest tiers
(sizes 2, 3 and 4) demand 9 placements, and these labels cover only 8,
since labels 0 and 1 can sit in at most three tiers each and labels 2
and 3 in just one. Three tiers is the most.
```

### Constraints

- `1 <= usageLimits.length <= 10⁵`
- `1 <= usageLimits[i] <= 10⁹`

## Hints

### Hint 1

Sorting the budgets from smallest to largest and asking "can some `x`
tiers be staffed at all?" turns the answer into a binary search.

### Hint 2

Any legal stack of `x` tiers can be trimmed down to sizes exactly
`1, 2, …, x` without breaking a rule, so feasibility means filling that
canonical shape.

### Hint 3

To test a candidate `x`, examine the `m` largest tiers together: they
need `m·(2x − m + 1)/2` placements, while label `i` can reach at most
`min(usageLimits[i], m)` of them. That capped supply must cover the
demand for every `m` up to `x`.
