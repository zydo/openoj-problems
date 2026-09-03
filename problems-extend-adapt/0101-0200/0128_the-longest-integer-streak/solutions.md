# Solutions — The Longest Integer Streak

## Hash set, walking from each sequence start

Pour every value into a hash set and "is x present?" becomes a constant-time question, so a consecutive run can be recognized from any of its members. The obvious move — walk forward from every element — looks quadratic, because a run of length L gets re-traversed by each of its L members. The escape is that every maximal run has exactly one beginning, and the set alone can identify it: `value` starts its run precisely when `value - 1` is absent.

The code iterates the set itself, which collapses duplicates before any walking happens. For each value with no predecessor it counts upward — `value`, `value + 1`, `value + 2`, … — while the set keeps answering, and keeps the largest count. Because the predecessor check skips every non-initial member, the inner climb runs at full length exactly once per maximal run: every value is probed once as a candidate and stepped on by at most one walk. Each element is touched a constant number of times, which is what the statement's `O(n)` demand actually requires — the other natural plan, sorting first, pays `O(n log n)` before it even starts scanning.

No port needs a wider integer: values sit inside ±10⁹, so both the predecessor probe `value - 1` and the final one-past-the-end probe stay comfortably inside 32-bit range, and JavaScript's doubles hold every integer here exactly. The set holds at most `n` distinct values, so memory stays linear in the input.

**Complexity:** `O(n)` time, `O(n)` space.
