# Solutions — Values Common to Every Row

## Count per value, keep values seen in every row

The statement guarantees that every `nums[i]` holds distinct positive
integers, so a value appears in _exactly_ `nums.length` rows if and only if
it is present in every row. Counting how many rows contain each value
therefore reduces the answer to a single predicate: keep the values
whose count equals the total number of rows, then sort them ascending for
the required output order.

A single pass over every row's elements builds the counts in a hash map
(`Counter.update` in Python, a `Map`/`unordered_map`/`HashMap` elsewhere).
The values are bounded by `1 <= nums[i][j] <= 1000`, so the map never grows
past 1000 entries regardless of how long the flattened input is, keeping both
the bookkeeping and the final sort tiny. When no value reaches the required
count, the result is the empty list, as in the third example with the two
disjoint rows.

The output is accumulated by scanning the map for entries whose count equals
`nums.length` and then sorting — the sort is mandatory because the map order
is arbitrary and the statement demands ascending order. The bound on the
value range also means the largest possible answer has at most 1000 elements,
so even the output stays comfortably small.

**Complexity:** `O(n + m log m)` time, `O(m)` space, where `n` is the total
number of elements across all rows and `m <= 1000` is the number of
distinct values.
