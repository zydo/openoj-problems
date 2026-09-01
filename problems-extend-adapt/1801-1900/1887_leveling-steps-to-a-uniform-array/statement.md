# Leveling Steps to a Uniform Array

## Description

You are given an integer array `nums`. One _leveling step_ does the
following:

- Locate the largest value in `nums`; call its index `i` (0-indexed) and
  its value `largest`. If several entries hold that value, take the
  smallest such `i`.
- Locate the largest value strictly smaller than `largest`; call it
  `nextLargest`.
- Lower `nums[i]` to `nextLargest`.

Every step flattens exactly one entry by one distinct-value notch. Return
how many steps it takes until every element of `nums` is equal.

### Example 1

```text
Input: nums = [7,3,10,3]
Output: 3
Explanation:
1. The largest is 10 at index 2, and 7 is the next value down. Lower it:
   nums = [7,3,7,3].
2. The largest is 7 at index 0, and 3 is next. Lower it: nums =
   [3,3,7,3].
3. The remaining 7 at index 2 drops to 3: nums = [3,3,3,3].
```

### Example 2

```text
Input: nums = [2,2,5,5,9,1]
Output: 9
Explanation: The 9 drops to 5 in one step; then each of the three 5s
drops to 2 (three steps); finally each of the five 2s drops to 1 (five
steps). That is 1 + 3 + 5 = 9 steps in total.
```

### Example 3

```text
Input: nums = [4,8,6,4,4,8,12]
Output: 8
Explanation: The 12 drops to 8 in one step; the three 8s then drop to 6
(three steps); the four 6s drop to 4 (four steps). Altogether
1 + 3 + 4 = 8 steps, after which every element is 4.
```

### Constraints

- `1 <= nums.length <= 5 * 10⁴`
- `1 <= nums[i] <= 5 * 10⁴`

## Hints

### Hint 1

The final count never depends on which copy of the largest you pick
first — sort the array and see what pattern the answer follows.

### Hint 2

Each element crosses every distinct value strictly below its own exactly
once, and each crossing is one step, so no simulation is needed.
