# Solutions — Smallest Covering Window

Two searches for the same shortest piece, differing in what they choose to
know. The sliding window decides on the fly: it extends the right end until
the debts to `t` clear, then shrinks from the left while coverage survives,
and both ends travel the string once. The binary search fixes the length
first — is there a covering window of size `L` at all? — and because that
answer flips only from no to yes as `L` grows, halving the range of lengths
homes in on the shortest one, paying a full sweep of `s` per probe for never
having to decide whether a window should grow or shrink.

## Sliding Window

Two numbers carry the whole window state. `need[c]` says how many further
copies of character `c` the window owes (seeded from `t`'s counts), and
`missing` totals those debts across the alphabet — so coverage is the single
test `missing == 0`. When the right end admits a character that still owes
copies (`need[ch] > 0`), `missing` drops by one; the debt for `ch` then drops
unconditionally, which is what lets surplus copies and letters foreign to `t`
sink negative without disturbing `missing` again.

The moment the debts clear, the interval `[left, right]` is a cover, and the
left end is advanced while its leading character sits below quota — each
departure refunds a copy to the books. The advance halts on the first
character at exactly its quota, giving the tightest cover that ends here;
if it is the shortest seen so far it is kept. To continue the sweep the code
then pushes that boundary character out on purpose (`need[s[left]] += 1`,
`missing += 1`, `left += 1`), re-opening exactly one debt. Both ends travel
strictly left to right, so every extension and every refund across the run
adds up to linear work beyond the initial tally of `t`.

![Three valid windows in "BEFFCDEAAFBAD": BEFFCD (length 6), DEAAFB (length 6) and the best FBAD (length 4).](figures/solution-window-shrink.svg)

Impossible inputs exit early: a `t` longer than `s` (or empty) yields `""`
before any scanning starts, and if no interval ever clears its debts the
best length stays infinite and `""` comes back at the end. The books are
keyed by character, so they never exceed the 52-letter alphabet regardless
of how long the strings are.

**Complexity:** `O(m + n)` time, `O(1)` space.

## Binary Search on the Length

Ask a coarser question first: does any window of length `L` cover `t` at all?
The answer is monotone in `L`, because a covering window of length `L` sits
inside a covering window of length `L + 1` — extend it by one character on
either side, and one of the two extensions always fits — and extra characters
never break coverage. So the truth is false below some length `L*` and true
from `L*` upward: exactly the shape binary search needs. Search the length,
and the position comes out in the wash.

Each probe slides one window of the candidate length across `s`, left to
right, keeping a count per demanded letter plus `below`, the number of
letters still short of quota — coverage is the single test `below == 0`. A
letter's arrival takes its count from quota-minus-one to quota exactly once,
and that step alone lowers `below`; a departure from quota to quota-minus-one
raises it back; surplus copies and letters foreign to `t` never touch the
tally. The probe reports the first covering start it meets, and at the
minimal surviving length that is the same leftmost shortest cover the
shrinking sweep settles on.

Follow `s = "BEFFCDEAAFBAD"`, `t = "BFD"`: lengths run from 3 to 13. The probe
at 8 finds the prefix `BEFFCDEA` already covers, so the answer is at most 8;
the probe at 5 finds `AFBAD`; the probe at 3 finds nothing — no three
consecutive letters hold B, F and D together — and the final probe at 4 stops
on `FBAD` at index 9.

The books are alphabet-sized, so space stays constant. Time is one initial
tally of `t` plus a sweep of `s` for each of the ~log n probes — a
logarithmic factor over the sliding window, the price of settling the length
before ever looking at positions.

**Complexity:** `O(m + n log n)` time, `O(1)` space.
