# Solutions — Dispatch Jobs Across Machines

## Two heaps: free and busy

Keep a min-heap `free` of available machines keyed by `(weight, index)`,
and a min-heap `busy` of running machines keyed by release time. Process
jobs in order, tracking `cur`, the time the next assignment can happen.
For each job: first pop every finished machine (`release <= cur`) from
`busy` into `free`; if `free` is still empty, jump `cur` forward to the
earliest release in `busy` and drain again. Then take the `(weight,
index)`-smallest free machine, record its index, and push it onto `busy`
with release time `cur + jobs[j]`.

The heap orders reproduce the statement's priority rules exactly:
`(weight, index)` picks the lightest then lowest-indexed machine, and
draining everything released at or before `cur` handles simultaneous
wake-ups before any waiting job is assigned. Total work is one heap
push/pop per job plus one per machine activation.

**Complexity:** `O((m + n) log n)` time over `m` jobs and `n` machines,
`O(n)` space.
