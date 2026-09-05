# Center-Mode Quintet Counts II

## Description

Choose five elements from `nums` without disturbing their order and read
them off as `seq` — such a pick is a quintet, and its center is the third
of the five, `seq[2]`.

The mode of a quintet is the value that occurs most often among its five
elements, and the mode is unique when no other value ties that top
frequency. A quintet is centered on its mode when the center value itself
is that unique mode. Count the quintets of `nums` centered on their mode
and return the answer modulo `10⁹ + 7`.

### Example 1

```text
Input: nums = [2,2,2,2,2,2,2]
Output: 21
Explanation: Every quintet reads [2, 2, 2, 2, 2], and its center 2 occurs
five times with no rival. Skipping any two of the seven positions yields
C(7, 5) = 21 quintets.
```

### Example 2

```text
Input: nums = [5,1,5,1,5,4]
Output: 2
Explanation: [5, 1, 5, 1, 5] and [5, 1, 5, 4, 5] center on a 5 occurring
three times, more than any other picked value. Swapping the earlier 1 for
the later one produces [5, 5, 1, 5, 4], whose center is a 1 — it does not
count.
```

### Example 3

```text
Input: nums = [4,4,8,8,8,4]
Output: 3
Explanation: All three 8s must be picked, and whichever single 4 fills
the last two slots, the centered 8 occurs three times against the 4s'
two. Dropping one of the three 4s gives the three qualifying quintets;
dropping an 8 instead ties the center 8 with the 4s.
```

### Constraints

- `5 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`

## Hints

### Hint 1

Charge every qualifying quintet to its center index and classify the case
by `f`, how often the center value occurs among the five picks.

### Hint 2

For `f >= 3` the leftover fills are unconstrained binomial products;
`f = 1` can never win. Only `f = 2` forces the three other values apart,
and inclusion-exclusion over the ways a rival value repeats repairs that
count.
