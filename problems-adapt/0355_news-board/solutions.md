# Solutions — News Board

## Timestamped timelines with a min-heap feed merge

Two facts shape the design. First, messages arrive one at a time in chronological order, so stamping every `postMessage` with a global counter and appending it to the author's list leaves each timeline sorted without any work at post time. Second, a feed is the ten most recent messages across the user's own timeline and those of every followee — and no single timeline can contribute beyond its last ten entries, because anything older is already beaten by ten messages from that same source.

`getFeed` therefore gathers the sources — the user plus the follow set (a per-user hash set, making `follow` and `unfollow` constant average time and duplicate follows harmless) — and pushes each source's tail of up to ten entries into a **min-heap keyed on the timestamp**, popping the smallest entry whenever the heap exceeds ten. The survivors are precisely the ten newest messages; draining the heap from largest to smallest emits the feed in order. The heap never holds more than eleven entries, so a feed costs `O(11 log 11)` per source rather than anything proportional to how much has been written.

Timestamps are unique integers, which makes the ordering total — message ids and tie rules are never consulted. Unfollowing simply drops a source from the next merge; nothing posted is ever rewritten or erased.

**Complexity:** `O(1)` amortized per `postMessage`/`follow`/`unfollow`, `O(F log 10)` per `getFeed` with `F` sources (each contributing at most ten heap pushes), `O(total messages)` space.
