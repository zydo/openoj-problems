# Build a Sorted List at Least Cost

## Description

Values arrive one at a time, given as the integer array `arrivals`. You keep
a sorted list `nums`, empty at first, and drop each arriving value into it as
it comes. Placing a value `x` costs the **smaller** of two counts taken over
the list as it stands before the placement:

- entries **below** `x`;
- entries **above** `x`.

So inserting `3` into `[1,2,3,5]` costs `min(2, 1) = 1` — two entries sit
below it, one above — and the list becomes `[1,2,3,3,5]`.

Return the **sum** of all placement costs after every value in `arrivals` has
been placed, modulo `10⁹ + 7`.

### Example 1

```text
Input: arrivals = [3,1,4,2]
Output: 1
Explanation: Begin with nums = [].
Place 3 with cost min(0, 0) = 0, now nums = [3].
Place 1 with cost min(0, 1) = 0, now nums = [1,3].
Place 4 with cost min(2, 0) = 0, now nums = [1,3,4].
Place 2 with cost min(1, 2) = 1, now nums = [1,2,3,4].
The total cost is 0 + 0 + 0 + 1 = 1.
```

### Example 2

```text
Input: arrivals = [7,2,7,1,3,6,2]
Output: 5
Explanation: Begin with nums = [].
Place 7 with cost min(0, 0) = 0, now nums = [7].
Place 2 with cost min(0, 1) = 0, now nums = [2,7].
Place 7 with cost min(1, 0) = 0, now nums = [2,7,7].
Place 1 with cost min(0, 3) = 0, now nums = [1,2,7,7].
Place 3 with cost min(2, 2) = 2, now nums = [1,2,3,7,7].
Place 6 with cost min(3, 2) = 2, now nums = [1,2,3,6,7,7].
Place 2 with cost min(1, 4) = 1, now nums = [1,2,2,3,6,7,7].
The total cost is 0 + 0 + 0 + 0 + 2 + 2 + 1 = 5.
```

### Example 3

```text
Input: arrivals = [6,3,5,2,4,1]
Output: 3
Explanation: The cheap placements are the ones that land at an end; the
values bound for the middle pay. 5 pays min(1, 1) = 1 and 4 pays
min(2, 2) = 2, for a total of 3.
```

### Constraints

- `1 <= arrivals.length <= 10⁵`
- `1 <= arrivals[i] <= 10⁵`

## Hints

### Hint 1

Each placement's cost depends on a rank count over the prefix that arrived
before it — the same quantity that counts inversions.

### Hint 2

For the arriving value `x`, you need how many earlier entries fall strictly
below `x` and how many fall strictly above it, with equal entries in neither
count.

### Hint 3

Keep those counts answerable as the list grows: a Fenwick tree indexed by
value gives both in logarithmic time per arrival.
