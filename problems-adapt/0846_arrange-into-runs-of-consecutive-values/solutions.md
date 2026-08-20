# Solutions — Arrange Into Runs of Consecutive Values

## Greedy on sorted counts

First reject any input whose length is not divisible by `runLength`. Count the
occurrences of every value and sort the distinct keys.

Consider the smallest value whose count is still positive. It cannot appear
inside a run that started earlier, because no smaller unused value remains.
Therefore all `need` copies of this minimum must start `need` separate runs.
Each of the next `runLength - 1` consecutive values must supply at least the
same number of copies.

Subtract `need` from the count at every position in that interval. If any
count is insufficient, no arrangement exists. Otherwise the smallest value is
fully consumed, and the same forced choice applies inductively to the next
remaining minimum. Values exhausted by earlier runs are simply skipped in the
sorted scan.

Bulk subtraction handles all runs sharing a start value together, avoiding a
separate pass for every individual group.

**Complexity:** `O(u log u + u · runLength)` time and `O(u)` space, where `u`
is the number of distinct values.
