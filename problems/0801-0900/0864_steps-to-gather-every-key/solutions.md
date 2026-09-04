# Solutions — Steps to Gather Every Key

## Breadth-First Search over (Square, Keyring) States

Ordinary shortest-path search on the plan fails for a simple reason: the same
door is impassable early and passable later, so "have I been here?" is not a
question about a square. It is a question about a square _together with_ what
you carry. Since the plan holds no more than six keys, the keyring is a
six-bit integer, and a state is the triple (row, column, keyring). There are
at most `m · n · 2^k` of them, which is small enough to enumerate outright.

One scan of the plan does the setup: it records where `'@'` stands and ORs a
bit for every lowercase letter it sees, producing the keyring that counts as
finished. Nothing else about the plan needs preprocessing.

From then on it is a plain breadth-first traversal, run on states instead of
squares. Popping `(r, c, ring)`, the four edge-adjacent squares are filtered:
outside the plan or a wall, skip; an uppercase letter whose bit is missing
from `ring`, skip; otherwise the move is legal, and if the destination holds a
lowercase letter its bit is added, giving the successor's ring. A state is
enqueued only if it has never been seen, with a distance one greater than its
predecessor. Because every move costs the same, the first time a state is
reached is by a shortest walk to it — this is exactly why breadth-first order
is the right traversal and why no priority queue is warranted.

Two details decide correctness. Revisiting a square must stay allowed: a walk
that doubles back over ground it has already covered, now carrying more keys,
is often the only way through, and the state-based visited set permits that
while still forbidding genuinely repeated work. And the answer is read off the
moment a state's ring equals the finished ring — the step onto the last key is
already counted in that state's distance, so no adjustment is needed. When the
queue drains with no such state, some key is walled off or locked behind its
own door, and the function reports `-1`.

**Complexity:** `O(m · n · 2^k)` time and space, with `k <= 6` the number of
keys.
