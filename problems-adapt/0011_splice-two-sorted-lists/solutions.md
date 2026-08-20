# Solutions — Splice Two Sorted Lists

Two merges that arrive at the same thread: each hands out the input nodes in
sorted order, each relinks rather than allocates, and each favours `first`'s
node when both heads are equal. What separates them is only the driver — a
loop advancing a tail pointer, or the call stack descending one node at a
time.

## Iterative

Both inputs are ordered, so the result is not open to choice: whichever head
is smaller right now is the node that comes next. A placeholder head removes
the one awkward moment every linked-list build has — attaching the first real
node — because `tail` begins at the placeholder and the true head falls out
as `dummy.next` at the end.

The loop itself: while neither list is exhausted, hook the smaller head on as
`tail.next`, walk that list one step, and advance `tail`. When both heads are
equal, `<=` selects `first`, which keeps the output stable relative to the
first list. The moment one side empties, the other side's leftover nodes are
already a sorted run, so a single `tail.next = ...` splices the whole
remainder — no node-by-node walk. Empty inputs fall out for free: the loop is
skipped and the splice attaches whichever list (if any) survived.

Each pass consumes a node permanently, so the step count is the combined
length; relinking existing nodes means the placeholder is the only allocation
and extra memory is constant.

**Complexity:** `O(n + m)` time, `O(1)` space.

## Recursive

One decision per call, made by the call stack. The base case needs no
thought: an empty list leaves the other list — whatever remains of it —
already ordered, so it _is_ the merged continuation. Otherwise the smaller
head stands at the front of the answer; recurse on that head's successor and
the untouched other list, and reattach whatever comes back as the head's new
tail. `<=` hands ties to `first`, the same stability rule the loop follows.

Every call retires one node, so the recursion lands after `n + m` calls and
allocates nothing while relinking. What it spends instead is stack — one
frame per merged node, exactly the depth the iterative form avoids. (The Rust
port detours through ownership: the winner's tail is unlinked so the
recursive call can own it, then the merged remainder is reattached — but the
node chosen on each call is the same one.)

**Complexity:** `O(n + m)` time, `O(n + m)` space for the call stack.
