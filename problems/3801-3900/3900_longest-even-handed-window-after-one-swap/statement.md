# Longest Even-Handed Window After One Swap

## Description

A binary string `s` — nothing but the characters `'0'` and `'1'` — is
laid out in front of you.

Call a window of the string even-handed when it holds exactly as many
`'0'`s as `'1'`s.

Before picking a window, you get one move: exchange the positions of
any two characters in `s`, or leave the string untouched.

Return the length of the longest even-handed window you can end up
with.

### Example 1

```text
Input: s = "0111100"
Output: 6
Explanation: Swap the leading '0' with the last '1', turning the
string into "1111000"; its window "111000" carries three '0's and
three '1's. Before the move, no window beats length 4 ("1100" at the
end), so the swap lifts the answer to 6.
```

### Example 2

```text
Input: s = "100010000"
Output: 4
Explanation: Only two '1's live in the whole string, so no window can
ever pair up more than two of each character. Trading the '0' at index
2 for the '1' at index 4 gives "101000000", whose window "1010" hits
that ceiling.
```

### Example 3

```text
Input: s = "0000"
Output: 0
Explanation: No swap can conjure a '1', so the empty window — holding
zero of each character — is the only even-handed option.
```

### Constraints

- `1 <= s.length <= 10⁵`
- Every character of `s` is `'0'` or `'1'`.

## Hints

### Hint 1

An even-handed window spends its length equally: the two character
counts inside it match.

### Hint 2

No window can outgrow twice the total count of the rarer character,
swap or no swap.

### Hint 3

A single swap only pays off when it repairs the one window you intend
to keep.

### Hint 4

A window whose counts are off by exactly two becomes even-handed by
moving one stray character across its boundary.

### Hint 5

Sweep prefix balances, and for each reachable target balance ask how
far back a valid window can stretch.
