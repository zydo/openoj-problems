# Solutions — Longest Distinct-Value Path With One Repeat

## DFS With Two Sliding Windows (Strict and One-Repeat)

As in the strictly-distinct variant, a single depth-first walk from the root
carries the current root-to-node path plus `dist_path`, the prefix distances
from the root, so the total length of any downward window ending at the current
node is `d - dist_path[start]`. Allowing one repeated value calls for a second
window start over the same path: `top` is the shallowest depth from which every
value in the window is distinct, and `second` — never smaller than `top` — is
the shallowest depth from which at most one value repeats. The candidate at
each node is the window `[second .. depth]`, and the best (length, node-count)
pair is relaxed with it.

Both starts answer to `last`, the map from each value to the depth of its most
recent occurrence on the path. Entering a node whose value last appeared at
`prev_last`: when `prev_last >= top`, the repeat has crept inside the
all-distinct window, so that window is promoted to be the one-repeat window
(`second = top`) and `top` jumps past the occurrence (`top = prev_last + 1`);
when `prev_last >= second` only, a second repeat has entered the tolerated
window and `second` alone moves to `prev_last + 1`; a repeat above both windows
moves nothing. The invariant `top <= second` holds throughout, with the gap
never wider than one duplicated value.

In the worked example (`nums = [5,5,6,7,5,8,5,6,9]` on the 9-node tree),
reaching node 4 puts the second 5 inside the strict window: `top` advances past
node 1 while `second` stays put, and the surviving window 1 → 2 → 4 has length
11 with 3 nodes. At node 8 the same relaxation happens one level later,
producing 1 → 3 → 6 → 8, also length 11 but with 4 nodes — so the tie-break
keeps 3. Extending toward the root would admit a third 5, pushing `second` past
`top`'s history and shrinking the window below 11, which is why the answer
never touches node 0.

Backtracking restores state exactly: entering a node saves the previous `last`
entry for its value together with both window starts, and the matching exit
event on the explicit stack pops the path tail and all three saved values, so
each sibling subtree meets pristine windows. The explicit stack also keeps the
traversal safe at `n = 5 * 10⁴` whatever the recursion limit.

Edge cases: a node whose own value occurred far above both windows (nothing
moves), a second repeat arriving while one is already tolerated (only `second`
moves), and the minimum-node tie-break among equal maximal lengths, seeded with
`[0, 1]` for the single-node path.

**Complexity:** `O(n)` time, `O(n)` space.
