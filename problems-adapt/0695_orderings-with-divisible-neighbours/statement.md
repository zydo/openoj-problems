# Orderings with Divisible Neighbours

## Description

You are given an integer array `nums` holding `n` distinct positive values.

Call an arrangement of all the values linked when each pair of neighbours in
it is divisible — one of the two divides the other.

Count the linked arrangements of `nums`. Because the count can be huge,
report it modulo `10⁹ + 7`.

### Example 1

```text
Input: nums = [4,8,2]
Output: 6
Explanation: 2 divides 4 and 8, and 4 divides 8, so every pair of values is
divisible and all 3! = 6 arrangements are linked.
```

### Example 2

```text
Input: nums = [3,5,15]
Output: 2
Explanation: Neither 3 nor 5 divides the other, so the two of them can
never stand side by side; 15 must sit between them. The linked arrangements
are [3,15,5] and [5,15,3].
```

### Example 3

```text
Input: nums = [7,11]
Output: 0
Explanation: 7 does not divide 11 and 11 does not divide 7, so the one
neighbour pair available never qualifies.
```

### Constraints

- `2 <= nums.length <= 14`
- `1 <= nums[i] <= 10^9`
- All values in `nums` are distinct.

## Hints

### Hint 1

With at most 14 values, an arrangement can be grown left to right while
remembering exactly which values have been placed. What does that memory
look like?

### Hint 2

To extend a partial arrangement, only two facts matter: the set of values
already down, and which value landed last.

### Hint 3

Over states (placed-set, last value), push each unused value that is
divisible with the last one, reduce as you go, and finish by summing over
the possible last values.
