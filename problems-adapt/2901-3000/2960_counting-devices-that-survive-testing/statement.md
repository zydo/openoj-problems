# Counting Devices That Survive Testing

## Description

You are given a 0-indexed array `batteryPercentages` of length `n`,
where `batteryPercentages[i]` is the charge level of device `i`.

The devices are put through a test sweep, one device at a time from
left to right:

- When device `i` still holds a positive charge, it counts as tested,
  and every later device `j` in `i + 1 .. n - 1` loses 1 point of
  charge, floored at zero: `batteryPercentages[j] =
max(0, batteryPercentages[j] - 1)`.
- When device `i` is already at zero, nothing is drained and the sweep
  simply moves on.

Return how many devices end up tested once the sweep finishes.

### Example 1

```text
Input: batteryPercentages = [3,0,2,1]
Output: 2
Explanation: Device 0 has charge, so it is tested and devices 1..3
drop to [0,1,0]. Device 1 is now empty, so the sweep skips it. Device
2 still holds 1, so it is tested and device 3 floored at 0. Device 3
is empty and is skipped. Two devices are tested.
```

### Example 2

```text
Input: batteryPercentages = [2,2,2]
Output: 2
Explanation: Device 0 is tested and drains the rest to [2,1,1].
Device 1 still has 1, so it is tested and drains device 2 to 0. Device
2 is now empty and is skipped, leaving 2 tested devices.
```

### Example 3

```text
Input: batteryPercentages = [0,0,5,5]
Output: 2
Explanation: The first two devices start empty and are skipped.
Device 2 is tested and drains device 3 by 1; device 3 still has 4, so
it is tested too. Both charged devices are tested.
```

### Constraints

- `1 <= n == batteryPercentages.length <= 100`
- `0 <= batteryPercentages[i] <= 100`

## Hints

### Hint 1

Playing the sweep out literally — updating the whole remaining suffix
after every test — finishes comfortably in `O(n²)`.

### Hint 2

Each test so far has drained exactly one point off every device still
waiting, so device `i` is testable precisely when its original value
exceeds the number of tests already performed.
