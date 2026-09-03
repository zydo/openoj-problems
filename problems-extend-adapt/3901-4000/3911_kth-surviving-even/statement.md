# K-th Surviving Even

## Description

Start from the endless run of positive even numbers: `2, 4, 6, 8, 10, ...`.
Now let a window of the array knock some of them out. Given a strictly
increasing array `nums` and queries of the form `[li, ri, ki]`, each query
looks at the slice `nums[li..ri]`, strikes every value of that slice from the
even-number run, and asks for the `ki`-th smallest even number that survives
the strike.

Return the answers for all queries, in order.

### Example 1

```text
Input: nums = [2,3,10,11], queries = [[0,3,2],[1,2,1],[0,3,4]]
Output: [6,2,12]
Explanation: The full array removes the evens 2 and 10, leaving 4, 6, 8,
12, ... — its 2nd survivor is 6 and its 4th is 12. The slice [3,10] removes
only 10, so its 1st survivor is 2.
```

### Example 2

```text
Input: nums = [2], queries = [[0,0,1],[0,0,5]]
Output: [4,12]
Explanation: The single value 2 is removed, so the survivors are 4, 6, 8,
10, 12, ... The 1st is 4 and the 5th is 12.
```

### Example 3

```text
Input: nums = [2,4,6,8], queries = [[0,3,1],[0,3,3]]
Output: [10,14]
Explanation: All four array values are even and all fall in the query
window, so 2, 4, 6 and 8 disappear together and the survivors begin at
10, 12, 14, ... The 1st is 10 and the 3rd is 14.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `nums` is strictly increasing.
- `1 <= queries.length <= 10⁵`
- `queries[i] = [li, ri, ki]` with `0 <= li <= ri < nums.length`
- `1 <= ki <= 10⁹`

## Hints

### Hint 1

Halving maps the even-number run onto the ordinary positive integers, so
"the k-th surviving even" becomes "the k-th surviving integer" with the
removed values halved too.

### Hint 2

Because `nums` only grows, the values removed by a window occupy one
contiguous stretch of positions — two binary searches fence them off.

### Hint 3

A removed (halved) value v can no longer conceal the answer once v has been
overtaken by k plus the number of removals before it; the sequence of
`v minus removal-rank` is sorted, so one more binary search counts how many
removals the answer must hop over.
