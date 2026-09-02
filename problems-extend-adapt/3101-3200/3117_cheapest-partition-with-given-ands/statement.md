# Cheapest Partition With Given ANDs

## Description

Two arrays arrive: `nums` of length `n` and `andValues` of length `m`.

A subarray's value is defined as its final element.

Cut `nums` into `m` consecutive, non-overlapping pieces such that piece
number `i` (1-indexed, spanning `[li, ri]`) satisfies
`nums[li] & nums[li + 1] & ... & nums[ri] == andValues[i]`, where `&`
is the bitwise AND.

Among all valid cuts, minimize the total value — the sum of the pieces'
final elements. When no cut into `m` pieces can honor every target,
return `-1`.

### Example 1

```text
Input: nums = [2,6,3,2,4], andValues = [2,2,4]
Output: 8
Explanation: The cheapest cut is [2] | [6,3,2] | [4]: the pieces' ANDs
are 2, 2, and 4, and their tails sum to 2 + 2 + 4 = 8. The alternative
[2,6] | [3,2] | [4] also matches the targets but costs the larger
6 + 2 + 4 = 12.
```

### Example 2

```text
Input: nums = [7,5,6,12], andValues = [5,4]
Output: 17
Explanation: The only cut that works is [7,5] | [6,12], whose ANDs are
5 and 4; paying each piece's final element gives 5 + 12 = 17.
```

### Example 3

```text
Input: nums = [5,3], andValues = [6]
Output: -1
Explanation: One piece covering everything has bitwise AND 5 & 3 = 1,
never 6, so no valid cut exists.
```

### Constraints

- `1 <= n == nums.length <= 10⁴`
- `1 <= m == andValues.length <= min(n, 10)`
- `1 <= nums[i] < 10⁵`
- `0 <= andValues[j] < 10⁵`

## Hints

### Hint 1

Think of `dp[i][j]` as the best cost of carving up the first `i`
elements of `nums` so the first `j` targets are satisfied.

### Hint 2

A transition walks over the pieces that end exactly at element `i - 1`
and AND down to `andValues[j - 1]`, taking the cheapest predecessor.
Set `dp[0][0]` to zero.

### Hint 3

The finished answer is `dp[n][m]`.

### Hint 4

For a fixed right end, the starts giving one particular AND form a
contiguous range — extending a window can only shrink its AND, which
lets binary search (or a scan) locate that range.

### Hint 5

Turning each transition into a range-minimum query makes a segment
tree the natural tool; since every query window slides rightward, a
monotonic queue answers them in amortized constant time instead.
