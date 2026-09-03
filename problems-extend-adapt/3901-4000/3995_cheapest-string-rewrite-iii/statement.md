# Cheapest String Rewrite III

## Description

You hold two lowercase strings `source` and `target` of the same length,
a list of rewrite rules given as parallel arrays — `rules[i]` pairs a
`pattern` with its `replacement`, and `costs[i]` prices rule `i` — where
every pattern and replacement are equally long.

One application of rule `i` works like this:

- Pick a window: a position `l` such that the next
  `pattern.length` slots of the current string all still belong to **no**
  earlier application.
- Each pattern character must either equal the character currently sitting
  in its slot or be the wildcard `'*'`, which matches anything.
- The window's characters are overwritten with the replacement, taken
  literally (a replacement never contains `'*'`).
- The application costs `costs[i]` plus one per `'*'` the pattern used.

A slot that has been rewritten once is sealed forever, and because patterns
never change length, positions stay put through every rewrite.

What is the least total cost that turns `source` into `target`? Return
`-1` when no sequence of applications manages it.

### Example 1

```text
Input: source = "moonlight", target = "moonglows",
       rules = [["light","glows"]], costs = [5]
Output: 5
Explanation: The front "moon" already agrees, so those slots stay
untouched; one wildcard-free application rewrites "light" into "glows"
for 5.
```

### Example 2

```text
Input: source = "band", target = "bind",
       rules = [["b*nd","bind"]], costs = [4]
Output: 5
Explanation: The pattern's `*` absorbs the `a`, and the replacement
spells "bind" as needed. The bill is the base 4 plus 1 for the wildcard.
```

### Example 3

```text
Input: source = "axb", target = "axc",
       rules = [["b","c"]], costs = [7]
Output: 7
Explanation: Only the last slot disagrees, so a single one-character
rewrite for 7 closes the gap.
```

### Example 4

```text
Input: source = "ab", target = "cd",
       rules = [["ab","xy"]], costs = [2]
Output: -1
Explanation: The only rule produces "xy", which never becomes "cd", so
the rewrite is impossible.
```

### Constraints

- `1 <= source.length == target.length <= 5000`
- `source` and `target` contain only lowercase English letters.
- `1 <= rules.length == costs.length <= 200`
- `rules[i] = [pattern_i, replacement_i]`
- `1 <= pattern_i.length == replacement_i.length <= 20`
- `pattern_i` has at least one lowercase letter and at most five `'*'`
  characters; `replacement_i` has only lowercase letters.
- `1 <= costs[i] <= 1000`

## Hints

### Hint 1

Sealed windows never overlap and lengths never shift, so in the final
accounting each position is either untouched or covered by exactly one
application.

### Hint 2

Work prefix by prefix: let `dp[i]` be the cheapest way to settle the first
`i` positions of both strings.

### Hint 3

When `source[i]` and `target[i]` agree, position `i` can simply stay
unused, carrying `dp[i]` over to `dp[i + 1]` for free.

### Hint 4

Otherwise, try every rule anchored at `i`: the wildcard pattern must match
the source slice, and the replacement must spell the target slice
exactly.

### Hint 5

Each passing rule offers a transition to `dp[i + length]` priced at its
cost plus its wildcard count; an unreachable `dp[n]` means the answer is
`-1`.
