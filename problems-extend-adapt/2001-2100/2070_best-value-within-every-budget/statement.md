# Best Value Within Every Budget

## Description

A catalog is handed over as a 2D integer array `items`, where
`items[i] = [priceᵢ, valueᵢ]` pairs an item's price with its value. You are
also given a 0-indexed integer array `queries`. For each `queries[j]`, find
the highest value among the items priced at most `queries[j]`; when no item
is that affordable, the query's answer is `0`.

Return an array `answer` of the same length as `queries`, where `answer[j]`
holds the answer to the jth query.

### Example 1

```text
Input: items = [[4,30],[2,10],[7,60],[3,25]], queries = [1,2,3,5,7,8]
Output: [0,10,25,30,60,60]
Explanation:
- For queries[0]=1, nothing costs 1 or less, so the answer is 0.
- For queries[1]=2, only the item priced 2 qualifies, giving value 10.
- For queries[2]=3, the item priced 3 joins in, lifting the best value to
  25.
- For queries[3]=5, the item priced 4 becomes affordable as well, so the
  best reaches 30.
- For queries[4]=7 and queries[5]=8, every item is within budget, and the
  catalog's top value is 60.
```

### Example 2

```text
Input: items = [[5,40],[5,70],[5,20]], queries = [4,5]
Output: [0,70]
Explanation:
Every item costs exactly 5. The budget of 4 affords none of them, while
the budget of 5 affords all three — and the strongest of them is worth 70.
Items may share prices and values freely.
```

### Example 3

```text
Input: items = [[9,500]], queries = [8]
Output: [0]
Explanation: The lone item costs 9, more than the budget of 8, so nothing
can be picked and the answer is 0.
```

### Constraints

- `1 <= items.length, queries.length <= 10⁵`
- `items[i].length == 2`
- `1 <= priceᵢ, valueᵢ, queries[j] <= 10⁹`

## Hints

### Hint 1

Scanning the whole catalog for every query repeats the same work. Could
ordering the items by price let the queries share that effort?

### Hint 2

With the items sorted, one pass can turn each position into "the best value
at or below this price" — after that, each query only has to find where its
budget sits among the prices.
