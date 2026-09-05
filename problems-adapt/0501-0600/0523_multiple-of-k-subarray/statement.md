# Multiple-of-K Subarray

## Description

You are given an integer array `nums` and an integer `k`. Determine
whether `nums` contains a **qualifying span** — return `true` if it
does, `false` otherwise.

A **qualifying span** is a contiguous run of elements of `nums` that
satisfies both:

- it covers **at least two** elements, and
- the sum of its elements is a **multiple of `k`**.

Keep in mind:

- An integer `x` is a multiple of `k` when some integer `n` satisfies
  `x = n * k`; in particular `0` is always a multiple of `k`.
- A contiguous run means the elements are consecutive positions taken
  from `nums`, in order, with nothing skipped.

### Example 1

```text
Input: nums = [5,0,0,3,4], k = 4
Output: true
Explanation: The span [0,0] covers two elements and sums to 0, which
is a multiple of 4.
```

### Example 2

```text
Input: nums = [5,3,4,6,2], k = 8
Output: true
Explanation: The span [5,3] covers two elements and sums to 8, which
is a multiple of 8.
```

### Example 3

```text
Input: nums = [1,4,9], k = 6
Output: false
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁹`
- `0 <= sum(nums[i]) <= 2³¹ - 1`
- `1 <= k <= 2³¹ - 1`
