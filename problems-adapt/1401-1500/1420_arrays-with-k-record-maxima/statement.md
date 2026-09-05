# Arrays With K Record Maxima

## Description

Scan an array of positive integers left to right, keeping a running maximum.
The first element opens the scan; after that, an element is a _record_ when it
is strictly larger than everything before it. The _record count_ of the array
is the number of records: `[2, 5, 5, 7]` has record count 3 (`2`, then `5`,
then `7`), while `[4, 4, 4]` has record count 1.

You are given three integers `n`, `m` and `k`. Count the arrays `arr` such
that:

- `arr` has exactly `n` elements,
- every element satisfies `1 <= arr[i] <= m`, and
- the record count of `arr` is exactly `k`.

Return the count modulo `10^9 + 7`, since it can be huge.

### Example 1

```text
Input: n = 2, m = 5, k = 1
Output: 15
Explanation: The second element must not pass the first. If the first element
is 5 any of 5 values may follow, if it is 4 any of 4 may follow, and so on:
5 + 4 + 3 + 2 + 1 = 15 arrays.
```

### Example 2

```text
Input: n = 3, m = 3, k = 2
Output: 12
Explanation: The array [3, 1, 2] is one of them: 3 opens the scan, 2 is a
record, 1 is not.
```

### Example 3

```text
Input: n = 5, m = 3, k = 5
Output: 0
Explanation: Five records would force the array to be strictly increasing
through five distinct values, but only 1, 2, 3 exist.
```

### Constraints

- `1 <= n <= 50`
- `1 <= m <= 100`
- `0 <= k <= n`

## Hints

### Hint 1

While appending elements one by one, what actually matters about the prefix is
just its length, its record count, and its current maximum.

### Hint 2

Appending a value no greater than the current maximum leaves the state alone;
appending a larger one must become the new maximum. This gives a DP over
(length, record count, maximum) — and the "new maximum" term sums over a
range of maxima, so keep prefix sums handy.

### Hint 3

Three requests are impossible and can be rejected immediately: a nonempty
array has at least one record, records are distinct increasing values so there
cannot be more than `n` of them, and there cannot be more than `m`.
