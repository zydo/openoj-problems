# Solutions — Ten-Sided Roll From a Seven-Sided Die

## Rejection Sampling

One roll carries seven equally likely outcomes, and any function of it splits
those seven into ten buckets that cannot all be the same size — ten does not
divide seven, and no amount of cleverness repairs that. Pairing two rolls
raises the count to 49 outcomes, still equally likely and still not a multiple
of ten, but now there is room to throw some away. Numbering the pairs with
`t = (a - 1) * 7 + b` walks `1..49` exactly once, which is what makes the
throwing-away safe to reason about.

The cutoff is chosen as the largest multiple of ten that fits: 40. Under it,
each of the ten answers claims exactly four of the numbers, so folding with
`((t - 1) mod 10) + 1` hands out the ten answers at identical rates. The nine
numbers above the cutoff are the ones that cannot be shared evenly; they are
discarded as whole attempts and the pair of rolls is repeated. Discarding both
rolls is the part that keeps the result fair — recycling the surviving half of
a rejected attempt would correlate it with the next one and tilt the
distribution.

Because a graded submission cannot be allowed to consult a real random source,
this bundle replays a recorded sequence of faces instead. The loop keeps a
cursor into `seven_rolls`, reads two faces per attempt, and advances the cursor
by two whether the attempt was kept or dropped, which is exactly the pattern of
calls a live implementation would make. On the example
`[6,6,4,2]` the first attempt scores 41 and is thrown out, the cursor jumps
past both faces, and the second attempt scores 23 and returns 3.

An attempt survives with probability 40/49, so the number of attempts averages
49/40 and the die is rolled about 2.45 times per result — the answer to the
first follow-up. Nothing is stored except the cursor.

**Complexity:** `O(1)` expected time, about 2.45 rolls consumed, `O(1)` space.
