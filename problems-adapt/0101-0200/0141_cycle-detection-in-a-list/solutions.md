# Solutions — Cycle Detection In A List

Both ports begin identically, because the arguments are not yet a chain. One
node is created per entry of `values`, the nodes are wired front to back, and
when `tailLink` is not `-1` the final node's link is attached to the node at
that index. An empty `values` produces no chain at all and answers `false` on
the spot. That construction alone holds every node, so `O(n)` storage is forced
by the argument format no matter which detector follows; what the two variants
differ in is whether they add more on top of it.

## Hash set

The direct reading of the definition. Walk forward from the front and record
every node you stand on in a set keyed by the node's identity rather than its
value — `values = [6,4]` and a chain of two sixes must behave the same way, so
the number stored in a node tells you nothing about whether you have been
there. Falling off the end means the chain terminates and there is no cycle;
arriving at a node already in the set means the walk has come back round, which
is exactly the definition of one.

This needs no argument about relative speeds — the question it asks is just
"have I stood here before?" — and that transparency is what it is for. The
price is the set, `O(n)` memory, which is the bound the follow-up exists to
avoid.

**Complexity:** `O(n)` time, `O(n)` space.

## Floyd

Send two walkers from the front, one advancing a single node per step and the
other two. Either the fast walker runs out of chain — it lands on nothing, or
the node it lands on has no outgoing link — in which case the chain terminates
and there is no cycle; or it never runs out, which can only happen because it
is going round.

Once both walkers are inside the loop the fast one closes the gap by exactly
one node per step, so the gap shrinks by one each time and can never be
stepped over. Within a single lap it must land on the same node as the slow
walker, and that coincidence is the proof. Nothing needs to be remembered: two
references are the entire detector, which is the constant extra memory the
follow-up asks for, against the `O(n)` a visited-set would spend.

Cost after construction is at most about `2n` advances before the fast walker
either exits or the two coincide.

**Complexity:** `O(n)` time, `O(n)` space — the construction; the detection
itself is `O(1)`.
