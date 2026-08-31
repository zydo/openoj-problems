# Gem Tally

## Description

You're given a string `jewels` naming the letter codes that count as gems,
and a string `stones` listing the rocks in your pouch, one letter per rock.
Count how many rocks in `stones` have a letter that also appears in
`jewels`.

Letters are case sensitive: `"a"` and `"A"` are treated as different gem
codes.

### Example 1

```text
Input: jewels = "bR", stones = "RRbBrb"
Output: 4
```

### Example 2

```text
Input: jewels = "m", stones = "MMmm"
Output: 2
```

### Constraints

- `1 <= jewels.length, stones.length <= 50`
- `jewels` and `stones` consist of only English letters.
- All the characters of `jewels` are unique.

## Hints

### Hint 1

For each rock, check whether its letter is one of the gem codes.
