# Solutions — Count Subsequence Pairs with Matching GCDs

## A Sweep over Pairs of GCD States

Feeding the array to the counter one element at a time, each element has
exactly three futures: land in the first subsequence, land in the second,
or be left out. The only thing about a half-built subsequence that the
final comparison will ever ask for is its gcd — so that is the whole
state. Carry `dp[g1][g2]`, the number of ways to split everything seen so
far into a left part of gcd `g1` and a right part of gcd `g2`, reserving
the sentinel `0` for an empty side (a genuine gcd is never below 1).
Processing an element `x` clones the table and adds each state's count
into `dp[gcd(g1, x)][g2]` and `dp[g1][gcd(g2, x)]`; writing into the
clone is what stops an element from joining both sides at once.

The universe of states is small by construction: gcds only shrink as
elements accumulate and start at most `max(nums) <= 200`, so the table
never exceeds `201 x 201` cells regardless of the array's length. Each
element therefore costs one sweep of the table, and the answer waits at
the end in the diagonal — the sum of `dp[g][g]` over real gcds `g >= 1`,
since `g = 0` on either side means that side never received an element.

Take `nums = [2,3,4,6]`: the only qualifying split puts the lone `2` on
one side and `4, 6` on the other (gcds 2 and 2), available in both
orders, so `dp[2][2]` ends at 2. Arrays whose every subsequence has a
different gcd, like `[6,10,15]`, leave the diagonal empty and answer 0.

Two boundary behaviors fall out of the same machinery: a one-element
array leaves one side empty in every assignment, so it returns 0; and
repeated values multiply the count quickly (all-equal arrays of length
`n` give `3ⁿ - 2·2ⁿ + 1`), which the modulo keeps in range.

**Complexity:** `O(n · V²)` time and `O(V²)` space, for `V` the maximum
element (at most 200).
