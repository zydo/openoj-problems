# Steps to Align Every Value

## Description

You are given an array `nums` of positive integers. In one step you may raise
or lower a single element of `nums` by `1`.

You are also given an array `targets`. For each `targets[i]`, ask: how many
steps does it take to pull every element of `nums` onto the value
`targets[i]`? Each question stands alone — the array is restored before the
next one.

Return an array `answer` of the same length as `targets`, with `answer[i]`
the step count for `targets[i]`.

### Example 1

```text
Input: nums = [4,2,7], targets = [3,6]
Output: [6,7]
Explanation: Aligning on 3 takes |4-3| + |2-3| + |7-3| = 1 + 1 + 4 = 6 steps.
Aligning on 6 takes 2 + 4 + 1 = 7 steps.
```

### Example 2

```text
Input: nums = [5,5,5,2], targets = [5]
Output: [3]
Explanation: Three elements already sit on 5; only the 2 needs lifting,
which costs 3 steps.
```

### Example 3

```text
Input: nums = [1,10], targets = [1,10,6]
Output: [9,9,9]
Explanation: Moving onto either endpoint of the pair costs 9 steps, and
landing exactly in the middle splits the distance — also 9.
```

### Constraints

- `n == nums.length`
- `m == targets.length`
- `1 <= n, m <= 10⁵`
- `1 <= nums[i], targets[i] <= 10⁹`
- Each answer fits in a signed 64-bit integer.

## Hints

### Hint 1

Nothing clever about the moves: aligning on `q` costs exactly the sum of
`|nums[i] - q|` over the array.

### Hint 2

Answering that sum naively for every target is quadratic. Sort `nums` once
and think about which elements sit below `q` and which above.

### Hint 3

Prefix sums over the sorted array give both groups' totals: the below-group
needs `q * j - prefix[j]` and the above-group `(prefix[n] - prefix[j]) - q *
(n - j)`, where `j` counts elements below `q`.

### Hint 4

Find `j` per target with a binary search; elements equal to `q` land on
either side harmlessly, since their contribution is zero.
