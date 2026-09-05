# Maximized Pair Sum

## Description

Split an even-length integer array `nums` into pairs `(a1,b1), ..., (an,bn)`.
The score of a pairing is the sum of the smaller element of every pair.
Choose the pairing that maximizes the score and return it.

### Example 1

```text
Input: nums = [1,4,3,2]
Output: 4
Explanation: The best pairing is (1,2) and (3,4), scoring min(1,2) +
min(3,4) = 1 + 3 = 4.
```

### Example 2

```text
Input: nums = [6,2,6,5,1,2]
Output: 9
Explanation: Pairing adjacent values after sorting gives (1,2), (2,5), and
(6,6), scoring 1 + 2 + 6 = 9.
```

### Constraints

- `1 <= n <= 10⁴`
- `nums.length == 2 * n`
- `-10⁴ <= nums[i] <= 10⁴`
