# Solutions — Sign Without the Product

The product of up to a thousand factors, each as large as 100 in magnitude,
has roughly two thousand decimal digits, yet only its sign is requested.
Multiplication's sign rules are far cheaper than multiplication itself.

## Track the running sign

A product is zero exactly when at least one factor is zero, so the scan can
return `0` the moment it meets a zero element — everything after it is
irrelevant. Otherwise the product's sign is decided by the negative factors
alone: an even count of them leaves it positive, an odd count negative.

The loop therefore keeps a single `sign` accumulator initialized to `1`.
Each nonzero element either leaves it alone (when positive) or negates it
(when negative), so after the loop `sign` holds `1` or `-1` according to the
parity of negative factors — exactly the requested sign, obtained without
ever forming the product. The whole computation is one bit of state per
element.

**Complexity:** `O(n)` time, `O(1)` space, where `n` is the length of
`nums`.
