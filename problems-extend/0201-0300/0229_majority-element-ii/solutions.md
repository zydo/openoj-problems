# Solutions — Majority Element II

## Extended Boyer-Moore voting

The scan keeps two candidate slots, each with its own counter — the two-slot generalization of the single-counter vote that solves the more-than-half variant. A value matching a slot raises that slot's counter; a value matching neither is adopted by a slot whose counter sits at zero; only when both slots are occupied and neither matches do both counters drop together. Four integers are the entire state, which is the `O(1)`-space answer to the follow-up, and no occurrence table is ever kept.

At most two answers can exist at all: three elements each appearing more than `⌊n/3⌋` times would need strictly more than `n` occurrences in total, which is impossible. Why every qualifying element survives the vote: whenever both counters drop, one occurrence of each standing candidate is retired together with the stranger that caused the drop — a triple of three pairwise distinct values — so each retired occurrence of a more-than-a-third element is paid for by two elements that are not it. There are strictly fewer than `2n/3` such partners available, which is not enough to retire all of its more-than-`n/3` occurrences, so it must be standing in a slot when the array ends.

The vote only nominates, so a verification pass recounts each nominee's real occurrences and keeps only those strictly above `⌊n/3⌋` — this is also where an exactly-`n/3` element is excluded, and where a faded false-positive candidate is dropped. The zero-or-one-or-two survivors are finally sorted ascending, which pins the output order the examples show (`[1,2]`); on an input whose every element is identical both slots hold the same value, and the second is kept only after checking it differs from the first.

**Complexity:** `O(n)` time, `O(1)` space.
