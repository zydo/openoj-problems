# Four-Button Light Switch II

## Description

A room holds `n` light bulbs, numbered `1` through `n` and all switched on
to start, plus a wall of four buttons. Each button toggles a different
subset of the bulbs:

- Button 1 toggles every bulb.
- Button 2 toggles only the even-numbered bulbs (`2, 4, ...`).
- Button 3 toggles only the odd-numbered bulbs (`1, 3, ...`).
- Button 4 toggles bulbs whose label is `3k + 1` for `k = 0, 1, 2, ...`
  (`1, 4, 7, 10, ...`).

You must press a button exactly `presses` times in total, choosing freely
among the four buttons on each press (repeats allowed).

Given `n` and `presses`, return how many distinct on/off patterns the room
can end up showing.

### Example 1

```text
Input: n = 6, presses = 1
Output: 4
Explanation: A single press of button 1, 2, 3, or 4 each toggles a
different subset of the six bulbs, giving four distinct patterns.
```

### Example 2

```text
Input: n = 4, presses = 2
Output: 7
Explanation: Pairing any two of the four buttons (or pressing the same
button twice, which cancels back to all-on) reaches 7 distinct patterns
out of the 16 possible button-pair choices.
```

### Example 3

```text
Input: n = 1, presses = 5
Output: 2
Explanation: With only bulb 1 to track, its final state depends purely on
whether an odd or even number of the five presses actually touch it —
both are reachable, so only 2 patterns exist regardless of how large
presses gets (as long as at least one press is made).
```

### Constraints

- `1 <= n <= 1000`
- `0 <= presses <= 1000`
