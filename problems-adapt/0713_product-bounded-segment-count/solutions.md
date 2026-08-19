# Solutions — Product-Bounded Segment Count

## Monotone Sliding Window

All values are at least one, so no positive product can fall below a limit of
one or less. For larger limits, maintain a window and its running product.
Multiply each new rightmost value into the product, then repeatedly divide
away the leftmost value while the product is too large.

After shrinking, the active window is the longest valid segment ending at
the current right endpoint. Every suffix of this window is valid as well,
giving exactly `right - left + 1` new segments. Assigning each segment to its
right endpoint counts it once.

![Valid windows for values [4, 2, 5, 3] under a limit of 50.](figures/solution-sliding-window.svg)

Both pointers move only forward. Positivity is the key invariant: removing a
leftmost factor never increases the product, while adding a new factor never
decreases it.

**Complexity:** `O(n)` time and `O(1)` extra space.
