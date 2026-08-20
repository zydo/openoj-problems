# Solutions — Nearest Subsequence Sum

## Meet in the Middle

At `n` up to 40, walking all 2^40 deletion patterns is out of reach, but a
split into two halves of at most 20 keeps each side near a million sums. A
subsequence of the whole array is the disjoint union of a left-half part and a
right-half part, so its sum is `sL + sR`; being near `goal` then means `sL`
sits near `goal - sR`. The search collapses to: enumerate one half's subset
sums, sort them, and for every subset sum `s` of the other half look up the
values bracketing `goal - s` by binary search.

Doubling builds the sum lists: from `[0]`, each element `v` appends a copy of
the current list shifted by `v`, turning `t` sums into `2t`. The left list is
sorted once; the right list never needs sorting because it only feeds
queries. For each right sum `s`, `bisect_left` finds where `need = goal - s`
would insert, and just the two neighbours `idx - 1` and `idx` — the floor and
the ceiling — can minimize `abs(left[j] + s - goal)`; both are tried and the
tighter difference survives.

Both lists hold 0, so the delete-everything sum is always in play, and `best`
starts as `None` so the first pair initializes it. Checking only the two
bracketing entries loses nothing: any other left sum lies beyond the interval
they span, hence strictly farther from `need`.

**Complexity:** `O(2^(n/2) n)` time, `O(2^(n/2))` space.
