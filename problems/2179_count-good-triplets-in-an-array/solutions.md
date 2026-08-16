# Solutions — Count Good Triplets in an Array

## Fenwick Tree over Positions with the Middle Element

A good triplet is increasing by position in both permutations at once. Relabel each value by its index in `nums2`, and the condition becomes: a triplet of values is good when their `nums1` order and their `nums2` order agree, i.e. they form a common increasing subsequence of the two permutations. Counting these is the classic 3-way inversion pattern: fix the middle element `y` and multiply the number of valid predecessors by the number of valid successors.

The solution iterates the values in `nums1` order, keeping a Fenwick (BIT) tree indexed by `nums2` position that records the values already processed. When value `y` arrives at `nums2` position `p` after `i` earlier values in the `nums1` sweep, `prefix_sum(p − 1)` gives `left` — how many of those earlier values also precede `y` in `nums2`. Of the `i` processed values, `i − left` of them lie after `y` in `nums2`; since every value after `y` in `nums2` totals `n − 1 − p`, the count of values that follow `y` in both orders is `right = (n − 1 − p) − (i − left)`. Each such value pairs `y` into `left · right` triplets, after which `y` itself is inserted into the tree.

Every triplet is counted exactly once, at its middle element. Each of the `n` iterations does two Fenwick operations of cost O(log n), and the tree plus the position table are the only auxiliary storage.

**Complexity:** `O(n log n)` time, `O(n)` space.
