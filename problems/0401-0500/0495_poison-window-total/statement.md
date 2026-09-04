# Poison Window Total

## Description

An attacker strikes at a sequence of known instants. Each strike applies a
status effect that lasts exactly `duration` seconds, starting at the strike
instant: a strike at second `t` covers the inclusive interval
`[t, t + duration - 1]`.

If a fresh strike lands while the effect from an earlier one is still
running, the earlier effect is cut short and the timer restarts — the effect
now ends `duration` seconds after the fresh strike.

You are given a non-decreasing array `timeSeries` of strike instants and an
integer `duration`. Return the total number of seconds on which the target is
affected.

### Example 1

```text
Input: timeSeries = [1,3], duration = 3
Output: 5
Explanation:
- The strike at second 1 affects seconds 1, 2, and 3.
- The strike at second 3 lands while that window is still open and resets
  the timer, so the effect now covers seconds 3, 4, and 5.
The affected seconds are `{1, 2, 3, 4, 5}`, five in total.
```

### Example 2

```text
Input: timeSeries = [1,2,3], duration = 1
Output: 3
Explanation: With `duration = 1` each strike affects only its own second, so
the affected seconds are `1`, `2`, and `3`.
```

### Example 3

```text
Input: timeSeries = [5], duration = 4
Output: 4
Explanation: A single strike affects seconds `5`, `6`, `7`, and `8`.
```

### Constraints

- `1 <= timeSeries.length <= 10⁴`
- `0 <= timeSeries[i], duration <= 10⁷`
- `timeSeries` is sorted in non-decreasing order.

## Hints

### Hint 1

The answer is the size of the union of all the windows. A window that gets
reset contributes only the part that elapses before the next strike.

### Hint 2

Walk the array left to right, adding the shorter of `duration` and the gap to
the next strike. The final strike, never reset, contributes its full
`duration`.
