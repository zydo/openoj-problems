# Solutions — Largest Subarray Sum with One Deletion

## Kadane with a one-deletion state

Scan left to right holding two rolling quantities. `no_del` is the classic
Kadane value: the best score of a stretch ending at the current index with
nothing crossed out. `one_del` is its twin with exactly one element crossed
out somewhere inside. The answer is the best value either quantity ever
reaches, because using the crossing-out is optional.

When index `i` arrives, the one-deletion state can come from only two places.
Either the crossing-out already lies to the left and the stretch simply
absorbs `arr[i]` (`one_del + arr[i]`), or the crossing-out happens exactly
here — `arr[i]` is dropped and the stretch becomes the untouched stretch that
ended at `i - 1`, which is the *pre-update* `no_del`. That ordering is the
one subtle line: compute `one_del` first, before `no_del` is extended by
`arr[i]`. The untouched state itself updates the ordinary way,
`max(no_del + arr[i], arr[i])`, restarting whenever a fresh element beats any
extension.

The crossing-out is never wasted or harmful: `best` watches both states, so
an all-negative array just reports its best single element through `no_del`,
as in `[-4, -2, -7]` scoring `-2`. A lone element is returned up front — it
cannot be crossed out and leave anything behind. Seeding `one_del` at
negative infinity forces a real first move rather than a phantom
crossing-out of nothing.

Traced on `[-2, 7, -1, 3]`: after the 7, `no_del` is 7 and `one_del` is 7
(from `[-2, 7]` with the -2 crossed out). The -1 moves them to 6 and 7, and
the final 3 lifts `one_del` to 10 — the stretch `[7, 3]`, whose score no
crossed-out alternative reaches.

**Complexity:** `O(n)` time, `O(1)` space.
