# Solutions — Single Number II

## Per-Bit Counting Modulo Three

XOR cancels even occurrence counts, so it cannot help when values appear three times. Instead, look at the array one bit position at a time: every value appearing three times contributes either 0 or 3 to the count of set bits at a position — always a multiple of three — while the unique value contributes exactly 0 or 1. So for each of the 32 bit positions, the set-bit count taken modulo three is precisely that bit of the answer.

The code loops the 32 positions, sums `(value >> i) & 1` over the array, and sets bit i of the result whenever the count is not divisible by three. A final step repairs the sign: Python integers are unbounded, so a pattern with bit 31 set gets assembled as a large positive number and must be reinterpreted by subtracting 2^32, yielding the intended negative 32-bit value.

Thirty-two passes over the array are still linear time — the constant 32 is independent of n — and the only storage is a handful of scalars, satisfying the constant-space requirement that rules out the obvious counting hash map.

**Complexity:** `O(n)` time, `O(1)` space.
