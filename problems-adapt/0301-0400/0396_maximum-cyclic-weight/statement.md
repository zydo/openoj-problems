# Maximum Cyclic Weight

## Description

For an integer array `nums` of length `n`, let `rot(k)` be the array obtained
by rotating `nums` right by `k` positions; `rot(0)` is `nums` itself. Define
its weighted value as

`W(k) = 0 * rot(k)[0] + 1 * rot(k)[1] + ... + (n - 1) * rot(k)[n - 1]`.

Return the largest value among `W(0)` through `W(n - 1)`.

The test data guarantees that the answer fits in a signed 32-bit integer.

### Example 1

```text
Input: nums = [3,1,2,4]
Output: 19
Explanation: W(0) = 17. After three right rotations the array is [1,2,4,3],
and its weighted value is 0*1 + 1*2 + 2*4 + 3*3 = 19.
```

### Example 2

```text
Input: nums = [2,-1,4]
Output: 8
```

### Example 3

```text
Input: nums = [5]
Output: 0
```

### Constraints

- `n == nums.length`
- `1 <= n <= 10⁵`
- `-100 <= nums[i] <= 100`
