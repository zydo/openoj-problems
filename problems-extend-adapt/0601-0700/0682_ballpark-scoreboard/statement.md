# Ballpark Scoreboard

## Description

You are running the scoreboard for a pickup game with its own house
rules. The board starts empty, and you are given an array of strings
`operations` to apply to it in order. Each entry is one of:

- an integer `x`, written as a string — post a new score of `x`.
- `"+"` — post a new score equal to the sum of the two most recent
  scores still on the board.
- `"D"` — post a new score equal to double the most recent score still
  on the board.
- `"C"` — strike the most recent score from the board entirely.

After every operation has been applied, return the sum of every score
still on the board.

The inputs are guaranteed valid: every operation applies to a board that
already has enough scores for it, and both the running sum and every
individual score fit in a 32-bit signed integer.

### Example 1

```text
Input: operations = ["3","9","D","C","+"]
Output: 24
Explanation:
"3"  -> board [3]
"9"  -> board [3, 9]
"D"  -> post 2 * 9 = 18, board [3, 9, 18]
"C"  -> strike 18, board [3, 9]
"+"  -> post 3 + 9 = 12, board [3, 9, 12]
Sum: 3 + 9 + 12 = 24.
```

### Example 2

```text
Input: operations = ["10","-3","5","C","D","7","+","+"]
Output: 17
Explanation:
"10" -> board [10]
"-3" -> board [10, -3]
"5"  -> board [10, -3, 5]
"C"  -> strike 5, board [10, -3]
"D"  -> post 2 * -3 = -6, board [10, -3, -6]
"7"  -> board [10, -3, -6, 7]
"+"  -> post -6 + 7 = 1, board [10, -3, -6, 7, 1]
"+"  -> post 7 + 1 = 8, board [10, -3, -6, 7, 1, 8]
Sum: 10 - 3 - 6 + 7 + 1 + 8 = 17.
```

### Example 3

```text
Input: operations = ["4","C"]
Output: 0
Explanation:
"4" -> board [4]
"C" -> strike 4, board []
The board is empty, so the sum is 0.
```

### Constraints

- `1 <= operations.length <= 1000`
- `operations[i]` is `"C"`, `"D"`, `"+"`, or a string representing an
  integer in the range `[-3 * 10⁴, 3 * 10⁴]`.
- Every `"+"` operation is applied only when at least two scores are on
  the board.
- Every `"C"` or `"D"` operation is applied only when at least one score
  is on the board.
