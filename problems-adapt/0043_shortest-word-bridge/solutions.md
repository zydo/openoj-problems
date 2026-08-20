# Solutions — Shortest Word Bridge

## Wildcard-Pattern BFS

Read the dictionary as an implicit graph — vertices are words, and an edge
joins two words that differ in one letter — and the task becomes a distance
query: how many vertices lie on the shortest route from `startWord` to
`targetWord`. A ring-by-ring sweep from `startWord` answers exactly that,
because the ring a vertex first appears in is its distance. The hard part is
not the sweep but finding a word's neighbours; testing every dictionary entry
against every frontier word is quadratic, and with 5000 words that is too slow.

Grouping by pattern is the way through. Blank out one position of a word and
use the result as a key: `"malt"` files under `"*alt"`, `"m*lt"`, `"ma*t"` and
`"mal*"`. Two words that differ in exactly one position then share the
pattern obtained by blanking that position, so all of a word's neighbours sit
in one of its own groups. One pass over the dictionary builds every group.

The sweep consumes the groups as it goes: when a word leaves the frontier,
each of its patterns' groups is taken out of the map, so a group is read once
in total and two frontier words of the same ring cannot both reach into it. A
separate record of words already swept keeps each word from entering a later
ring twice. The count starts at `1` — `startWord` is itself part of the
bridge — and grows by one per ring, and the moment the sweep's current word
equals `targetWord` the count is the answer.

Two short cuts keep the method honest: `targetWord` is looked up before any
work happens, since no bridge can end on a word outside the dictionary and the
answer in that case is `0` immediately. On the first example the rings are
`lead`, then `load`, then `goad`, then `gold` — four words — while `loam` and
`foam` are swept as a branch that never carries the target.

With `N` words of `L` letters each, building the groups and sweeping both
construct `N · L` patterns of length `L`.

**Complexity:** `O(N · L^2)` time, `O(N · L)` space.
