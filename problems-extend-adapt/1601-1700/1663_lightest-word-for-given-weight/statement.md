# Lightest Word for a Given Weight

## Description

Give every lowercase letter a weight equal to its place in the alphabet:
`a` weighs 1, `b` weighs 2, and so on up to `z`, which weighs 26. The
weight of a word is the total of its letters' weights — `"cat"`, for
instance, weighs 3 + 1 + 20 = 24.

You are given two integers `n` and `k`. Build the word of exactly `n`
lowercase letters whose weight is exactly `k`, choosing the one that comes
first in dictionary order among all words meeting those two demands.

Recall that a word `x` comes before a word `y` in dictionary order when `x`
is a prefix of `y`, or when the first position where they differ holds a
letter in `x` that appears earlier in the alphabet than the letter in `y`.

### Example 1

```text
Input: n = 3, k = 30
Output: "acz"
Explanation: The weight of "acz" is 1 + 3 + 26 = 30, and no other
3-letter word of weight 30 comes before it in dictionary order.
```

### Example 2

```text
Input: n = 5, k = 130
Output: "zzzzz"
```

### Example 3

```text
Input: n = 4, k = 40
Output: "aalz"
```

### Constraints

- `1 <= n <= 10⁵`
- `n <= k <= 26 * n`

## Hints

### Hint 1

Dictionary order favors small letters early, so think about which
positions can afford to stay light and where the surplus weight must go.

### Hint 2

Fill the word from its last position toward the first: at each spot take
the heaviest letter that still leaves at least one unit of weight for
every position still ahead of it.
