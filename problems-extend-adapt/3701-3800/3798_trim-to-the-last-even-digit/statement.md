# Trim To The Last Even Digit

## Description

A string s made up solely of the digits '1' and '2' is in front of you.
You may strike out any characters you like, as long as the survivors keep
their original left-to-right order. Among all strings you can obtain this
way that read as an even integer, return the biggest one — and if no
deletion choice can ever produce an even number, return the empty string
"".

### Example 1

```text
Input: s = "2121"
Output: "212"
Explanation: Cutting the trailing '1' leaves "212", which ends in an even
digit; nothing longer than it is even, so it is the answer.
```

### Example 2

```text
Input: s = "222"
Output: "222"
Explanation: The string already ends evenly, so striking anything would
only shrink it. Keep everything.
```

### Example 3

```text
Input: s = "1211"
Output: "12"
Explanation: The final '2' sits at index 1, so everything after it must
go; "12" is the largest even reading available.
```

### Constraints

- `1 <= s.length <= 100`
- `s` consists only of the characters '1' and '2'.

## Hints

### Hint 1

An even reading has to end in '2', and keeping extra leading characters
never makes the result smaller.

### Hint 2

So the best move is a single cut: locate the last '2' in s and keep the
prefix ending there. With no '2' at all, the answer is "".
