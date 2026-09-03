# Placing The Three Dots

## Description

A dotted quad is four numbers separated by three single dots, where every
number lands between `0` and `255` and never opens with a `0` unless it is
the digit `0` all by itself. `"4.1.7.90"` and `"0.10.2.201"` are dotted
quads; `"4.01.7.90"` is not (that leading zero), and neither is
`"4.1.7.290"` (290 is past 255).

You are handed a string `s` of digits. Choose where the three dots go so the
string falls into four legal numbers — the digits stay in their original
order, and none may be dropped or reused. Every dot placement that works is
one answer, and a string can hold several. Some strings hold none.

Report the answers in ascending lexicographic order, so the result is
deterministic; the examples show the ordering.

### Example 1

```text
Input: s = "12031"
Output: ["1.2.0.31","1.20.3.1","12.0.3.1"]
Explanation: each address spends all five digits on its four numbers.
Pieces like "03" or "031" are barred by the opening-zero rule, which is
why no other placement survives.
```

### Example 2

```text
Input: s = "7290012"
Output: ["72.90.0.12"]
Explanation: the adjacent zeros settle everything: "00" is not a number
here, and a zero cannot open a longer piece, so the first zero can only
close the piece "90" while the second stands as "0" on its own.
```

### Example 3

```text
Input: s = "00000"
Output: []
Explanation: a zero can only occupy a piece as that piece's entire
content, so four pieces absorb at most four zeros — the fifth has nowhere
to go and the string forms no address at all.
```

### Constraints

- `1 <= s.length <= 20`
- `s` is made up of digit characters only.
