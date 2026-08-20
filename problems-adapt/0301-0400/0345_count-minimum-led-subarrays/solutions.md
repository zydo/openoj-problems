# Solutions — Count Minimum-Led Subarrays

## Monotonic Stack (First Strictly Smaller to the Right)

Fix a starting index i. Extending rightwards keeps the run minimum-led for as
long as no entry drops below nums[i], and the moment one does the run is spoiled
for good. So the starts partition the answer: index i contributes exactly the
distance from i to the first position on its right carrying a strictly smaller
value, or to the end of the array when no such position exists.

That distance is the classic "first smaller on the right" quantity, and one
left-to-right sweep with a stack produces all n of them. The stack stores indices
still waiting for their answer, with values that never decrease from bottom to
top. When the entry at the cursor is strictly below the value at the top, that
top index has found what it was waiting for: pop it and bank the difference
between the cursor and the popped index. Entries that merely tie are left alone,
which is precisely the "no bigger than" reading — a tie does not spoil a run, and
both tied indices go on waiting for the same strictly smaller value to settle
them. Appending a virtual entry below every legal value after the last index
drains whatever is still waiting, measuring it against the array's end.

Take nums = [5,1,3,2,4]. Index 0 goes on the stack; index 1 holds 1, which is
below 5, so index 0 is settled with a distance of 1. Indices 1 and 2 stack up
until index 3 holds 2 and settles index 2 with a distance of 1. Index 4 pushes,
and the closing sentinel drains the rest: index 4 measures 1, index 3 measures 2,
index 1 measures 4. The distances 1, 4, 1, 2, 1 add up to 9.

Both extremes fall out of the same rule. A falling array settles every index at
the very next step and totals n; an array of equal entries never settles anything
until the sentinel, and the distances n, n − 1, …, 1 sum to n(n + 1)/2 — which is
why the return type has to be 64-bit.

Every index is pushed once and popped once.

**Complexity:** `O(n)` time, `O(n)` space.
