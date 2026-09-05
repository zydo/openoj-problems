# Solutions — Largest Smallest Split Sum

## Binary search on the score with an earliest-cut check

Searching over cut positions directly means comparing arrangements of `k`
cuts, of which there are exponentially many. The profitable reversal is to
search over the _score_ `t` and ask a yes/no question instead: can `nums`
be cut into `k + 1` pieces whose sums are all at least `t`? That predicate
is monotone — lower it and every piece that cleared the old bar still clears
the new one — so the wanted score is the largest passing `t`, and binary
search finds it. The range needs no more than `sum(nums) / (k + 1)` on top,
since `k + 1` pieces cannot all exceed the average, and needs nothing below
1 since every element is at least 1.

The check itself is one greedy sweep. Accumulate elements left to right and
cut the instant the running sum reaches `t`, resetting the accumulator.
Cutting at the first legal moment is never a mistake: postponing a cut only
pours extra elements into a piece that was already satisfied, and those
elements are exactly what later pieces might have needed. The sweep thus
produces the maximum number of pieces of sum at least `t`; comparing that
count with `k + 1` settles feasibility. Surplus pieces, when the count
overshoots, are harmless — merging neighboring surplus pieces only raises
their sums.

Each candidate `t` costs one pass over the array, and the candidates halve
a range bounded by the total sum `S`. Example 1 illustrates the cap: three
pieces totalling 22 can never all reach 7, and the earliest-cut sweep fails
`t = 7` on [4,2,7,3,5,1] while confirming `t = 6`. Example 3 shows the
other side — the weak run [1,2,1] pins the score at 4 no matter how the
strong elements are arranged.

**Complexity:** `O(n log S)` time, `O(1)` space.
