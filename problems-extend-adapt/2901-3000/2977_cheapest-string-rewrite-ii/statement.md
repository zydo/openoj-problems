# Cheapest String Rewrite II

## Description

You hold two lowercase strings `source` and `target` of the same length,
plus a price list of rewrite rules: parallel arrays `original`,
`changed`, and `cost`, where rule `i` lets you replace any occurrence of
the substring `original[i]` with the substring `changed[i]` for
`cost[i]`.

Starting from `source`, you may apply the rules any number of times.
The windows you pick must stay compatible: taken over all operations,
every pair of picked windows is either completely disjoint (they touch
different stretches of the string) or exactly the same span (so a span
can be rewritten repeatedly, chaining through intermediate words).

Return the smallest total cost that turns `source` into `target`, or
`-1` when no sequence of rules can do it. The same `(original[i],
changed[i])` pair may appear more than once in the input, possibly with
different prices.

### Example 1

```text
Input: source = "xyz", target = "xzz", original =
["y","w","y"], changed = ["w","z","z"], cost = [2,3,9]
Output: 5
Explanation: Rewrite "y" to "w" for 2, then "w" to "z" for 3 — two
operations on the same window, which the rules permit. The total 5
beats the direct "y" to "z" rule priced at 9.
```

### Example 2

```text
Input: source = "abcd", target = "wxyz", original = ["ab","cd"],
changed = ["wx","yz"], cost = [5,7]
Output: 12
Explanation: The two windows [0..1] and [2..3] are disjoint, so both
rewrites go ahead independently: 5 + 7 = 12.
```

### Example 3

```text
Input: source = "aab", target = "ccb", original = ["aa","a","b"],
changed = ["cc","b","c"], cost = [9,2,3]
Output: 9
Explanation: One operation replaces the whole "aa" block with "cc" for
9. Chaining instead — "a" to "b" for 2 and "b" to "c" for 3, at each of
the two positions — would total 10, so 9 wins.
```

### Example 4

```text
Input: source = "abc", target = "xyz", original = ["ab"],
changed = ["xy"], cost = [7]
Output: -1
Explanation: No rule ever produces the letter "z", so the rewrite is
impossible.
```

### Constraints

- `1 <= source.length == target.length <= 1000`
- `source` and `target` contain only lowercase English letters.
- `1 <= cost.length == original.length == changed.length <= 100`
- `1 <= original[i].length == changed[i].length <= source.length`
- `original[i]` and `changed[i]` contain only lowercase English letters.
- `original[i] != changed[i]`
- `1 <= cost[i] <= 10⁶`

## Hints

### Hint 1

Number the distinct words that appear in `original` or `changed` — at
most `2m` of them for `m` rules — with a hash map.

### Hint 2

Repeated operations on one identical window behave like edges of a
graph, so the cheapest way to turn any word into any other is an
all-pairs shortest-path relaxation over those at-most-200 nodes.

### Hint 3

Let `dp[i]` be the least cost of converting the first `i` characters of
`source` into the first `i` of `target`. Either character `i - 1`
already agrees and `dp[i - 1]` carries over, or some window
`source[j..i)` maps to `target[j..i)` through the precomputed word
costs, giving `dp[j] + that cost`.

### Hint 4

Walking a trie of the known words through `source` and `target`
simultaneously, from each start position, surfaces every usable window
length without rescanning.

### Hint 5

The answer is `dp[n]`; an infinite value there means `-1`.
