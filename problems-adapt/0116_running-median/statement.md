# Running Median

## Description

Numbers arrive one at a time. After each arrival, the **median** of
everything seen so far must be readable at once: the middle value of the
collection in sorted order, or — when the count is even — the mean of the
two values straddling the middle. So for `[4, 6, 9]` the median is `6`, and
for `[4, 9]` it is `(4 + 9) / 2 = 6.5`.

Implement the `RunningMedian` class:

- `RunningMedian()` — start with nothing collected.
- `void add(int num)` — note that `num` has arrived.
- `double median()` — return the median of all numbers collected so far.

`median()` is only ever called after at least one number has arrived.

### Example 1

```text
Input:
["RunningMedian", "add", "add", "median", "add", "median"]
[[], [4], [9], [], [6], []]
Output: [null, null, null, 6.5, null, 6.0]
Explanation:
RunningMedian running = new RunningMedian();
running.add(4);   // collected [4]
running.add(9);   // collected [4, 9]
running.median(); // (4 + 9) / 2 = 6.5
running.add(6);   // collected [4, 6, 9]
running.median(); // 6.0 — the middle of three values
```

### Example 2

```text
Input:
["RunningMedian", "add", "median", "add", "median", "add", "median", "add", "median"]
[[], [-3], [], [8], [], [-7], [], [0], []]
Output: [null, null, -3.0, null, 2.5, null, -3.0, null, -1.5]
Explanation:
After -3 the median is -3.0; after 8 it is (-3 + 8) / 2 = 2.5; after -7
the sorted order is [-7, -3, 8] and the median is -3.0 again; after 0 the
sorted order is [-7, -3, 0, 8] and the two middle values -3 and 0 average
to -1.5.
```

### Constraints

- `-10⁵ <= num <= 10⁵`
- At least one number is present whenever `median()` is called.
- No more than `5 * 10⁴` calls to `add` and `median` in total.

### Follow-up

Suppose every arriving number were guaranteed to lie in `[0, 100]`. Which
counting-based structure could answer `median()` then, with no comparisons
at all? And what if only 99% of the numbers were so bounded?

## Hints

### Hint 1

Nothing outside the middle of the sorted order is ever read, so cut the
collection in two at the middle and keep one structure per side. The values
worth making instantly reachable are the boundary pair — the biggest value
on the low side and the smallest value on the high side.

### Hint 2

Give the low side a max-heap and the high side a min-heap: each heap then
surfaces exactly the one value its side may have to contribute. Hold the
two sizes as equal as parity allows, never differing by more than one, so
an even count averages both tops and an odd count takes the top of whichever
side absorbed the extra number.

### Hint 3

To place a new number, push it onto one heap, move that heap's top across
to the other, and if the far side has grown by two, move its top back.
Sending every number on this round trip keeps both invariants — every
element of the low side at most every element of the high side, sizes within
one — true without a single comparison against either top.
