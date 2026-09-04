# Slowest Clearing Rate

## Description

A sorting machine faces `n` batches of parcels; batch `i` holds `batches[i]`
parcels. The machine runs at some whole-number rate `r`, meaning that in one
hour it is aimed at a single batch and removes `r` parcels from it — or
whatever is left, if the batch holds fewer than `r`. Either way the hour is
spent on that batch alone; unused capacity does not spill into a second batch.

Given `h`, the number of hours available, return the smallest rate `r` that
clears every batch in time.

### Example 1

```text
Input: batches = [4,9,5], h = 6
Output: 4
Explanation: At rate 4 the batches cost 1, 3 and 2 hours, six in total.
Rate 3 needs 2 + 3 + 2 = 7 hours, one too many.
```

### Example 2

```text
Input: batches = [8,2,6,5], h = 4
Output: 8
Explanation: Four batches and four hours leaves exactly one hour per batch,
so the rate has to swallow the largest batch whole.
```

### Example 3

```text
Input: batches = [15,7,20,9], h = 10
Output: 7
Explanation: Rate 7 costs 3 + 1 + 3 + 2 = 9 hours. Rate 6 costs
3 + 2 + 4 + 2 = 11, so nothing below 7 fits.
```

### Constraints

- `1 <= batches.length <= 10^4`
- `1 <= batches[i] <= 10^9`
- `batches.length <= h <= 10^9`

## Hints

### Hint 1

Ask what a fixed rate costs before asking which rate is best. At rate `r`,
batch `b` occupies `ceil(b / r)` hours, and the total is one pass over the
input.

### Hint 2

That total never rises when `r` rises, so the rates that fit inside `h` form
an unbroken tail of the integers. You are looking for where that tail begins,
which is a search over answers rather than over the input.

### Hint 3

Bracket the search between 1 and the largest batch: at that rate every batch
takes one hour, and `h` is guaranteed to be at least the number of batches, so
the top of the bracket always works. Keep the hour total in 64 bits — it can
reach `10^4 * 10^9` — and form the ceiling as `(b + r - 1) / r` rather than
with floating point.
