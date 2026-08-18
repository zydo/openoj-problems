# Solutions — Random Node from a List

## Materialize once, then draw a slot

Every **node** must be equally likely, and the wire form already hands the
constructor the node values in order — so a single copy of that array stands
in for the list faithfully, one slot per node. `draw` then collapses to the
simplest distribution there is: pick an index uniformly from `[0, n)` and
report the value parked there. One slot per node makes a uniform slot a
uniform node; a value spread over three nodes consequently comes back three
times as often as a lone value, which is precisely the semantics the judge
measures — roughly 25000 replays per judged call, with each value's observed
frequency required to hug `count(value) / n`.

Both ports do exactly this: `random.randrange(n)` in Python and
`ThreadLocalRandom.current().nextInt(n)` in Java are uniform over the `n`
indices, so a call costs constant work.

**Complexity:** `O(n)` construction, `O(1)` per `draw`, `O(n)` space.

## Reservoir of one (Follow-up)

When the list is vast, or its length simply is not available, the `O(n)`
copy is the part to surrender — and it is surrenderable. Walk the nodes in
order carrying one `candidate` plus a counter `k` of nodes already seen. As
the `k`-th node arrives, let it seize candidacy with probability exactly
`1/k` (draw uniformly from `[0, k)` and switch on a single outcome).

Induction keeps the invariant: assume the candidate is uniform over the
first `k - 1` nodes. It outlives the `k`-th step with probability
`(k - 1) / k`, the newcomer wins with `1/k`, and each of the `k` nodes ends
up held with probability `1/k` — textbook reservoir sampling, reservoir size
one. The price is one random draw per node of a single streaming pass and
two words of state; and `draw` can no longer be constant-time, because with
only the surviving candidate kept, redrawing means re-walking. Where the
length is known, the array above remains the right shape.

**Complexity:** `O(1)` extra space, one pass over the unknown-length stream
per draw.
