# Solutions — Single Number

## XOR Fold

XOR has exactly the properties this problem needs: `x ^ x = 0` makes an element annihilate itself, `x ^ 0 = x` lets survivors pass through unchanged, and the operation is commutative and associative, so the grouping order is irrelevant. Folding every element into a running result therefore pairs up the duplicates — each pair cancels to zero — and whatever is left in the accumulator at the end is the one unpaired value.

The code is literally that fold: start the result at 0 and XOR each element in turn. No counts, no seen-set, no sorting — which is precisely what keeps the extra space constant while the single scan keeps the time linear.

Negative numbers need no special handling, since XOR on Python integers is bitwise two's-complement semantics and the full fold reconstructs the missing value regardless of sign.

**Complexity:** `O(n)` time, `O(1)` space.
