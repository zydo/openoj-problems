# Solutions — Random Draw Multiset

## Array of occurrences plus per-value slot sets

One occurrence per value was the luxury of the set version; here a value may
sit in many slots at once, so the map side of the classic pairing generalizes:
the container keeps `values`, a plain array holding one entry per occurrence,
and `indices`, a hash map from each value to the *sorted list of slots* where
its copies sit. Presence is "does the list exist", the leftmost copy is
`positions[0]`, and the array still fronts the report: `draw` answers
`values[0]`.

`insert` appends to `values` — the new slot is always the largest so far —
and slides that slot into the value's sorted list, creating the list on the
first copy. It answers `true` only when the map had no list for the value at
all.

`remove` takes the leftmost slot `i` of the value and heals the array in the
usual constant-time way: the final entry is copied onto slot `i` and the last
slot is dropped. Two bookkeeping paths follow from *which* value moved.
- A different value moved: its list swaps the final slot for slot `i`, both
  maintained in sorted order by construction (the final slot is the largest
  anywhere, slot `i` was just vacated below the removed value's own copies).
- The final entry is another copy of the removed value itself: nothing in
  `values` changes hands — a copy lands on a slot that already held the same
  value — so the list merely sheds the final slot and keeps slot `i`.

Either way the targeted value's list loses its front element, and an empty
list retires the map entry so the next `insert` can again report `true`.

Why sorted lists rather than sets: the judge always targets the leftmost
copy, so `positions[0]` must be available instantly — with plain hash sets
you would have to scan for the minimum. Insertion keeps them sorted because
appended slots are strictly increasing, and the swap repairs use
binary-search deletion plus ordered reinsertion, `O(log n)` inside an
average-`O(1)` amortized budget that stays far inside the limits for
`2 * 10⁵` operations.

**Complexity:** average `O(1)` per `insert` and `draw`, `O(log n)` per
`remove` for the ordered repair (amortized well under the limits);
`O(n)` space.
