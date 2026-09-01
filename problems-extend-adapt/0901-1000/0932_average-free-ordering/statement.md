# Average-Free Ordering

## Description

Arrange the integers `1` through `n` in a row. Call the arrangement
average-free when no element ever sits at the average of two others that
straddle it: for any two positions `i < j`, there must be no position `k`
with `i < k < j` such that `2 * order[k] == order[i] + order[j]`. In other
words, whenever one element is the exact midpoint of two others by value,
that midpoint is never allowed to stand between them by position.

Given `n`, return such an ordering. Many arrangements can qualify, but
this judge checks one exact answer, so the required output is pinned to a
single deterministic construction: begin with the one-element list `[1]`,
then over and over replace the current list with the values `2 * x - 1`
for every element `x` (in order) followed by the values `2 * x` for every
element `x` (in order), stopping as soon as the list holds at least `n`
values; the answer is that list with every value greater than `n`
removed, keeping the surviving values in their order.

### Example 1

```text
Input: n = 3
Output: [1,3,2]
Explanation: [1] grows to [1,2], then to [1,3,2,4] — already at least
three values — and dropping the 4 leaves [1,3,2]. No value there is both
the exact average of two others and positioned between them.
```

### Example 2

```text
Input: n = 6
Output: [1,5,3,2,6,4]
Explanation: [1,3,2,4] grows to [1,5,3,7,2,6,4,8]; keeping only the
values up to 6 leaves [1,5,3,2,6,4]. Arrangements such as [3,1,2,6,4,5]
also avoid every forbidden midpoint, but the pinned construction above is
the required answer.
```

### Example 3

```text
Input: n = 7
Output: [1,5,3,7,2,6,4]
Explanation: The same doubled list [1,5,3,7,2,6,4,8] loses only its 8,
leaving [1,5,3,7,2,6,4] untouched otherwise.
```

### Constraints

- `1 <= n <= 1000`
