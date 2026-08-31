# Best Seed for Maximum Reach

## Description

Targets sit at the integer positions in `nums`. A machine seeded with value
`s` destroys every target whose position is `s + c * space` for some
non-negative integer `c` — that is, every target congruent to `s` modulo
`space`.

Choose the seed value (it must be one of the positions in `nums`) that
destroys the most targets; if several tie, pick the smallest such value.

### Example 1

```text
Input: nums = [3,7,8,1,1,5], space = 2
Output: 1
Explanation: Seeding with 1 destroys every odd position — 1, 3, 5, 7 — four
targets; seeding with 8 destroys only the even positions, and none of the
other seeds reach more than four. The smallest winning seed is 1.
```

### Example 2

```text
Input: nums = [1,4,2], space = 3
Output: 1
Explanation: Positions 1 and 4 are congruent modulo 3 and form the largest
reachable group; 1 is the smaller seed of the two.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= space <= 10⁹`

## Hints

### Hint 1

Group the targets by `nums[i] % space`; every seed in a group destroys
exactly that group.

### Hint 2

Walk the sorted targets once, keeping the smallest position of each residue
class, then pick the class with the largest count — smallest seed on ties.
