# Solutions — Longest Common Subpath

## Binary Search on Length with a Double Rolling Hash

If a common subpath of length `x` exists, then so does one of every shorter length (any prefix of it), so "a common subpath of length L exists" is a monotone predicate in `L`. The solution binary-searches `L` over `[0, min path length]`, taking the upper-mid variant (`(lo+hi+1)//2`) since the predicate is satisfied by smaller values, and converges on the maximum feasible length, with 0 as the answer when nothing matches.

The feasibility check hashes every window of length `L` in each path with a rolling polynomial hash. Two independent moduli (10^9+7 and 10^9+9) with base 1000003 are combined into a pair stored in a set, making an accidental collision astronomically unlikely; the code also adds 1 to each city id so a run of city 0 does not hash to the all-zero value regardless of position. The first path contributes its full set of window hashes, and each subsequent path's set is intersected into it, bailing out early the moment the intersection becomes empty. Sliding the window costs constant work per step: multiply by the base, subtract the outgoing digit times `BASE^L`, add the incoming digit, all in both moduli.

`exists(0)` is unconditionally true and a path shorter than `L` forces an immediate false, so the binary search bounds stay consistent. The `common` set never exceeds the first path's window count, and per-path sets are rebuilt and discarded, keeping memory proportional to the total input size.

**Complexity:** `O(S log L)` time (`S` = total length of all paths, `L` = shortest path length), `O(S)` space.
