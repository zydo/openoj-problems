# Solutions — Secret Number Encoding

## Offset binary: length from bit length, value from the remainder

The table is the positive integers written in binary with the leading one
dropped, ordered by length. So the encoding of `num` splits into two parts:
the length is `bit_length(num + 1) - 1` (equivalently, the position of the
highest set bit of `num + 1`), and the content is `num + 1` with that highest
bit removed — the remaining low bits rendered most-significant first.

The examples confirm it: `6 + 1 = 7 = 111₂` leaves `11`; `42 + 1 = 43 =
101011₂` leaves `01011`; and `0 + 1 = 1₂` is nothing but a leading bit, so
its encoding is the empty string.

**Complexity:** `O(log num)` time, `O(log num)` space.
