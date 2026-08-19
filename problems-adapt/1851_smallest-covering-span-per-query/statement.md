# Smallest Covering Span per Query

## Description

An interval `[left, right]` covers every integer from `left` through
`right`, and its **length** is the number of integers it covers,
`right - left + 1`.

You are given a 2D integer array `intervals`, where `intervals[i] =
[left_i, right_i]`, and an integer array `queries`. For each `queries[j]`,
report the length of the shortest interval that covers it — the minimum
`right_i - left_i + 1` over all intervals with `left_i <= queries[j] <=
right_i`. If no interval covers `queries[j]`, its answer is `-1`.

Return the answers in the order the queries are given.

### Example 1

```text
Input: intervals = [[3,3],[2,8],[4,7],[10,12]], queries = [3,4,11,9]
Output: [1,4,3,-1]
Explanation:
- Query 3: the single-point interval [3,3] covers it with length 1,
  beating [2,8]'s 7.
- Query 4: [4,7] has length 4; [2,8] has 7; [3,3] does not reach 4.
- Query 11: only [10,12] covers it, with length 3.
- Query 9: [4,7] ends too soon and [10,12] starts too late, so the
  answer is -1.
```

### Example 2

```text
Input: intervals = [[6,10],[1,15],[7,8],[8,20]], queries = [7,9,20,5]
Output: [2,5,13,15]
Explanation:
- Query 7: [7,8] wins with length 2 against [6,10]'s 5 and [1,15]'s 15.
- Query 9: [6,10] wins with length 5; [7,8] no longer reaches.
- Query 20: [8,20] is the only interval reaching 20, length 13.
- Query 5: only [1,15] reaches back to 5, length 15.
```

### Constraints

- `1 <= intervals.length <= 10⁵`
- `1 <= queries.length <= 10⁵`
- `intervals[i].length == 2`
- `1 <= left_i <= right_i <= 10⁷`
- `1 <= queries[j] <= 10⁷`

## Hints

### Hint 1

Answered in arbitrary order, every query has to weigh the whole interval
list against itself. Is there an order to visit the queries in which
intervals enter and leave the consideration set only once?

### Hint 2

Sweep the queries from smallest to largest. Push every interval once its
left end is reached, into a min-heap keyed by length; before answering,
pop the heap while the top's right end falls short of the query — it
cannot cover this query or any later one.
