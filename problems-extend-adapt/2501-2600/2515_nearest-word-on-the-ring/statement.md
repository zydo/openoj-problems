# Nearest Word On The Ring

## Description

You are given a 0-indexed array `words` of strings that forms a ring: the
slot after the last one is the first one again. Concretely, the neighbor
after `words[i]` is `words[(i + 1) % n]` and the neighbor before it is
`words[(i - 1 + n) % n]`, with `n` the array's length.

You stand at slot `startIndex` and, one step at a time, may hop to either
neighbor of your current slot. How few steps are needed to reach some slot
whose string equals `target`? If `target` appears nowhere on the ring,
return `-1`.

### Example 1

```text
Input: words = ["red","blue","green","red","gold"], target = "red", startIndex = 2
Output: 1
Explanation: From index 2, one hop right lands on index 3, which holds
"red". The other copy, at index 0, is two hops left — so the best
possible is 1.
```

### Example 2

```text
Input: words = ["a","b","c","d","a"], target = "a", startIndex = 2
Output: 2
Explanation: Both copies of "a" sit two steps away: index 0 by moving
left twice, index 4 by moving right twice. No shorter route exists.
```

### Example 3

```text
Input: words = ["p","q","r"], target = "s", startIndex = 1
Output: -1
Explanation: The string "s" is on no slot of the ring, so there is
nowhere to walk.
```

### Constraints

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 100`
- `words[i]` and `target` consist of lowercase English letters only.
- `0 <= startIndex < words.length`

## Hints

### Hint 1

A match at index `i` is reachable by walking straight in either
direction — there is never a reason to reverse course mid-walk.

### Hint 2

For each slot holding `target`, the forward walk costs the index gap and
the backward walk costs the gap around the other way.

### Hint 3

Answer with the smallest of those two-way costs over all matching slots.
