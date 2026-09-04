# Solutions — Largest Pairwise XOR

## Greedy Prefix Construction

Build the answer from bit 30 down to bit 0. Once higher bits have been fixed,
setting the current bit is always preferable whenever some pair can achieve
it, because its value exceeds the sum of all lower bit values.

At a bit position, mask every input down to the prefix currently under
consideration and store those prefixes in a hash set. Let `candidate` be the
accepted answer prefix with the current bit added. Two prefixes `a` and `b`
produce it when `a XOR b == candidate`. Equivalently, after choosing `a`, the
set must contain `candidate XOR a`. If any prefix satisfies that lookup, keep
the bit; otherwise discard it.

All allowed inputs fit in 31 non-sign bits, so there are exactly 31 linear
passes. A one-element array returns zero naturally because pairing its only
position with itself cannot set any bit.

**Complexity:** `O(31n)`, or `O(n)`, expected time and `O(n)` auxiliary space.
