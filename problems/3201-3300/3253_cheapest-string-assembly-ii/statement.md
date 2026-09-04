# Cheapest String Assembly II

## Description

This is the small-limits companion to Cheapest String Assembly — same
assembly rules, sizes a backpack solver can chew through.

You are given a string `target`, an array of strings `words`, and an
integer array `costs` with `costs.length == words.length`.

Beginning from an empty string `s`, you may repeat one operation as many
times as you like: pick an index `i`, append `words[i]` to the end of
`s`, and pay `costs[i]`.

Return the smallest total cost that brings `s` to exactly `target`, or
`-1` if no sequence of appends can.

### Example 1

```text
Input: target = "opencode", words = ["open","code","o","pen","de"],
costs = [6,5,2,3,2]
Output: 10
Explanation: Appending "o" (cost 2) then "pen" (cost 3) assembles
"open" for 5 — cheaper than the single word "open" at 6 — and one more
append of "code" (cost 5) finishes the target for a total of 10.
```

### Example 2

```text
Input: target = "banana", words = ["b","an","ana","na"], costs = [4,2,3,1]
Output: 8
Explanation: The only tiling of "banana" by these words is
"b" + "ana" + "na", which costs 4 + 3 + 1 = 8.
```

### Example 3

```text
Input: target = "moon", words = ["sun","star"], costs = [1,1]
Output: -1
Explanation: No available word ever produces an "m", so the target can
never be assembled.
```

### Constraints

- `1 <= target.length <= 2000`
- `1 <= words.length == costs.length <= 50`
- `1 <= words[i].length <= target.length`
- `target` and `words[i]` consist only of lowercase English letters.
- `1 <= costs[i] <= 10⁵`

## Hints

### Hint 1

For each cut point of `target`, only the cheapest way to reach it
matters — anything pricier can be discarded forever.

### Hint 2

Let `best[i]` be the minimum cost of assembling the first `i`
characters; every word that matches `target` ending at `i` offers a
candidate `best[i - len(word)] + its cost`.
