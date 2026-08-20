# Solutions — Majority Element

## Boyer-Moore Voting

The premise gives more than it seems: the answer holds over half the
positions, so *all other values together* hold fewer. Picture striking out
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
