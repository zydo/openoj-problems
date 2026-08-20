# Solutions — Kth Number in Dictionary Order

## Prefix Walk with Branch Counting

Dictionary order on the spellings of `1..n` is not an arbitrary permutation: it
is the order in which a prefix-first walk touches numbers, where the things
reachable from `p` by appending one digit are `p0` through `p9`. The walk
starts at 1, and each number is visited before anything that extends it and
before its right-hand neighbour at the same length. Since `n` reaches a
billion, the walk has to jump over branches instead of entering them, and for
that it only needs each branch's size.

Sizing a branch is a loop over lengths. Everything that extends the prefix
`p` and is at most `n` falls in the half-open numeric window `[p, p + 1)` at
the current length, `[p * 10, (p + 1) * 10)` at the next, and so on; each
window contributes its width, clipped so it never reaches beyond `n`. Ten
iterations at most cover every length a number below a billion can have, and
nothing is enumerated.

With that counter in hand the walk carries a running budget: how many visits
are still owed before the answer. Start at the prefix 1 with a budget of
`k - 1`, and repeat while the budget is positive. Measure the branch hanging
off the current prefix. If it fits inside the budget, the answer is not in
there — spend the whole branch at once and move to the next prefix by adding
one. If it does not fit, the answer is inside, so append a zero (multiply by
ten) and spend a single visit for the prefix just left behind. When the budget
hits zero the current prefix is the number asked for.

![With n = 12, the numbers 10, 11 and 12 hang off the prefix 1, while 2 has nothing below it because 20 is already past n. The branch of 1 holds four numbers, more than the three visits still owed at k = 4, so the walk steps into it and then moves right twice, landing on 12.](figures/solution-prefix-walk.svg)

Every iteration either moves right or grows the prefix by a digit. Growth can
happen at most once per digit of `n`, and between two growths there are at most
nine right-moves, so the number of iterations is proportional to the digit
count. Each iteration pays one branch count, itself a loop over digit counts.

**Complexity:** `O(log^2 n)` time, `O(1)` space.
