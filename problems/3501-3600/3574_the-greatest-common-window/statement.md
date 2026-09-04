# The Greatest Common Window

## Description

You are given an array of positive integers `nums` and an integer `k`.

Up to `k` operations are available. One operation picks a single element
of the array and doubles it, and no element may be doubled more than
once.

The score of a contiguous window is its length multiplied by the greatest
common divisor (GCD) of everything inside it. Return the largest score
any window of the final array can reach, where the final array is
whatever the operations leave behind.

Note:

- The GCD of a group of numbers is the largest integer that divides every
  one of them.

### Example 1

```text
Input: nums = [6,12,3], k = 1
Output: 24
Explanation:
Spend the doubling on the 6. The window [6, 12] now reads [12, 12],
whose GCD is 12, so the window scores 2 x 12 = 24.
```

### Example 2

```text
Input: nums = [10,4,20,5], k = 2
Output: 40
Explanation:
Take the window [10, 20] and double the 10, making the pair [20, 20]
with GCD 20 — a score of 2 x 20 = 40. The second allowed doubling is
simply not needed.
```

### Example 3

```text
Input: nums = [7,7,7,7], k = 2
Output: 28
Explanation:
The whole array already shares the GCD 7, scoring 4 x 7 = 28. Doubling
any element only breaks elements out of that shared factor, so the
operations are best left unspent.
```

### Constraints

- `1 <= n == nums.length <= 1500`
- `1 <= nums[i] <= 10⁹`
- `1 <= k <= n`

## Hints

### Hint 1

Enumerate the windows: fixing the left end and extending the right end
one step at a time lets every quantity update incrementally.

### Hint 2

Doubling only moves a number up one power of two. Split each element
into its odd part and its power-of-two exponent, and handle the two
pieces separately — the odd part of a GCD never changes under doubling.

### Hint 3

Since each element doubles at most once, the minimum exponent inside a
window can rise by at most one, and only when the budget is large enough
to double every element sitting on that minimum.
