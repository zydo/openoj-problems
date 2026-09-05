# Solutions — Least Combined Preference Index

## Index map, one scan of list2

The strings of each list are unique, so a hash map from every string of `list1`
to its index answers "where does this candidate count from" in constant time.
Build that map in one pass, then scan `list2` with index `j`: a string absent
from the map is not shared and is skipped on the spot, while a present one
carries the preference index `i + j` that decides everything.

The scan keeps the least preference index seen so far and its winners. A
strictly smaller index demotes everything collected and restarts the winners
at the current string; an equal index extends the tie. Because equal indices
are appended in scan order, the winners come out in the order they appear in
`list2` — exactly the order the answer pins, with no post-sorting. The
statement guarantees at least one shared pick, so the first one found always
seeds the winners and the answer is never empty.

**Complexity:** `O(n + m)` time, `O(n)` space.
