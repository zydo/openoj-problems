# Solutions — Rolling Window Medians

## Sorted Window with Binary Insertion

Rather than sorting each window from nothing, one sorted list tracks the
window as it travels. Each arriving element is placed by `insort`, whose
binary search finds the slot in `O(log k)`; from the moment the window is
full, every step also retires the departing element `nums[i - k]`, which
`bisect_left` locates and a pop by index deletes. Retiring the leftmost
copy of the departing value is what keeps the multiset faithful under
repetition — equal values are interchangeable, so any one of them may go.

Once the window is sorted, reading off a median costs nothing: odd `k` takes
the cell at `k / 2`, even `k` averages the cells at `k / 2 - 1` and `k / 2`
as a float. Output starts at index `k - 1` and only after the retirement has
run, so the measurement always sees exactly `k` residents — the brief
`k + 1` overlap while an element arrives before another departs is never
sampled.

Insertion and retirement share the leftmost-match discipline, so the window
cannot drift from the true multiset. With `k` as large as the whole array
and `n` up to `1e5`, each step's cost is set not by the `O(log k)` search
but by the shifting of list elements, which is linear in `k`; in practice
this is quick and stays far simpler than a two-heap machinery, totalling
`O(n·k)` work with only the window resident in memory. On the first example
the window `[1, 2, 4, 8]` yields `(2 + 4) / 2 = 3.0`; after `7` enters and
`4` retires it becomes `[1, 2, 7, 8]` with median `(2 + 7) / 2 = 4.5`, and
finally `[2, 3, 7, 8]` gives `5.0`.

**Complexity:** `O(n·k)` time, `O(k)` space.
