# Solutions — K Most Frequent Values

Both variants start with the same counting sweep — a hash map from value to occurrences, filled in one pass — and then pick the `k` leaders from the unique `(value, count)` items by two different mechanisms. Frequency ties are settled toward the smaller value in both, which pins the selected set and lines up with the judge's expectations.

## Buckets indexed by frequency

A count lives between `1` and `n`, so ranking by frequency needs no comparison sort at all: file every distinct value into `buckets[count]` — an array of lists whose index is the frequency — and then read the index from `n` down to `1`, pulling values out of the most frequent buckets first until `k` are collected. The walk visits indices, and each bucket answers "which values occur exactly this often" directly.

For `nums = [2,2,7,7,4,4,4,9]` with `k = 3`, the map says `4: 3`, `2: 2`, `7: 2`, `9: 1`; bucket 3 holds `[4]` and bucket 2 holds `[2, 7]`, so the downward walk emits `4`, then `2` and `7`, and stops at three values.

The one place ordering by comparison survives is inside a bucket: values sharing a frequency are sorted ascending before collection, so a tie that straddles the `k` boundary resolves to the smaller value instead of to hash-map iteration order. That detail is the difference between this walk and a naive one that would choose arbitrarily among equal counts; the guarantee of an unambiguous top-k set keeps it from ever surfacing in judged data, and the in-bucket sorts sum to well under `O(u log u)` over `u` unique values because few values share one frequency.

**Complexity:** `O(n)` for the counting pass, the bucket fill, and the index walk, plus the small in-bucket sorts. `O(n)` space for the map and the buckets.

## Size-k min-heap on counts

Rather than ranking everything, keep a min-heap of just `k` entries keyed so the root is the weakest keeper — lowest count, and among equal counts the largest value. Stream each unique `(value, count)` through: entries are pushed while the heap is below size `k`, and afterwards a newcomer replaces the root only when it outranks it — a higher count, or an equal count with a smaller value. Since eviction order is the final ranking reversed, the `k` survivors are the leaders by (higher count, then smaller value), exactly the set the bucket walk produces, and one final ordering of the survivors yields the output list.

Every one of the `u` unique values costs at most one heap replacement at `O(log k)` — the selection never pays for values it would never keep, unlike the bucket variant's in-bucket sorts. The price is the logarithmic factor and holding `k` entries rather than spreading values across buckets.

**Complexity:** `O(n + u log k)` time — `O(n)` to count plus `O(u)` heap operations at `O(log k)` each, `u` being the number of unique values. `O(u + k)` space for the map and the heap.
