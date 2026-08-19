# Solutions — Popularity Stack

## One Stack per Occurrence Count

The removal rule mixes two orderings, and no single structure carries both. A
count map alone cannot say which of two equally common values arrived later; a
single stack alone cannot say which value is most common. The design that
carries both is a **ladder of stacks**, indexed by occurrence count, beside a
map holding each value's current count.

The invariant is short: level `f` holds, bottom to top, every value that has
at some point reached exactly `f` occurrences, in the order it reached that
count. An insertion of `val` increments its count to `f` and appends it to
level `f` — allocating that level if the ladder has never grown so tall. So
membership of a level records _reaching_ a count, not merely _having_ it, and
the top of a level is the freshest arrival at that height.

That invariant delivers both halves of the removal rule for free. The values
stored most often are exactly the ones on the topmost non-empty level, and the
last of them to get there is that level's top entry — so removal is a single
list-end operation. What makes the demotion equally cheap is that the removed
value's entries on the levels beneath it are untouched: its record at level
`f - 1` survives, which is exactly the statement that it is now stored
`f - 1` times, so only its count needs decrementing.

The highest occupied level is tracked in a variable rather than searched for.
It increases by one when an insertion lands above the current top, which is
the only way to reach a new height. It decreases by one when a removal empties
the top level — and can never fall further, because emptying that level means
no value has that many occurrences any more, while the level below is
guaranteed non-empty by the invariant. Both operations touch a hash map and
the end of a list a constant number of times.

The Python and Java reference solutions are the same ladder, both growing it
on demand. With the call budget of `2 * 10⁴`, the ladder holds at most that
many entries spread over all its levels.

**Complexity:** `O(1)` per operation, `O(n)` space after `n` insertions.
