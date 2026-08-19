# Solutions — Buildable Recipes

## Topological Sort (Kahn's Algorithm)

"Can I complete this recipe?" is a dependency question: every consumed item
must be a pantry supply or a completed recipe, and recipes may depend on each
other in circles — in which case nobody in the circle finishes. That is a
directed graph, and the completable recipes are exactly the nodes reachable
from "already have".

Build it with recipes as nodes. For recipe `i`, an item already in the pantry
is discarded; an item that is neither pantry nor any recipe brands `i`
permanently impossible (example 1's unused "salt" never matters, but an
unknown item always would); and each distinct recipe dependency adds an edge
from that recipe to `i` plus one to `i`'s indegree. Repeated items inside one
ingredient list are collapsed so the indegree counts each dependency once.

Kahn's algorithm then seeds a queue with every recipe whose indegree is zero
and whose fate is not sealed — those need nothing beyond the pantry.
Completing a recipe appends it to the answer and releases each dependent,
which joins the queue the moment its last dependency completes. Example 2 is
the simplest chain: "dough" starts free, and "pie" follows it through.

Circular waits never drain to indegree zero, so they drop out by themselves —
example 3's "kombucha"/"starter" loop — and anything downstream of a doomed
recipe keeps a positive indegree forever and drops out too. Branded-impossible
recipes are passed over while releasing dependents, so one dead ingredient
poisons its own recipe without leaking into the rest. The finished list comes
back sorted, purely for determinism.

With `n` recipes and `m` total ingredient entries, construction touches each
entry once and the queue pass walks each edge once.

**Complexity:** `O(m + n log n)` time, `O(m + n)` space.
