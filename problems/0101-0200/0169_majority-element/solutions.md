# Solutions — Majority Element

Three routes to the same value, each leaning on the premise — more than half
the positions hold the answer — in its own way. The sort leans on it
geometrically: the majority's occurrences form one run longer than half the
array, and any run that long must cover the middle of any ordering, so the
middle of a sorted copy is the answer. The hash count takes it literally
and tallies every value until one tally crosses half. Boyer-Moore turns it
into arithmetic, cancelling majority votes against opposition on a single
sweep until a survivor is all that stands. A sort buys the shortest code, a
table buys a one-pass answer, and Boyer-Moore meets the follow-up's
challenge of linear time and constant space at once.

## Sorting

A majority is a statement about counts, but sorting turns it into a
statement about position. Sort a copy and the majority's occurrences stand
together as one run; that run is longer than half the array, and a run that
long cannot sit anywhere except over the centre — its first entry lies at or
before the halfway index, its last at or after. Whichever value occupies the
middle of the sorted array is therefore the majority, whatever order the
input arrived in.

That is the entire algorithm: sort, read index `n / 2` (fractional part
discarded), return it. A single-element array is sorted trivially and its
only element is the middle. All the work is the sort itself; the answer is
one subscript.

**Complexity:** `O(n log n)` time, `O(n)` space for the sorted copy.

## Hash Count

The direct reading of the premise: the answer turns up more than `n / 2`
times, so keep one tally per value and stop the moment a tally crosses half
the array. That early exit is safe because no value can be overtaken after
it — two values cannot both hold more than half the positions — and because
a majority is promised, some tally always does cross.

One sweep builds the table and usually ends it early; `[5,8,8,2,8,6,8]` is
out the door as soon as the fourth `8` lands. This is the linear-time,
linear-space answer the statement's follow-up names: the table holds at most
one entry per distinct value, and nothing about the values themselves —
sign, spread, order — matters to it.

**Complexity:** `O(n)` time, `O(n)` space.

## Boyer-Moore Voting

The premise gives more than it seems: the answer holds over half the
positions, so _all other values together_ hold fewer. Picture striking out
pairs — one occurrence of the answer against one occurrence of anything else,
chosen in any order. The other values run out first, so at least one
occurrence of the answer survives unpaired. That argument never names a
specific pairing, and that is what makes a single sweep enough: the sweep does
not need to have chosen the right pairs in advance.

The sweep keeps a `candidate` and a tally. A tally of zero means the stretch
just passed cancelled itself out perfectly — and a self-cancelling stretch
cannot hold more than half of anything, so it is safe to discard: whatever it
contained, the answer still holds a majority of the remainder. The element
then in hand becomes the new candidate with a tally of one. From there the
rule is one line: a repeat of the candidate raises the tally, anything else
lowers it by one, i.e. cancels one candidate vote against one opposing vote.

Because a majority is promised, the surplus it carries over the whole array
guarantees the candidate standing at the end is it. No second pass to verify,
no table of counts — the tally is the only bookkeeping. `[5,8,8,2,8,6,8]`
shows the mechanism: the tally opens at 1 on 5, cancels down to zero at 2,
reopens on 8, and 8's four occurrences carry it through the last cancellation
to finish as the holder. An array of one element adopts that element on the
first step and returns it.

**Complexity:** `O(n)` time, `O(1)` space.
