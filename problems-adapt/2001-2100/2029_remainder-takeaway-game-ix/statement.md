# Remainder Takeaway Game IX

## Description

Alice and Bob are back at the stone pile. There are `n` stones on the table,
given as an integer array `stones` where `stones[i]` is the value of the
`i`th stone.

The two alternate turns, Alice moving first, and on each turn the player
removes any one stone still on the table. If that removal brings the total
value of all removed stones to a multiple of 3, the player who made it loses
immediately. Should the table empty without anyone triggering that, Bob wins
by default — even if the next turn would have been Alice's.

With both sides playing perfectly, return `true` when Alice wins and `false`
when Bob does.

### Example 1

```text
Input: stones = [1,2]
Output: true
Explanation: Alice removes the stone of value 1 (removed sum 1). Bob must
take the stone of value 2, the removed sum reaches 1 + 2 = 3, and Bob loses.
```

### Example 2

```text
Input: stones = [2,5]
Output: false
Explanation: The stones go in either order, both get removed, and the final
removed sum 2 + 5 = 7 is never a multiple of 3. The table empties, so Bob
wins by default.
```

### Example 3

```text
Input: stones = [1,1,2]
Output: true
Explanation: Alice opens with the stone of value 2 (removed sum 2). Only the
two value-1 stones remain, so whichever one Bob removes next lifts the
removed sum to 3 and Bob loses.
```

### Constraints

- `1 <= stones.length <= 10⁵`
- `1 <= stones[i] <= 10⁴`

## Hints

### Hint 1

Only each value's remainder modulo 3 matters, so the whole game reduces to
three buckets of stones.

### Hint 2

A remainder-0 stone never moves the removed sum toward a multiple of 3 once
that sum is nonzero — it works as a pass that flips whose turn it is, which
is why only the parity of its count matters.

### Hint 3

With an even number of remainder-0 stones Alice needs both nonzero buckets
occupied; with an odd number she needs the two nonzero buckets to differ by
more than 2.
