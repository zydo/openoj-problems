# Solutions — Two Lone Elements

## XOR Split by Lowest Set Bit

Running XOR across the whole array annihilates every paired value — a pair
contributes `x ^ x = 0` — so what survives, call it `total`, is the XOR of
precisely the two unpaired values. That combined value cannot itself be zero,
since the two lone values are different from each other. Better still, each
bit that is set in `total` marks a position where those two values disagree,
and one such disagreement is all the leverage the algorithm needs.

Take the lowest set bit alone: `mask = total & -total`. Two's-complement
negation preserves that bit while inverting everything beneath it, so the AND
keeps exactly one bit. Now sort the array into the values that carry that bit
and the values that do not. A duplicated value always falls on the same side
as its twin, so pairs keep cancelling wherever they land — while the two lone
values, which disagree at precisely this bit, are separated one to each side.
XOR-ing only the side carrying the bit therefore isolates one lone value,
`first`. The second needs no second pass over the data: `total` was the XOR of
both, so `total ^ first` is the other.

Sorting the returned pair is constant work that only fixes the output order.
The whole method is two linear passes over the array plus a few integers,
meeting the required linear time and constant space. In Python the
arbitrary-precision integers make `total & -total` behave just as the classic
fixed-width trick does, with nothing to fear from overflow.

**Complexity:** `O(n)` time, `O(1)` space.
