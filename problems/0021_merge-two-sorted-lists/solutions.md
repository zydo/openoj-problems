# Solutions — Merge Two Sorted Lists

## Iterative two-pointer merge with a dummy head

Because both input lists are already sorted, the merged list is fixed: its next node is always the smaller of the two current heads. A dummy head node lets the loop attach that node without treating the first attachment as a special case — `tail` starts at the dummy and the real head is simply `dummy.next` at the end.

The walk: while both lists are non-empty, link the smaller head to `tail`, advance that list, and step `tail` forward. Ties take `list1` first, which keeps the merge stable with respect to the first list. When one list runs out, its nodes are exhausted in sorted order, so whatever is left of the other list is already the sorted continuation — splice it onto `tail` in one assignment instead of walking it. Empty inputs need no special handling: the loop is skipped and the splice attaches whichever list (possibly neither) survives.

Every iteration permanently consumes one node from one list, so the total step count is the combined length; and since the merge relinks existing nodes (the dummy is the only allocation), extra memory is constant.

**Complexity:** `O(n + m)` time, `O(1)` space.
