# Solutions — Longest Divisibility Chain

## Sort plus DP with parent pointers

The rule looks quadratic — it constrains every pair — but it collapses once the
chosen values are read in increasing order. Because "is a multiple of" composes
(`a | b` and `b | c` force `a | c`), a set laid out ascending is legal as soon
as each member divides the one directly after it; the remaining pairs then come
for free. So sort `nums` ascending and the question becomes the familiar one of
finding a longest run, with "divides" playing the part that "is smaller than"
plays in a longest-increasing-subsequence scan.

Let `dp[i]` count the elements of the longest legal run ending at the sorted
value `nums[i]`, starting from 1 for every position. Scanning `i` upward and, for
each `i`, every earlier `j`, a `j` whose value divides `nums[i]` proposes
`dp[j] + 1`; the largest proposal wins and `parent[i]` remembers which `j`
supplied it. Sorting is what makes this exhaustive: any legal set, sorted, is a
run the scan considers, and any run the scan builds is legal. Positions that
nothing divides simply stay at 1 with no parent.

Reconstruction is why the parent links exist. Take the position with the largest
`dp` value, walk `parent` until it runs out, collect the values along the way,
and reverse them to get ascending order — for `[12,3,5,6,24]` the walk starts at
24 and yields `[3,6,12,24]`. Inputs of one element return that element; when no
value divides any other, as in `[15,4,22]`, every count stays 1 and the first
position wins, which is legal since ties may be broken freely. Distinctness of
the input means a divisor test never has to worry about a value pairing with a
copy of itself.

**Complexity:** `O(n²)` time, `O(n)` space.
