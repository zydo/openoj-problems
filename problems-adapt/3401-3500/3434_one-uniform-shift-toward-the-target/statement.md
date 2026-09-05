# One Uniform Shift Toward The Target

## Description

You have an array `nums` of length `n` and a target value `k`.

You may run one operation, a single time:

- Choose a stretch `nums[i..j]` with `0 <= i <= j <= n - 1`.
- Choose any integer `x` and add that same `x` to every entry of the
  stretch.

Afterwards, count how many entries equal `k`. Return the largest count you
can reach.

### Example 1

```text
Input: nums = [3,1,4,1,5,3,3], k = 3
Output: 5
Explanation: Add 2 to the stretch nums[1..4]: the array becomes
[3,3,6,3,7,3,3], where 3 appears five times.
```

### Example 2

```text
Input: nums = [7,7,2,7,2,2], k = 5
Output: 3
Explanation: Add 3 to the stretch nums[2..5]: the array becomes
[7,7,5,7,5,5], where 5 appears three times.
```

### Example 3

```text
Input: nums = [9], k = 4
Output: 1
Explanation: Add -5 to the single entry: the array becomes [4].
```

### Example 4

```text
Input: nums = [1,2,1,2,1], k = 3
Output: 3
Explanation: Add 2 to the whole array: it becomes [3,4,3,4,3], holding
three 3s.
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `1 <= nums[i] <= 50`
- `1 <= k <= 50`

## Hints

### Hint 1

The shift amount decides which source value becomes `k`: only entries
equal to `k - x` join the count, and every `k` inside the stretch is
destroyed.

### Hint 2

For each candidate source value, score the array with +1 on that value and
-1 on `k`, then find the best-scoring stretch — the classic
maximum-subarray sweep — and add the untouched baseline count of `k`.
