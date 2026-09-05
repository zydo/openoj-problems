# Solutions — The Most Runs of One Length

Runs are determined entirely by where the string changes letter, so the whole
problem is a single pass: cut `s` into its maximal equal-letter runs, count
how many runs share each length, and report the largest count.

## Group run lengths in a hash map

Scan `s` with two indexes: `i` starts a run and `j` advances while the same
letter continues, so `j - i` is the run's length. A hash map from length to
count is incremented for every run, and the answer is the maximum value in the
map. On `"mississippi"` the runs have lengths 1, 1, 2, 1, 2, 1, 3, 1, giving
five runs of length 1; on `"aabbbcc"` the two length-2 runs win with a
count of 2.

The scan is linear and the map holds at most one entry per distinct run length
— at most `sqrt(2n)` distinct lengths in the worst case, but never more than
the number of runs, so the map is small. Any run length appears as a count of
at least one, so the maximum is well defined for every non-empty string.

**Complexity:** `O(n)` time, `O(n)` space.
