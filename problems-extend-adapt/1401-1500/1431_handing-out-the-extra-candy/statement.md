# Handing Out the Extra Candy

## Description

A group of kids each holds a pile of candy, counted in an array
`candies` where `candies[i]` is kid `i`'s pile size. You are holding a
stash of `extraCandies` candies that you will hand to exactly one kid —
in full, never split.

For every kid, answer this: if the whole stash went to them, would they
end up holding the greatest pile among the group? Return a boolean
array of length `n` with one answer per kid. Two kids tied at the top
both count as holding the greatest pile, so several kids can be `true`
at once — and a kid who already ties for the lead keeps that status
once their pile grows.

### Example 1

```text
Input: candies = [1,4,3,7], extraCandies = 3
Output: [false,true,false,true]
Explanation: The biggest current pile is 7. With 3 more candies, kid 1
reaches 4, kid 2 reaches 7, and kid 3 reaches 6 — only kid 2 and the
already-leading kid 4 catch up to 7 or pass it.
```

### Example 2

```text
Input: candies = [9,9,2], extraCandies = 1
Output: [true,true,false]
Explanation: The first two kids already share the lead, and receiving
the extra candy cannot drop anyone below it. Kid 3 tops out at 3.
```

### Example 3

```text
Input: candies = [4,5,6], extraCandies = 2
Output: [true,true,true]
Explanation: Two candies are enough for every pile to reach the 6
needed to match the current leader.
```

### Constraints

- `n == candies.length`
- `2 <= n <= 100`
- `1 <= candies[i] <= 100`
- `1 <= extraCandies <= 50`

## Hints

### Hint 1

Handing the stash to one kid leaves everyone else's pile untouched, so
the bar every kid must clear is a single fixed number: the largest
entry of the original array.
