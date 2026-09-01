# Words That Outweigh the Query

## Description

For a non-empty string `s` of lowercase letters, define its **weight** `w(s)`
as the number of times its alphabetically smallest character appears. For
instance, `w("else") = 2` because the smallest character `e` occurs twice,
while `w("adder") = 1` — the repeated `d`s do not help, since `a` is smaller
and appears only once.

You are given two arrays of strings: `queries` and `words`. For each query
string, count how many strings in `words` have a weight strictly greater
than the query's weight.

Return an integer array `answer`, where `answer[i]` is the count for
`queries[i]`.

### Example 1

```text
Input: queries = ["mz"], words = ["hhaa","jjj","m"]
Output: [2]
Explanation: The query weighs 1. The words weigh 2, 3, and 1, so two words
outweigh it.
```

### Example 2

```text
Input: queries = ["oo","p"], words = ["ll","l","zzz"]
Output: [1,2]
Explanation: Words weigh 2, 1, and 3. The query "oo" weighs 2, which only
"zzz" exceeds — "ll" ties and does not count. The query "p" weighs 1, which
both "ll" and "zzz" exceed.
```

### Example 3

```text
Input: queries = ["effort","e","zz"], words = ["ball","moon","aa","nut"]
Output: [1,1,0]
Explanation: The words weigh 1, 1, 2, 1. Both weight-1 queries are beaten
only by "aa" (weight 2), and nothing beats the weight-2 query "zz".
```

### Constraints

- `1 <= queries.length <= 2000`
- `1 <= words.length <= 2000`
- `1 <= queries[i].length, words[i].length <= 10`
- `queries[i]` and `words[i]` consist of lowercase English letters.

## Hints

### Hint 1

Reduce every word to a single integer — its weight — before touching any
query.

### Hint 2

Once the word weights are sorted, the strings that beat a query form one
contiguous run at the top of the array.

### Hint 3

A binary search for the first weight strictly above the query's weight tells
you where that run starts.
