# Solutions — Merge k Sorted Lists

## Pairwise tournament merging

Merge the lists two at a time in rounds: pair up adjacent lists, merge each pair with the standard two-pointer dummy-head merge, and collect the survivors. When the count is odd the last list gets a bye and passes to the next round untouched. Each round halves the number of lists, so after `⌈log₂ k⌉` rounds a single merged list remains. This beats folding the lists in one at a time: a round walks every surviving node exactly once, giving `N log k` total node visits (for `N` nodes overall), whereas sequential merging can re-walk the same long list `k` times.

The pairwise merge itself is the two-list algorithm: link the smaller current head to the tail, advance that list, and splice the leftover tail when the other runs dry — nodes are relinked in place, never copied. Before any merging, the code drops every `None` entry, so `[]` and `[[]]` both collapse to an empty list of candidates and return `None` immediately.

With `N` nodes in total, every surviving node is walked once per round across `⌈log₂ k⌉` rounds; the shrinking array of list heads peaks at `⌈k/2⌉` references in the first round, while the relinking of nodes themselves is in place.

**Complexity:** `O(N log k)` time, `O(k)` space.
