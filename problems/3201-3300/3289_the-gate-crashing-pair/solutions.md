# Solutions — The Gate-Crashing Pair

## Count occurrences, collect the doubles

The values in `nums` all live in the fixed range 0 to n - 1, so an array of
n counters indexed by value records how many times each invitee was written
down in a single left-to-right pass. Every legitimate guest ends with a
count of one; the two gate-crashers are exactly the two entries whose count
reaches two.

After the pass, walking the counter array from index 0 upward collects the
values with count two in ascending order, matching the required output
order without any post-sorting. Each element is examined once and each
value is tested once, so the work is linear regardless of where the pair
hides.

**Complexity:** `O(n)` time, `O(n)` space.
