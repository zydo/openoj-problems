# Solutions — Arithmetic Subsequence Count

## Dynamic programming over endings, one tally per gap

Progressions cannot be enumerated one by one — a thousand elements hide
exponentially many subsequences — but they can be *counted* by where they
end. Keep, for each index `i`, a dictionary `dp[i]` that maps a gap `d` to
the number of progressions of length two or more ending at `nums[i]` with
that gap. Pairs are the atoms: any two elements fix a gap, and everything
longer arises by repeating it.

The transition looks at every pair `j < i`. With `d = nums[i] - nums[j]`,
each length-two-or-more progression ending at `j` with gap `d` grows into one
ending at `i`, and every such growth finishes a progression of length three
or more — so `dp[j][d]` goes straight into the global total. The store at
`i` then gains those extensions plus one, for the bare pair `(nums[j],
nums[i])` just created. A progression is therefore charged to the answer
exactly once, at the step its final element is attached.

Hashing the gap per index is what keeps the state small. Values span the full
32-bit range and gaps may be huge or negative, so an array indexed by gap is
out of the question; the number of distinct `(i, d)` states, though, never
exceeds the number of index pairs. Repeated values need no special handling:
equal neighbors carry gap 0, and a run like `[4, 4, 4, 4]` accumulates
correctly because each new 4 extends every earlier constant progression —
4 + 1 = 5 progressions in total, matching the example.

No "length" dimension appears anywhere: pairs are bookkept apart from the
answer and reach it only once extended.

**Complexity:** `O(n²)` time, `O(n²)` space in the worst case for the
per-index gap dictionaries.
