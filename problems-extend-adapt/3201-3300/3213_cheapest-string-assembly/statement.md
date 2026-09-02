# Cheapest String Assembly

## Description

You are given a string `target`, an array of strings `words`, and an
integer array `costs` of the same length as `words`.

Start from an empty string `s`. In one operation, pick an index `i`,
append `words[i]` to `s`, and pay `costs[i]`. Operations may repeat any
number of times, or not happen at all.

Find the least total cost at which the appends can bring `s` to exactly
`target`, or report `-1` when no sequence of appends can.

### Example 1

```text
Input: target = "abcd", words = ["ab","cd","a","bcd"], costs = [4,5,1,2]
Output: 3
```

Appending `"a"` for 1 and then `"bcd"` for 2 builds `"abcd"` for 3 in
total — cheaper than `"ab"` plus `"cd"` at 9, and `"bcd"` alone does not
fit the front of the string.

### Example 2

```text
Input: target = "xy", words = ["x","x","y","xy"], costs = [5,2,3,20]
Output: 5
```

The repeated word `"x"` counts at its cheapest price (2): `"x"` then
`"y"` costs 5, far below the 20 of the single word `"xy"`.

### Example 3

```text
Input: target = "abc", words = ["ab","bd","b"], costs = [1,1,7]
Output: -1
```

No word contains a `c`, so no amount of appending can reach `target`.

### Constraints

- `1 <= target.length <= 5 * 10⁴`
- `1 <= words.length == costs.length <= 5 * 10⁴`
- `1 <= words[i].length <= target.length`
- The lengths of all the `words[i]` add up to at most `5 * 10⁴`.
- `target` and every `words[i]` consist only of lowercase English
  letters.
- `1 <= costs[i] <= 10⁴`

## Hints

### Hint 1

Picture building `target` left to right and let `dp[i]` be the cheapest
way to finish the suffix that starts at `i`.

### Hint 2

A duplicated word matters only at its minimum price, and at each position
only the distinct word lengths change anything — the cap on total word
length keeps that count small.

### Hint 3

A rolling hash (or an automaton built over the words) reveals which
lengths actually match at a position; always confirm with an exact
comparison before paying a price.
