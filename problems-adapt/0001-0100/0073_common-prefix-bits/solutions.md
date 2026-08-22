# Solutions — Common Prefix Bits

Neither variant ever walks the range — both isolate the quantity directly,
one by aligning the endpoints with shifts, the other by shaving disagreeing
bits off the upper endpoint.

## common_prefix

Which bits can live through an AND taken over every number from `left` to
`right`? Only those set in all of them. Consider counting from `left` up to
`right`: each bit position below the binary prefix the endpoints share is
forced to flip somewhere along that walk, so the AND zeroes it. What is left
standing is precisely the leading bits the endpoints agree on, with zeros
everywhere below.

The code pinches off that prefix with shifts. Both endpoints move right until
they land on the same number, and the loop counts how many steps that took.
Once equal, the two agree on every bit still present, and shifting back left
by the count puts the shared bits back where they came from. A 32-bit input
needs at most 31 steps, so the cost tracks the bit length of the numbers
rather than the width of the range: `[1, 2147483647]` costs ~31 iterations
and yields 0, the endpoints having no bit in common.

When `left == right` the loop body never runs and the endpoint itself is
returned — correct, since one number ANDed with itself is itself.

**Complexity:** `O(log right)` time, `O(1)` space.

## brian_kernighan

The same answer, taken from the `right` side alone. Kernighan's identity
`right & (right - 1)` drops the lowest set bit of `right`; applied again and
again while `right > left`, it erases exactly the suffix across which the
endpoints disagree. Every bit it removes is one that could not have lived
through the range AND anyway — it already differs between the endpoints, or
the walk to it passes a multiple of its place value — while a bit every
number in `[left, right]` agrees on can never be the lowest set bit above
`left`, and so stays put. That survivor set is the common prefix.

At most 31 clearings can happen before `right` either exhausts its set bits
or sinks to `left`, and `left == right` skips the loop entirely. Each pass is
one comparison plus one AND, making this the leaner of the two loops; the
trade is an invariant that takes a moment longer to trust than
shift-until-equal.

**Complexity:** `O(log right)` time, `O(1)` space.
