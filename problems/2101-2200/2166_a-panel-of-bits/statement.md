# A Panel Of Bits

## Description

Design a structure that holds a fixed row of bits and supports toggling
the whole row at once, setting or clearing single positions, and quick
summaries of what the row currently looks like.

Implement the `BitPanel` class:

- `BitPanel(int size)` initializes the panel with `size` bits, every one
  of them `0`.
- `void fix(int idx)` sets the bit at index `idx` to `1`; if it is
  already `1`, nothing changes.
- `void unfix(int idx)` sets the bit at index `idx` to `0`; if it is
  already `0`, nothing changes.
- `void flip()` flips every bit — each `0` becomes `1` and each `1`
  becomes `0`.
- `boolean all()` returns `true` when every bit is `1`, and `false`
  otherwise.
- `boolean one()` returns `true` when at least one bit is `1`, and
  `false` otherwise.
- `int count()` returns how many bits are currently `1`.
- `String toString()` returns the panel as a string whose `i`th
  character is the value of the `i`th bit.

### Example 1

```text
Input:
["BitPanel", "fix", "fix", "flip", "all", "unfix", "one", "count", "toString"]
[[4], [0], [2], [], [], [1], [], [], []]
Output: [null, null, null, null, false, null, true, 1, "0001"]
Explanation:
BitPanel panel = new BitPanel(4); // the panel is "0000".
panel.fix(0);   // the panel becomes "1000".
panel.fix(2);   // the panel becomes "1010".
panel.flip();   // the panel becomes "0101".
panel.all();    // return false, not every bit is 1.
panel.unfix(1); // the panel becomes "0001".
panel.one();    // return true, bit 3 is 1.
panel.count();  // return 1, exactly one bit is set.
panel.toString(); // return "0001".
```

### Constraints

- `1 <= size <= 10⁵`
- `0 <= idx < size`
- At most `10⁵` calls in total are made to `fix`, `unfix`, `flip`,
  `all`, `one`, `count`, and `toString`.
- At least one call is made to `toString`.

## Hints

### Hint 1

Flipping the whole row for every `flip` call is far too slow — record
the flips and apply them lazily.

### Hint 2

Keep both the bit row and a flipped flag: `fix`/`unfix` only need to
know whether their bit is currently "really" 0 or 1 after the pending
flips, and `count` survives a flip as `size - count`.
