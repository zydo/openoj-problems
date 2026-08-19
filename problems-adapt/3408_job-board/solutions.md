# Solutions — Job Board

## Lazy max-heap behind a job map

Ranking for `runTop` compares `(priority, jobId)` with both components
descending — a max-heap keyed on that pair answers it directly. The awkward
part is the rest of the interface: `reprioritize` and `withdraw` (and
`runTop` itself) each kill off exactly one job, and a binary heap cannot
delete an arbitrary entry.

So the `JobBoard` never deletes. A hash map from `jobId` to the live
`(priority, userId)` is the single authority: `post` writes it and pushes a
queue entry, `reprioritize` rewrites the priority and pushes a fresh entry,
`withdraw` erases the map entry and pushes nothing. A queue entry whose job
is missing from the map, or whose priority no longer matches the map, is
garbage — and garbage is only discarded when it surfaces.

`runTop` peeks and pops while the top fails that test. The first entry to
pass is the true maximum, since the heap order is total and nothing deeper in
the heap can outrank it; its job leaves the map and its user is returned.
When the queue drains entirely, `-1` falls out by itself. Every pushed entry
is popped at most once, so the cleanup amortizes into the pushes, while the
map keeps each validity test constant-time.

Worked on the example: after construction the queue holds jobs 21 and 12 at
priority 40, and `runTop` picks 21 because the tie breaks on the higher id.
The `reprioritize(12, 50)` call pushes a second entry for job 12; when
`runTop` next runs, the new entry outranks everything and the old priority-40
entry for job 12 becomes garbage — discarded later at no cost, or never.

The Python port stores `(-priority, -jobId, userId)` tuples so the min-heap
orders as a max-heap; the Java port stores `long[] {priority, jobId, userId}`
triples so priorities up to `10⁹` compare safely.

**Complexity:** `O(log n)` per `post`/`reprioritize`/`runTop`, `O(1)` per
`withdraw`, `O(n)` space.
