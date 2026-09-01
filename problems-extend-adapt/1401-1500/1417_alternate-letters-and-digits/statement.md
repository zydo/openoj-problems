# Alternate Letters and Digits

## Description

You are given a string `s` made up of lowercase English letters and
digits. Rearrange it so that letters and digits trade places
throughout: no two letters may sit next to each other, and neither may
two digits. If no arrangement manages that, return the empty string.

Because many arrangements usually qualify, this problem pins down one
deterministic answer. Split `s` into its letters and its digits, each
group keeping the order in which its characters first appear. If the
group sizes differ by more than one, there is no answer. Otherwise
weave the two groups together one character at a time, drawing from
whichever group is larger first — and from the letters when the sizes
tie. That weave is the expected output.

### Example 1

```text
Input: s = "h311o"
Output: "3h1o1"
Explanation: The letters are "ho" and the digits are "311". Digits
outnumber letters, so the weave starts with a digit and reads
"3h1o1" — no two neighbors share a type.
```

### Example 2

```text
Input: s = "abc12"
Output: "a1b2c"
Explanation: Letters outnumber digits 3 to 2, so the weave starts with
a letter.
```

### Example 3

```text
Input: s = "ab2025"
Output: ""
Explanation: Two letters against four digits is a gap of two, which no
arrangement can absorb.
```

### Constraints

- `1 <= s.length <= 500`
- `s` contains only lowercase English letters and digits.

## Hints

### Hint 1

Feasibility comes down to arithmetic: if the letter count and digit
count differ by more than one, two same-type neighbors are forced, and
otherwise they can always be avoided.

### Hint 2

Bucket the characters into a letters list and a digits list, then merge
them position by position, starting with the longer list (letters on a
tie) — the merge result is the pinned answer.
