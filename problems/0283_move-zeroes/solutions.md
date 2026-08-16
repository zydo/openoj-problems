# Solutions — Move Zeroes

## Two-Pointer In-Place Swap

The solution keeps two pointers moving left to right: `fast` scans every element, while `slow` marks where the next non-zero element belongs. Everything before `slow` is the stabilized prefix of non-zero values in their original order; everything from `slow` to `fast` contains only zeros (or values already swapped forward).

Whenever `fast` lands on a non-zero value, the code swaps it with the element at `slow` and advances `slow`. When the value is zero nothing happens, so the zero is left behind to be part of the trailing block. Because non-zero elements are written in the order they are encountered, their relative order is preserved, and zeros naturally accumulate at the end.

The swap-based form answers the follow-up about minimizing operations: when `slow == fast` (the common case of a prefix with no zeros yet) the swap exchanges the element with itself, and the first zero only starts moving once a non-zero appears after it. Each zero is swapped forward at most once per non-zero that follows it, rather than being repeatedly bubbled.

Edge cases are handled for free: an array of all zeros never performs a swap, a single-element array returns itself, and an array with no zeros just "swaps" every element with itself in place. The array is modified in place with no copy, as required.

**Complexity:** `O(n)` time, `O(1)` space.
