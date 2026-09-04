# Equalizing Two Bit Strings

## Description

Two bit strings s and t, both n characters long, sit side by side, and
three positive prices are attached to the moves you may make:

- A flip turns one character of either string from '0' to '1' or from '1'
  to '0', and costs flipCost.
- A swap exchanges the characters at two positions of a single string —
  both positions taken from s, or both from t — and costs swapCost.
- A cross swap exchanges the characters that share a position, s[i] with
  t[i], and costs crossCost.

Every kind of move may be used any number of times, in any order. Return
the smallest total price that makes s and t identical.

### Example 1

```text
Input: s = "0110", t = "1001", flipCost = 5, swapCost = 2, crossCost = 3
Output: 4
Explanation: Columns 0 and 1 disagree in opposite directions — s holds
'0' where t holds '1', then the reverse. Swap s[0] with s[1] (cost 2) so
s = "1010", and both columns match. Columns 2 and 3 disagree the same
opposite way, so swapping s[2] with s[3] (cost 2) turns s into "1001",
exactly t. The total is 2 + 2 = 4, and no flip is ever needed.
```

### Example 2

```text
Input: s = "000", t = "111", flipCost = 3, swapCost = 50, crossCost = 50
Output: 9
Explanation: Every column wants its '0' turned into a '1', and with the
swap prices at 50 no rearrangement comes close to just paying flipCost.
Flipping the three characters of s costs 3 * 3 = 9.
```

### Example 3

```text
Input: s = "1110", t = "0001", flipCost = 8, swapCost = 2, crossCost = 3
Output: 7
Explanation: Swap t[0] with t[3] (cost 2) to get t = "1000", which
settles both end columns at once. Columns 1 and 2 still hold '1' against
'0' — the same kind of disagreement twice. One cross swap at column 1
(cost 3) converts column 1 into the opposite kind, and swapping s[1] with
s[2] (cost 2) finishes the pair. The total is 2 + 3 + 2 = 7.
```

### Constraints

- `s` and `t` have the same length `n`
- `1 <= n <= 10⁵`
- `1 <= flipCost, swapCost, crossCost <= 10⁹`
- `s` and `t` contain only the characters '0' and '1'

## Hints

### Hint 1

Only the columns where the two strings differ matter, and every
disagreeing column comes in one of two mirror kinds: s has '0' where t
has '1', or s has '1' where t has '0'. One sweep counts both kinds.

### Hint 2

One column of each kind cancels the other: rearrange one string so the
two meet, then one more swap exchanges their values — swapCost in all,
competing with two flips at 2 * flipCost. Pay the cheaper price for
min(count01, count10) such pairs.

### Hint 3

What survives the pairing is |count01 - count10| columns of a single
kind. Two of a kind pair up through a cross swap at one of them — it
becomes the opposite kind — followed by the swap trick above, for
crossCost + swapCost, again competing with 2 * flipCost.

### Hint 4

A lone leftover column (the difference was odd) has nothing to
rearrange with, so one flip settles it. Sum every price — with n up to
10⁵ and costs up to 10⁹ the total passes 32 bits, so accumulate in 64.
