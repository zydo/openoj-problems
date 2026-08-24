# Solutions — Sum of All Odd Length Subarrays

## Per-index contribution counting

Instead of enumerating subarrays, sum by contribution: for each index `i`,
count how many odd-length subarrays include `arr[i]`, then add
`arr[i]` times that count to the answer. A subarray containing `i` is
fixed by choosing its start `l` in `[0, i]` and its end `r` in
`[i, n - 1]`, so there are `left = i + 1` choices for `l` and
`right = n - i` choices for `r`, giving `left * right` subarrays through
`i` in total. Its length `r - l + 1` is odd exactly when `r - l` is even,
i.e. when `l` and `r` have the same parity, and — because `l` always
ranges from `0` — exactly half of the `left * right` pairs land on
matching parity when the product is even, and one more than half when it
is odd (the empty-prefix start `l = 0` tips the balance). That count is
`ceil(left * right / 2)`, computed without floating point as
`(left * right + 1) / 2` using integer division.

The algorithm walks the array once, computing `left`, `right`, and the
odd-subarray count for each index, and accumulates `arr[i]` times that
count. No extra array or running sum is needed beyond the accumulator, so
the whole computation is a single pass with constant auxiliary state —
`arr = [1,2]` gives `left*right` of `1*2=2` and `2*1=2` for its two
indices, each contributing `ceil(2/2) = 1` odd subarray (itself), for a
total of `1 + 2 = 3`.

**Complexity:** `O(n)` time, `O(1)` space.
