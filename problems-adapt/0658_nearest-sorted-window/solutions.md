# Solutions — Nearest Sorted Window

## Binary Search on the Window Start

In sorted order, the `k` selected values form a contiguous block. Otherwise,
an omitted value between two selected positions could replace a farther edge
without worsening the result.

Search possible starts from `0` through `n - k`. At start `mid`, compare the
leftmost included value with `arr[mid + k]`, the first value excluded on the
right. If `x - arr[mid]` is greater than `arr[mid + k] - x`, shifting right
replaces a farther value with a closer one. Otherwise retain the left side and
continue searching for an earlier optimum.

Using a strict greater-than comparison handles ties: equal distances favor the
earlier window and therefore the smaller values. Return the length-`k` slice
at the converged start.

**Complexity:** `O(log(n - k + 1))` search time and `O(k)` output space.
