# Two-Vessel Measure

## Description

Two unmarked vessels hold at most `x` and `y` liters. You have unlimited
water and may repeat any of these operations:

- fill either vessel to capacity;
- empty either vessel completely; or
- pour from one vessel into the other until the source is empty or the
  destination is full.

Return whether the combined amount of water in the two vessels can equal
`target` liters at some point.

Rather than simulate all fills and pours, use the common divisor of the two
capacities. A reachable total must be a multiple of `gcd(x, y)` and must not
exceed `x + y`; those two conditions are also sufficient.

### Example 1

```text
Input: x = 4, y = 7, target = 6
Output: true
Explanation: Since gcd(4, 7) is 1, every total from 0 through 11 is
reachable, including 6.
```

### Example 2

```text
Input: x = 4, y = 10, target = 3
Output: false
Explanation: Every reachable total is divisible by 2, but 3 is not.
```

### Example 3

```text
Input: x = 2, y = 9, target = 11
Output: true
Explanation: Fill both vessels to obtain their combined capacity of 11.
```

### Constraints

- `1 <= x, y, target <= 10³`
