# Best Sum Under Label Quotas

## Description

A shelf holds `n` items; item `i` is worth `values[i]` and carries the
tag `labels[i]`. Assemble a collection with the largest possible total
value while obeying two quotas:

- at most `numWanted` items overall;
- at most `useLimit` items carrying any one tag.

Return the largest total value a legal collection can reach.

### Example 1

```text
Input: values = [7,6,5,9,2], labels = [4,1,4,2,2], numWanted = 3, useLimit = 1
Output: 22
Explanation: Take the items worth 9, 7, and 6 — their tags 2, 4, and 1
are all different, so the one-per-tag cap never bites. The other
tag-4 item, worth 5, is barred because tag 4 was already spent.
```

### Example 2

```text
Input: values = [6,5,4,3,2,1], labels = [1,2,1,2,3,3], numWanted = 4, useLimit = 2
Output: 18
Explanation: The picks 6, 5, 4, and 3 use tag 1 twice and tag 2 twice,
both within the per-tag cap, and the overall budget of four items is
then exhausted.
```

### Example 3

```text
Input: values = [10,9,9,1], labels = [7,7,8,8], numWanted = 2, useLimit = 2
Output: 19
Explanation: Grab the 10 and the first 9; the two-item budget is gone
before anything cheaper comes up.
```

### Constraints

- `values.length == labels.length == n`
- `1 <= n <= 2 * 10⁴`
- `0 <= values[i], labels[i] <= 2 * 10⁴`
- `1 <= numWanted, useLimit <= n`

## Hints

### Hint 1

Walk the items from most valuable down to least and keep each one that
still fits. Both quotas only tighten as you go, so this greedy order
never has cause to regret an early pick.

### Hint 2

A hash map from tag to items taken so far enforces the per-tag cap:
skip any item whose tag has already reached `useLimit`, and stop the
walk once `numWanted` items have been collected.
