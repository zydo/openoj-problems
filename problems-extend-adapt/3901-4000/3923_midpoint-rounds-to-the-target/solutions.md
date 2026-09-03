# Solutions — Midpoint Rounds To The Target

## Fixed-point relaxation

Coordinates are integers from `0` through `6`, so there are at most `7³ = 343`
possible points. A midpoint is always an integer in the same coordinate
range. Keep the earliest round at which each point becomes available; initial
points have round `0`.

Repeat relaxation over all pairs of available points. A pair can produce a
midpoint only after both endpoints are available, so its round is one more
than the larger endpoint round. The relaxation terminates when no
point improves.

**Complexity:** `O(7⁶ * iterations)` time, `O(7³)` space.
