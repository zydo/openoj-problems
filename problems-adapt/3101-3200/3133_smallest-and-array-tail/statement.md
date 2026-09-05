# Smallest And-Array Tail

## Description

You are given two integers `n` and `x`. Build an array `nums` of `n`
positive integers that is strictly increasing and whose bitwise AND
across all elements equals `x`.

Return the smallest value the last element `nums[n - 1]` can take over
all such arrays.

### Example 1

```text
Input: n = 4, x = 2
Output: 7
Explanation: [2,3,6,7] is strictly increasing with AND 2, and no valid
array of length 4 ends below 7.
```

### Example 2

```text
Input: n = 1, x = 5
Output: 5
Explanation: The lone element must AND to 5 by itself, and 5 is the
smallest value that does.
```

### Example 3

```text
Input: n = 5, x = 1
Output: 9
Explanation: [1,3,5,7,9] — the odd numbers — has AND 1, and its fifth
member 9 is the smallest achievable tail.
```

### Constraints

- `1 <= n, x <= 10^8`

## Hints

### Hint 1

Every element must carry every bit of `x`, so each one is `x` OR'd
with some extra bits — a superset of `x`. Starting the array with `x`
itself costs nothing and makes the AND exactly `x`.

### Hint 2

The supersets of `x` in increasing order come from scattering the bits
of a counter `0, 1, 2, ...` into the zero slots of `x`, lowest slot
first.

### Hint 3

The tail depends only on counter value `n - 1`: push its bits into the
zero slots of `x`, lowest slot first, and leave the bits of `x`
untouched.
