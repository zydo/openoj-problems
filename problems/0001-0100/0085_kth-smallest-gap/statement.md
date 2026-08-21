# K-th Smallest Gap

## Description

Take every unordered pair of positions in `nums` and measure the gap between
the two values it selects — how far apart they are on the number line,
ignoring sign. An array of length `n` yields `n * (n - 1) / 2` such gaps, one
per pair of positions, and equal values contribute a gap of `0` just like any
other pair.

Sort that whole collection of gaps and return the one in position `k`,
counting from `1`.

### Example 1

```text
Input: nums = [4,9,7], k = 2
Output: 3
Explanation: The three pairs give gaps 5, 3 and 2. In order that is 2, 3, 5,
and the second of them is 3.
```

### Example 2

```text
Input: nums = [2,2,8,2], k = 3
Output: 0
Explanation: The three 2s pair up among themselves for gaps of 0, 0, 0, and
each of them pairs with the 8 for a gap of 6. The third smallest is still 0.
```

### Example 3

```text
Input: nums = [10,3], k = 1
Output: 7
Explanation: A two-element array has exactly one pair, so k can only be 1.
```

### Constraints

- `n == nums.length`
- `2 <= n <= 10⁴`
- `0 <= nums[i] <= 10⁶`
- `1 <= k <= n * (n - 1) / 2`

## Hints

### Hint 1

There can be fifty million gaps, so they cannot be listed. But you never need
the list — you only need to place one value in it. Guess a value `x` and ask a
cheaper question: how many gaps come out at `x` or below?

### Hint 2

That tally grows as `x` grows, never shrinks. So the smallest `x` whose tally
finally reaches `k` is exactly the value you are after, and it can be hunted by
halving a range of candidates instead of enumerating pairs.

### Hint 3

Sorting first makes the tally cheap. With values in order, the partners of a
given position that stay within `x` form one contiguous window, and as the
position advances that window's far end only ever advances too — so a single
sweep of two indices counts everything in linear time.
