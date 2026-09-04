# Sign Flip Moves

## Description

You are given a string `currentState` made only of the characters `+`
and `-`. A single move picks any position where two consecutive
characters are both `+` and flips that pair to `--`; the rest of the
string is left untouched.

Return every string reachable from `currentState` by exactly one such
move. List the results in the order their flipped pair appears when
scanning `currentState` left to right — the state produced by flipping
the earliest `++` pair comes first. If no `++` pair exists anywhere in
`currentState`, return an empty list.

### Example 1

```text
Input: currentState = "+++"
Output: ["--+","+--"]
```

### Example 2

```text
Input: currentState = "-+-+"
Output: []
```

### Example 3

```text
Input: currentState = "++--++"
Output: ["----++","++----"]
```

### Constraints

- `1 <= currentState.length <= 500`
- `currentState[i]` is either `+` or `-`.
