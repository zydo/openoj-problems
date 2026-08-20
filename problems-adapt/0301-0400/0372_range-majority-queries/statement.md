# Range Majority Queries

## Description

An array `arr` is fixed once, and many questions about it arrive afterwards.
Each question names a stretch of the array and a quota, and asks whether some
single value fills that quota inside the stretch.

Implement the `RangeMajority` class:

- `RangeMajority(int[] arr)` — prepare to answer questions about the
  immutable array `arr`.
- `int query(int left, int right, int threshold)` — return a value that
  occurs at least `threshold` times among the elements `arr[left],
  arr[left+1], ..., arr[right]`, or `-1` if no value does.

Every query satisfies `2 * threshold > right - left + 1`, so a qualifying
value would hold strictly more than half the stretch — which also means at
most one value can qualify, and the answer, when it exists, is unique.

### Example 1

```text
Input:
["RangeMajority", "query", "query", "query"]
[[[3, 3, 8, 3, 8, 3, 3]], [0, 6, 4], [0, 3, 3], [1, 4, 3]]
Output: [null, 3, 3, -1]
Explanation:
RangeMajority rm = new RangeMajority([3, 3, 8, 3, 8, 3, 3]);
rm.query(0, 6, 4); // the whole array: 3 occurs 5 times -> 3
rm.query(0, 3, 3); // [3, 3, 8, 3]: 3 occurs 3 times -> 3
rm.query(1, 4, 3); // [3, 8, 3, 8]: neither value occurs 3 times -> -1
```

### Example 2

```text
Input:
["RangeMajority", "query", "query", "query"]
[[[5, 9, 9, 5, 9]], [0, 4, 3], [2, 3, 2], [3, 3, 1]]
Output: [null, 9, -1, 5]
Explanation:
rm.query(0, 4, 3); // 9 occurs 3 times in the whole array -> 9
rm.query(2, 3, 2); // [9, 5]: no value repeats -> -1
rm.query(3, 3, 1); // a single-cell stretch answers with its own value -> 5
```

### Constraints

- `1 <= arr.length <= 2 * 10⁴`
- `1 <= arr[i] <= 2 * 10⁴`
- `0 <= left <= right < arr.length`
- `threshold <= right - left + 1`
- `2 * threshold > right - left + 1`
- At most `10⁴` calls to `query`.

## Hints

### Hint 1

More than half the stretch is occupied by any qualifying value, so there is
never a second candidate to worry about. The whole task splits in two:
produce the one possible candidate, then check it against the quota.

### Hint 2

Pairing off unequal neighbours cancels one occurrence of each, and a value
holding more than half a range survives any amount of such cancelling. That
is Boyer-Moore voting — and it merges: a range summarised as
`(candidate, surplus)` combines with another in constant time, equal
candidates pooling votes and unequal ones cancelling. A segment tree of
these pairs proposes the candidate of any stretch from `O(log n)` nodes.

### Hint 3

The survivor of the vote is only a *proposal* — with no strict majority in
the stretch it is an arbitrary value. Verify it before answering: record
each value's positions in order, and count its occurrences in
`[left, right]` as the difference of two binary searches.
