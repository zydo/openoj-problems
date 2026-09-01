# Values Far From the Other Array

## Description

You are given two integer arrays `arr1` and `arr2`, and a non-negative
threshold `d`. Count the elements of `arr1` that stay far away from the whole
of `arr2`: an element `arr1[i]` qualifies when no element `arr2[j]` satisfies
`|arr1[i] - arr2[j]| <= d`. In other words, every value of `arr2` must lie
strictly farther than `d` from it.

Return how many elements of `arr1` qualify.

### Example 1

```text
Input: arr1 = [7,12,3,20], arr2 = [15,6,1], d = 2
Output: 2
Explanation: 12 is far from every value of arr2 (its nearest neighbor is 15,
at distance 3), and so is 20 (nearest is 15, at distance 5). The values 7
and 3 each have an arr2 element within distance 2 (6 and 1), so only 2
elements qualify.
```

### Example 2

```text
Input: arr1 = [-8,0,5], arr2 = [4,-3,22], d = 3
Output: 1
Explanation: -8 has no arr2 element within distance 3 (the nearest is -3, at
distance 5). Both 0 (distance 3 to -3) and 5 (distance 1 to 4) are too close
to something in arr2, so exactly 1 element qualifies.
```

### Example 3

```text
Input: arr1 = [10], arr2 = [10], d = 0
Output: 0
Explanation: Distance 0 still counts as within the threshold, and the two
values coincide, so the single element does not qualify.
```

### Constraints

- `1 <= arr1.length, arr2.length <= 500`
- `-1000 <= arr1[i], arr2[j] <= 1000`
- `0 <= d <= 100`

## Hints

### Hint 1

Sorting `arr2` puts the value closest to `arr1[i]` next to the insertion
point of `arr1[i]`, so one binary search per element suffices.

### Hint 2

Only the sorted neighbors just before and just after that insertion point
can be the closest — checking those two decides the element in constant
time.
