# Range Majorities Past A Threshold

## Description

You are given an integer array `nums` of length `n` and a list of queries,
where `queries[i] = [li, ri, thresholdi]`. Each query looks at the subarray
`nums[li..ri]` and asks for its champion: among the values that occur at
least `thresholdi` times in that subarray, report the one with the highest
frequency, breaking ties by the smallest value. If no value reaches
`thresholdi` occurrences there, the query's answer is `-1`.

Return an array `answer` holding one champion per query, in order.

### Example 1

```text
Input: nums = [4,4,7,9,4,7], queries = [[0,5,3],[1,4,1],[2,5,2],[0,2,2]]
Output: [4,4,7,4]
Explanation:
    Query [0, 5, 3]: in [4, 4, 7, 9, 4, 7] the value 4 occurs three times and 7 twice, so only 4 clears the count of 3.
    Query [1, 4, 1]: in [4, 7, 9, 4] the value 4 occurs twice, more than any other, so it wins.
    Query [2, 5, 2]: in [7, 9, 4, 7] the value 7 occurs twice and meets the count of 2.
    Query [0, 2, 2]: in [4, 4, 7] the value 4 occurs twice, meeting the count of 2.
```

### Example 2

```text
Input: nums = [6,2,6,2], queries = [[0,3,2],[0,1,2]]
Output: [2,-1]
Explanation:
    Query [0, 3, 2]: in [6, 2, 6, 2] both values occur exactly twice, so the tie goes to the smaller value, 2.
    Query [0, 1, 2]: in [6, 2] each value occurs once, so nothing reaches two occurrences and the answer is -1.
```

### Example 3

```text
Input: nums = [1,2,2,3,3,3], queries = [[0,5,3],[1,5,2],[0,1,1]]
Output: [3,3,1]
Explanation:
    Query [0, 5, 3]: only 3 occurs at least three times in [1, 2, 2, 3, 3, 3].
    Query [1, 5, 2]: in [2, 2, 3, 3, 3] the value 3 occurs three times, beating 2's two.
    Query [0, 1, 1]: in [1, 2] both values occur once; the tie goes to the smaller, 1.
```

### Constraints

- `1 <= n == nums.length <= 10⁴`
- `1 <= nums[i] <= 10⁹`
- `1 <= queries.length <= 5 * 10⁴`
- `queries[i] = [li, ri, thresholdi]`
- `0 <= li <= ri < n`
- `1 <= thresholdi <= ri - li + 1`

### Hint 1

Answering every query by counting from scratch is far too slow, but ranges
that share their left blocks overlap heavily — think about precomputing
something for every pair of blocks.

### Hint 2

Compress values to ranks and store each rank's sorted position list, so any
value's count inside an arbitrary range costs two binary searches.

### Hint 3

Whole blocks hand the query a candidate champion; only the short leftover
edges at both ends need individual checks, each verified with those binary
searches before it can challenge the candidate.
