# Solutions — Stone Draft with Rival Values

## Greedy by Combined Worth

Watch the ledger that decides the game — Alice's bank minus Bob's.
Taking stone `i` moves that ledger twice: the taker's own worth lands on
their side, and the rival's worth for the same stone is erased from
their reach. Whichever player moves, grabbing stone `i` therefore swings
the ledger by `aliceValues[i] + bobValues[i]`: own gain plus denial.
Both players thus chase the same ranking, and the game collapses into
alternating grabs at the largest combined worth.

Concretely, sort the stone indices by `aliceValues[i] + bobValues[i]`
descending and walk the list: even ranks go to Alice (add her worth),
odd ranks to Bob (subtract his). With `aliceValues = [1,2,3]` and
`bobValues = [4,5,9]` the combined worths are `5, 7, 12`, so the draft
runs stone 2, stone 1, stone 0 — Alice banks `3 + 1`, Bob banks `5`, and
the ledger's final value `-1` reports Bob's win. The exchange argument
behind the ordering: a mover who passes over a larger combined worth for
a smaller one hands the rival the larger stone, and the ledger comes out
strictly worse for the mover.

Equal combined worths can be broken arbitrarily — only the multiset of
alternating picks matters. The sweep after sorting is linear, so sorting
dominates, and the ledger never exceeds `100 · 10⁵` in magnitude, well
within plain integers.

**Complexity:** `O(n log n)` time, `O(n)` space.
