# Rising Drain Crash Time

## Description

Two memory sticks are attached to a misbehaving program. Their free
space, in bits, starts at `memory1` and `memory2`. The program's
appetite grows every second: during second number `t` (counting from 1)
it demands exactly `t` bits, taken from whichever stick currently has
more free space — the first stick wins a tie. If neither stick can cover
the demand at second `t`, the program crashes instead.

Return `[crashTime, memory1crash, memory2crash]`: the second in which
the crash happens, together with the free bits left on each stick at
that moment.

### Example 1

```text
Input: memory1 = 3, memory2 = 4
Output: [4,1,0]
Explanation: Second 1 drains 1 bit from stick 2 (4 -> 3); second 2
drains 2 bits from the tied-leading stick 1 (3 -> 1); second 3 drains 3
bits from stick 2 (3 -> 0). At second 4 the demand is 4 bits but stick
1, the larger one, holds only 1 — crash.
```

### Example 2

```text
Input: memory1 = 12, memory2 = 5
Output: [6,2,0]
Explanation: Stick 1 absorbs the first three draws (down to 6), the
fourth draw also lands there (6 -> 2), the fifth empties stick 2 (5 ->
0), and at second 6 the 6-bit demand exceeds stick 1's 2 free bits.
```

### Example 3

```text
Input: memory1 = 0, memory2 = 9
Output: [4,0,3]
Explanation: Every draw goes to stick 2 (9, 6, 3) until second 4, when
no stick covers the 4-bit demand.
```

### Constraints

- `0 <= memory1, memory2 <= 2^31 - 1`

## Hints

### Hint 1

How many seconds can the process possibly run? The t-th second alone
costs t bits, so the total consumed grows quadratically with time.

### Hint 2

The bound from Hint 1 is small enough that simply simulating the rules
second by second — larger stick first, ties to stick 1 — finishes in
well under a hundred thousand steps even at full 31-bit inputs.
