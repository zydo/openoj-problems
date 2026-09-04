# Peeling Off K-Balanced Chunks

## Description

You are handed a string `s` made up solely of `'('` and `')'` characters,
together with an integer `k`.

Call a piece of the string k-balanced when it is exactly `k` opening
parentheses in a row followed immediately by exactly `k` closing parentheses
in a row — with `k = 3`, for example, the piece `"((()))"` is 3-balanced.

Now run this stripping process: in each pass, erase every non-overlapping
k-balanced piece found in the current string and glue the leftover fragments
back together. Repeat pass after pass for as long as the string still
contains some k-balanced piece, then return whatever survives.

### Example 1

```text
Input: s = "((())())", k = 1
Output: ""
Explanation: The 1-balanced piece is "()". Pass 1 erases the two inner "()"
pairs, and the four surviving parentheses rejoin as "(())". Pass 2 erases
that pair's inside, and pass 3 erases the last "()", leaving nothing.
```

### Example 2

```text
Input: s = "((()))()", k = 2
Output: "()()"
Explanation: The 2-balanced piece is "(())". Pass 1 erases the occurrence
covering positions 1 through 4; the dangling first '(' and the trailing
"()" reunite into "()()", which holds no 2-balanced piece, so the process
stops there.
```

### Example 3

```text
Input: s = "()(())(()", k = 2
Output: "()(()"
Explanation: Pass 1 erases the "(())" in the middle. The leftovers — the
leading "()" and the unfinished "(()" — join into "()(()", where no two
'(' are followed by two ')', so nothing more can be erased.
```

### Constraints

- `2 <= s.length <= 10⁵`
- `s` consists only of `'('` and `')'`.
- `1 <= k <= s.length / 2`

## Hints

### Hint 1

A stack of character runs carries the whole process.

### Hint 2

Work only happens where a run of '(' touches a run of ')'; run-length
encoding keeps those junctions easy to find.

### Hint 3

At a '(' then ')' junction you can peel away min(len_open // k, len_close
// k) whole blocks of k in one step.
