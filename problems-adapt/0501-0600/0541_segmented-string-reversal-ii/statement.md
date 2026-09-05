# Segmented String Reversal II

## Description

Walk a string in blocks of `2k` characters. Within each block, reverse the
first `k` characters and leave the rest untouched. The trailing partial block
follows the same rule: if fewer than `k` characters remain, reverse all of
them; if between `k` and `2k - 1` remain, reverse the first `k` and keep the
rest.

### Example 1

```text
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Explanation: Block "abcd" → "bacd", then "efg" has 3 ≥ k characters, so its
first 2 ("ef") reverse to "fe", giving "bacdfeg".
```

### Example 2

```text
Input: s = "abcd", k = 2
Output: "bacd"
```

### Constraints

- `1 <= s.length <= 10⁴`
- `s` is lowercase English letters.
- `1 <= k <= 10⁴`
