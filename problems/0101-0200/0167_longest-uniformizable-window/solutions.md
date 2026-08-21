# Solutions — Longest Uniformizable Window

## Sliding Window with Maximum Frequency

For any window, the cheapest way to make all positions equal is to keep a
letter already occurring most often. The required changes are therefore the
window length minus that maximum frequency. This gives a direct test against
`k`.

Extend the right edge while maintaining per-letter counts. If the affordability
test fails, remove the leftmost letter and advance the left edge. A running
`max_freq` records the largest count seen while expanding and does not need to
decrease during shrinking. A stale value can preserve a window only at a
length already shown attainable; a genuinely larger window still requires a
current letter count large enough to establish its new size.

Both boundaries move only forward. With `k = 0`, the method finds the longest
existing run; when the budget covers the whole string, no shrink is needed.

**Complexity:** `O(n)` time and `O(1)` auxiliary space for the fixed alphabet.
