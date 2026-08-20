# Minimum Two-Item Containers

## Description

Given positive item `weights` and a container `capacity`, place every item
into a container. Each container holds at most two items, and their combined
weight cannot exceed `capacity`.

Return the minimum number of containers required. Every individual weight is
at most the capacity.

### Example 1

```text
Input: weights = [2,4,5,7], capacity = 9
Output: 2
Explanation: Pair 2 with 7 and 4 with 5.
```

### Example 2

```text
Input: weights = [4,4,6,7], capacity = 10
Output: 3
```

### Example 3

```text
Input: weights = [8,9,10], capacity = 10
Output: 3
```

### Constraints

- `1 <= weights.length <= 5 * 10^4`
- `1 <= weights[i] <= capacity <= 3 * 10^4`

## Hints

### Hint 1

Sort the weights and focus on the heaviest remaining item.

### Hint 2

If the heaviest item can share with the lightest, pair them. Otherwise the
heaviest cannot share with any remaining item.

### Hint 3

Two pointers track the lightest and heaviest unused weights.
