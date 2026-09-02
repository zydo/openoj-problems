# Twin Rising Runs

## Description

A stretch of an array is called strictly increasing when every element is
bigger than the one just before it. You are given an array `nums` and an
integer `k`, and you are looking for a very particular shape: two
stretches of exactly `k` elements, lying shoulder to shoulder, both
strictly increasing.

Concretely, the question is whether some index `a` works as a starting
point such that both `nums[a..a + k - 1]` and `nums[a + k..a + 2 * k - 1]`
are strictly increasing — the second stretch begins exactly where the
first one ends. Return `true` when such a placement exists and `false`
otherwise.

### Example 1

```text
Input: nums = [5, 6, 7, 1, 2, 3], k = 3
Output: true
Explanation: The first stretch is [5, 6, 7] starting at index 0, and the
second is [1, 2, 3] starting right after it at index 3. Both are strictly
increasing, so the pair exists.
```

### Example 2

```text
Input: nums = [1, 2, 3, 4, 9, 8], k = 3
Output: false
Explanation: The only possible starting point is index 0: [1, 2, 3] rises
nicely, but its shoulder partner [4, 9, 8] dips at the end and fails.
```

### Example 3

```text
Input: nums = [4, 6, 5, 9, 7, 2, 10], k = 2
Output: true
Explanation: [4, 6] starting at index 0 and [5, 9] starting at index 2 are
adjacent and both strictly increasing.
```

### Constraints

- `2 <= nums.length <= 100`
- `1 < 2 * k <= nums.length`
- `-1000 <= nums[i] <= 1000`

### Hints

- For each index, work out how long the strictly increasing run that ends
  there is.
- A window ending at index `i` fully qualifies when that run length
  reaches `k`; two adjacent windows end exactly `k` apart, so check pairs
  of qualifying run lengths that far apart.
