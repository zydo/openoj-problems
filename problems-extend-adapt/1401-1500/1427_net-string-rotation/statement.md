# Net String Rotation

## Description

You are given a lowercase string `s` and a list of rotation moves
`shift`, where each row `shift[i] = [direction, amount]` says how to turn
the string:

- `direction = 0` is a left rotation; `direction = 1` is a right
  rotation.
- A left rotation by 1 drops the first character and reattaches it at the
  end; a right rotation by 1 moves the last character to the front.
- `amount` is how many single steps of that rotation to perform.

Apply the moves in order and return the resulting string.

### Example 1

```text
Input: s = "abcdef", shift = [[1,2],[0,1]]
Output: "fabcde"
Explanation: The right rotation by 2 turns "abcdef" into "efabcd", and
the following left rotation by 1 turns that into "fabcde".
```

### Example 2

```text
Input: s = "cycle", shift = [[0,1],[1,3],[0,2]]
Output: "cycle"
Explanation: The three moves cancel exactly — one left step, three right
steps, two left steps — so the string ends where it began.
```

### Example 3

```text
Input: s = "wxyz", shift = [[0,7],[1,2]]
Output: "xyzw"
Explanation: Seven left steps minus two right steps leave a net of five
left steps, and five is one full turn plus one on a length-4 string.
```

### Constraints

- `1 <= s.length <= 100`
- `s` contains only lowercase English letters.
- `1 <= shift.length <= 100`
- `shift[i].length == 2`
- `direction` is `0` or `1`.
- `0 <= amount <= 100`

## Hints

### Hint 1

The limits are small enough that applying the moves one at a time works.

### Hint 2

It is cheaper to fold everything first: left and right steps cancel, so
sum the amounts with opposite signs and carry out the single net rotation
once, reducing it modulo the string length.
