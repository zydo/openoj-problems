# Best XOR Under a Ceiling

## Description

You are given a list `nums` of non-negative integers. You are also given a list
of `queries`, where each query is a pair `[x, limit]`.

To answer one query, look at the elements of `nums` whose value is at most
`limit`, pair each of them with `x` under bitwise XOR, and take the largest
result. If every element of `nums` exceeds `limit`, there is nothing to pair
with, and the query answers `-1`.

Return one answer per query, in the order the queries are given.

### Example 1

```text
Input: nums = [6,11,9,2], queries = [[7,10],[7,5],[13,1]]
Output: [14,5,-1]
Explanation:
1) The ceiling 10 admits 6, 9 and 2. 9 XOR 7 = 14 beats 6 XOR 7 = 1 and 2 XOR 7 = 5.
2) Only 2 slips under the ceiling 5, and 2 XOR 7 = 5.
3) Every element exceeds 1, so the answer is -1.
```

### Example 2

```text
Input: nums = [7,7,13,2], queries = [[10,13],[0,2],[7,7]]
Output: [13,2,5]
Explanation:
1) Under the ceiling 13 every element is available, and 7 XOR 10 = 13 tops them all.
2) Only 2 fits under the ceiling 2, and 2 XOR 0 = 2.
3) Under the ceiling 7 the best partner for x = 7 is 2, since 7 XOR 7 = 0 while 2 XOR 7 = 5 — the smallest element wins.
```

### Constraints

- `1 <= nums.length, queries.length <= 10⁵`
- each query has exactly two entries
- `0 <= nums[j], x, limit <= 10⁹`

## Hints

### Hint 1

Work bit by bit from the top. The most significant bit of the answer is worth
more than all the lower bits together, so settle it first, then the next, and
so on down.

### Hint 2

For a given `x`, a candidate whose top bit differs from the top bit of `x`
turns that bit of the result on. Whether such a candidate exists under the
ceiling is the question that decides the bit.

### Hint 3

A binary trie over the candidates answers "does a value with this bit pattern
prefix exist" while descending, which is exactly what the bit-by-bit greedy
needs at each level.

### Hint 4

The ceiling changes per query. Process the queries smallest ceiling first,
inserting `nums` elements into the trie in increasing order, so that whenever a
query runs the trie contains precisely the elements its ceiling admits.
