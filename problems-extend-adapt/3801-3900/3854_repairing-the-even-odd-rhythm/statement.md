# Repairing The Even-Odd Rhythm

## Description

An array `nums` keeps an even-odd rhythm when neighboring elements always
disagree in parity: for every `i` with `0 <= i < n - 1`, exactly one of
`nums[i]` and `nums[i + 1]` is even and the other is odd. An array of
length 1 keeps the rhythm automatically.

One operation picks any index and adds 1 to or subtracts 1 from that
element.

Return an integer array `answer` of length 2:

- `answer[0]` is the fewest operations that restore the rhythm.
- `answer[1]` is the smallest achievable `max(nums) - min(nums)` among all
  rhythm-keeping arrays that can be produced using exactly `answer[0]`
  operations.

### Example 1

```text
Input: nums = [3,8,5,6,2]
Output: [1,5]
Explanation: Only the last element is out of step — bumping the final 2
once (to 1 or 3) yields e.g. [3,8,5,6,3], which alternates odd-even all
the way. One operation cannot do better, and the tightest spread with
exactly one operation is 8 - 3 = 5.
```

### Example 2

```text
Input: nums = [9,9,9]
Output: [1,1]
Explanation: Changing the middle 9 to 8 or 10 gives [9,8,9] or [9,10,9],
both alternating, so one operation suffices. With exactly one operation
spent, the array still spans 1 — 9 down to 8 — no matter how the touches
are placed.
```

### Example 3

```text
Input: nums = [1,2,3,4,5,6]
Output: [0,5]
Explanation: Odd and even already trade places at every step, so no
operation is needed and the spread stays 6 - 1 = 5.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`

## Hints

### Hint 1

A rhythm-keeping array must read even, odd, even, ... or odd, even, odd,
... — and every element of `nums` already matches exactly one of those two
templates at its own index.

### Hint 2

A single operation shifts a value by exactly 1, which always flips its
parity; so a template disagrees in `d` places precisely when `d`
operations are both necessary and sufficient for it, and the cheaper
template sets `answer[0]`.

### Hint 3

Under the cheaper template each untouched element is pinned at its value,
while every touched one settles at `v - 1` or `v + 1` freely — slide a
window of width `w` over those bounds to find the least `w` that contains
a legal choice for everyone, and remember an alternating array of length
beyond 1 is always at least 1 wide.
