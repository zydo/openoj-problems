# Solutions — The Majority Element

Every reading here stands on the same guarantee: one value occurs strictly
more than `⌊n / 2⌋` times, and no array can hold two values that both do.
The full sort turns that count into position — ordered by value, the
majority's occurrences form one run longer than half the array, and a run
that long must cover the middle, so the middle element is the answer. The
hash count takes the guarantee at face value and tallies it: one sweep
counts every distinct value, and the first tally to cross half the array
names the answer. Boyer-Moore voting spends the majority's occurrences
against one opposing value apiece on a single scan, until the candidate
left standing is the answer. The sort pays `O(n log n)` comparisons, the
count `O(n)` time and `O(n)` space, and the vote `O(n)` time in `O(1)`
space — the only one of the three that meets the follow-up's demand.

## Full sort

Sorting collapses the question about counts into a question about
position. A sort places equal values in one contiguous run, and the
majority's run is longer than half the array; a run that long cannot
squeeze past the centre — its first entry sits at or before the halfway
index and its last at or after — so the element at index `n // 2` of the
sorted order is the majority element, whatever order the input arrived in.
A single-element array sorts trivially and returns its only entry.

The code is the argument carried out directly: arrange the values, read
the middle, return it. Where the language hands the function a buffer it
owns, the sort runs in place; where the caller's list is worth leaving
untouched, it runs on a copy — either way the readback is one subscript
and nothing else is bookkept. That indifference is also the price: every
comparison the sort spends goes to ordering values whose counts are never
consulted, which is what makes this the slowest of the three.

**Complexity:** `O(n log n)` time, `O(n)` space for the sorted copy.

## Hash count

The guarantee taken at face value: the answer is the one value whose tally
passes `n // 2`, so count occurrences per distinct value in a hash map and
watch for the first tally to cross that line. One sweep fills the table —
each element increments its own entry — and the moment an element's tally
exceeds half the array, that element is reported and the sweep stops.

Stopping early is safe twice over. No rival can catch a tally already past
half, since two values cannot both own more than half the positions; and
because a majority is promised, some tally always does cross, so the sweep
never runs off the end — the languages that require a return on every path
close with an explicit unreachable branch. The table holds at most one
entry per distinct value, so nothing about the values themselves — sign,
spread, order — matters to it. This is the linear-time half of the
follow-up, bought with the space the vote below does without.

**Complexity:** `O(n)` time, `O(n)` space.

## Boyer-Moore voting

The scan keeps exactly one candidate and one counter. When the counter sits at zero the
current element is adopted as the new candidate; afterwards a match with the candidate
raises the counter and a mismatch spends it, so every element votes for or against a
single standing value. No table of counts is ever kept — the pair `(candidate, count)`
is the entire state, which is what the follow-up's `O(1)` space asks for.

Why the survivor is the majority: every mismatch cancels one occurrence of the candidate
against one occurrence of some other value, so each unit the counter drops stands for a
pair of elements deleted from consideration. Any stretch of the array in which the
majority element is the candidate can lose at most the minority elements it holds, and
any stretch in which it is not still deletes at least as many minority elements as
majority ones. Since the majority owns more than half of all elements, it cannot be
fully cancelled across the whole array, and the candidate left standing at the end is
it.

The code needs no second pass to confirm the winner because the statement guarantees a
majority element exists, and it initializes `candidate` with the first element purely so
the zero-counter swap on the very first step is harmless — adopting `nums[0]` when the
count is zero is exactly what the loop does anyway.

**Complexity:** `O(n)` time, `O(1)` space.
