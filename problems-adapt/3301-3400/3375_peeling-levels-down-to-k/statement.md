# Peeling Levels Down To k

## Description

You hold an integer array `nums` and an integer `k`.

Call a threshold `h` workable for the array's current values when every
element strictly greater than `h` shares one identical value. (With
`nums = [10, 8, 10, 8]`, say, `h = 9` is workable — the only value above
it is 10 — while `h = 5` is not.)

One operation works like this:

- Pick a threshold `h` that is workable for the current values.
- Every index `i` with `nums[i] > h` gets its value set to `h`.

Return the fewest operations that leave every element equal to `k`, or
`-1` if no sequence of operations can get there.

### Example 1

```text
Input: nums = [6,6,3,9], k = 3
Output: 2
Explanation: First take h = 6, which is workable since only the 9 sits
above it; the array becomes [6,6,3,6]. Then take h = 3, flattening the
rest down to k.
```

### Example 2

```text
Input: nums = [8,2,8], k = 4
Output: -1
Explanation: The element 2 already sits below k, and operations can only
lower values, never raise one — the goal is out of reach.
```

### Example 3

```text
Input: nums = [10,3,10,7,1], k = 1
Output: 3
Explanation: Three distinct levels — 10, 7, and 3 — sit above k, and
each operation peels exactly one: thresholds 7, then 3, then 1.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`
- `1 <= k <= 100`

## Hints

### Hint 1

Watch for any element already below `k` — operations never lift a value,
so that alone decides impossibility.

### Hint 2

The natural order of work is top-down: deal with the array's current
largest value first.

### Hint 3

A threshold equal to the second-largest level flattens the largest, then
the third-largest flattens the second, and so on down to `k`.

### Hint 4

So the answer is simply how many distinct values in the array exceed
`k`.
