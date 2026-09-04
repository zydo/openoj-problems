# The First Self-Counting Pair

## Description

Call a digit _self-counting_ within a string when the string contains it
exactly as many times as the digit's own value: `'3'` is self-counting
precisely when it occurs 3 times, `'1'` precisely when it occurs once, and
so on.

Given a string `s` of digits, examine every pair of neighboring characters
and hand back the first pair, reading left to right, whose two digits
differ and are both self-counting within `s`. If no neighboring pair
qualifies, return an empty string.

### Example 1

```text
Input: s = "1223331"
Output: "23"
Explanation: The digit '2' occurs twice and '3' occurs three times, so
both are self-counting. The leading pair "12" is rejected because '1'
occurs twice rather than once, making "23" the first qualifying pair.
```

### Example 2

```text
Input: s = "44441"
Output: "41"
Explanation: The digit '4' occurs four times and '1' occurs once, so both
are self-counting. The run of fours offers only equal neighbors, so the
first differing pair is the final "41".
```

### Example 3

```text
Input: s = "9119"
Output: ""
Explanation: The digit '9' occurs twice rather than nine times and '1'
occurs twice rather than once, so no digit is self-counting and no pair
can qualify.
```

### Constraints

- `2 <= s.length <= 100`
- `s` consists only of the digits `'1'` through `'9'`.

## Hints

### Hint 1

Tally how often each digit appears in one pass over the string; a digit's
eligibility depends on that whole-string tally alone, never on where it
sits.
