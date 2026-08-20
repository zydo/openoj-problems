# Solutions — Maximum Non-Adjacent Loot

One recurrence, two directions of travel. Reading left to right, two running
numbers carry everything the next position needs; asking the question from the
front and letting it unfold, a cache stops the same suffix being solved twice.
Either way the relation being computed is
`best(i) = max(best(i - 1), best(i - 2) + nums[i])`.

## dp

The restriction reaches exactly one position in each direction, which is what
keeps the problem small. Fix the last position of a prefix and ask what the
best legal total through it can be. If that position is left out, nothing about
the prefix before it changes and the answer is whatever the shorter prefix
already achieved. If it is taken, its immediate neighbour is barred, so the
rest of the total has to come from the prefix that stops two positions earlier.
Those two candidates are the only ones, and the larger is the answer.

Because the relation reaches back at most two steps, the table it would fill is
never consulted beyond its last two entries — so the implementation keeps just
those. When the loop arrives at a position, `cur` already holds the best for
the prefix ending one position back and `prev` the best for the prefix ending
two back. The paired assignment `prev, cur = cur, max(cur, prev + x)` slides
the window forward in a single statement, with no array and no temporary.

Both start at zero, which is the honest value for "no positions considered
yet", so a one-element array simply returns its own value and every prefix
length is handled by the same line. On `nums = [3,10,4,10,2]` the pair moves
through `(0,3)`, `(3,10)`, `(10,10)`, `(10,20)`, `(20,20)`, and the final `cur`
of `20` is the two tens.

**Complexity:** `O(n)` time, `O(1)` space.

## memo_dfs

Turned around, the same relation reads forward instead of backward: let
`best(i)` be the largest total obtainable using positions `i` and beyond.
Standing at `i`, either take `nums[i]` and continue from `i + 2`, since `i + 1`
is now barred, or leave it and continue from `i + 1`. Running off the end of
the array yields nothing, and that is where the descent stops.

Written plainly this fans out into two calls per position, but the fan-out is
an illusion — both branches land on suffixes, and there are only `n` distinct
suffixes to land on. The `memo` array holds each `best(i)` once it is settled,
using `-1` as the marker for "not yet asked", so every suffix is computed a
single time and every later request is a lookup. The total work is therefore
the same linear amount as the forward pass, merely discovered in the order the
recursion happens to want it.

Depth is bounded by the `best(i) -> best(i + 1)` chain, so at most one frame
per position. With `nums` capped at `100` values that is far inside every
runtime's default stack, and none of the ports needs to raise a limit.

**Complexity:** `O(n)` time, `O(n)` space for the cache, plus the frames.
