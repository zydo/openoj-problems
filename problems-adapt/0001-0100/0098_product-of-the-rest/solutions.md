# Solutions — Product Of The Rest

Both variants rest on one split: skipping cell `i` leaves the block to its
left and the block to its right, and their two products multiply to the value
wanted at `i`. One variant builds those two blocks of products as real arrays
and pairs them off; the other never stores them, carrying one accumulator per
direction instead.

## prefix_arrays

Skipping a single cell cuts the array into two contiguous blocks, and each
block's product is a running product — which is exactly why division is never
required. That matters twice over: the statement bans division outright, and a
divide-the-total shortcut would collapse the moment a zero appears.

This variant keeps the factorization visible. `pre` is filled left to right so
that `pre[i]` is the product of the `i` entries ahead of index `i`, with
`pre[0] = 1` standing for the empty product at the left edge; `suf` is filled
right to left with the mirror convention, `suf[n] = 1`. A third loop pairs them
up as `pre[i] * suf[i+1]`, the two blocks that between them cover everything
but `nums[i]`. Each phase is its own loop, so the code reads in the same order
as the argument.

Zeros are handled by the arithmetic rather than by a branch. On
`nums = [6,-2,0,7]` the prefix products past index 2 are all zero and so are the
suffix products before it, which zeroes cells 0, 1 and 3; at cell 2 the two
blocks are `6 * -2` and `7`, giving `-84`. Two or more zeros leave every cell
zero, again with no special case. What this costs is memory: two arrays of
`n + 1` products live alongside the array being returned.

**Complexity:** `O(n)` time, `O(n)` auxiliary space beyond the output array.

## rolling

Same identity, no helper arrays. Notice that `pre[i]` is consumed at cell `i`
and never looked at again — a value with a lifetime that short does not need an
array, only a variable. The forward pass therefore writes the current left
accumulator into `answer[i]` _first_ and multiplies `nums[i]` into it
afterwards, which is what makes the stored value the product strictly ahead of
`i` rather than including it.

The reverse pass mirrors that discipline with a second accumulator: multiply
`answer[i]` by the right-hand running product, then absorb `nums[i]` into it.
After both passes every cell has been multiplied by its left block and its
right block exactly once. Two scalars are the entire working state, so the
follow-up's `O(1)` bound is met — on `[3,5,2,4]` the forward pass leaves
`[1,3,15,30]` and the reverse pass turns it into `[40,24,60,30]`.

Zeros continue to take care of themselves, for the same reason as in the
explicit-array version, and division is still nowhere in sight.

**Complexity:** `O(n)` time, `O(1)` space beyond the output array.
