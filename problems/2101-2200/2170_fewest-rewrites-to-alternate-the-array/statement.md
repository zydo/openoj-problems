# Fewest Rewrites to Alternate the Array

## Description

Given a 0-indexed array `nums` of `n` positive integers, call the array
alternating when two positions apart always agree while adjacent positions
never do. In other words, one value fills every even index, a different
value fills every odd index, and neither value may leak onto the other
side.

One move takes any single slot and overwrites it with a positive integer
of your choosing. Return the fewest moves after which `nums` is
alternating.

### Example 1

```text
Input: nums = [5,2,5,2,5]
Output: 0
Explanation:
The array already alternates: the even indices all hold 5, the odd
indices all hold 2, and the two values differ, so no move is needed.
```

### Example 2

```text
Input: nums = [4,4,4,4,4,9]
Output: 2
Explanation:
Rewriting the two odd-indexed 4s into 9s turns the array into
[4,9,4,9,4,9]. One further move cannot suffice, so 2 moves is the
minimum.
```

### Example 3

```text
Input: nums = [7,3,7,3,8,8]
Output: 2
Explanation:
Keeping the 7s on the even indices and the 3s on the odd indices leaves
four entries intact; only the final two slots need overwriting, e.g. into
[7,3,7,3,7,3].
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Split the array by index parity and tally how often each value appears on
each side; the two tallies are independent.

### Hint 2

An entry survives a rewrite exactly when its side's fill value is its own
value, so the cheapest plan keeps as many entries as possible.

### Hint 3

If the most frequent value is the same on both parities, compare letting
the rarer side fall back to its runner-up against giving it a brand-new
positive integer that occurs nowhere in the array.
