# Maximal Mountain String

## Description

Call a binary string _balanced_ when it has exactly as many `1`s as `0`s and,
reading left to right, every prefix contains at least as many `1`s as `0`s
(so the running count of `1`s minus `0`s never dips below zero and lands
exactly on zero at the very end).

You are given a balanced binary string `s`. A single move picks two
balanced substrings of `s` that sit back to back — the last character of
one immediately precedes the first character of the other — and swaps their
positions. Repeating this move any number of times rearranges `s` while it
stays balanced throughout.

Return the lexicographically largest string reachable from `s` this way.

### Example 1

```text
Input: s = "1101011000"
Output: "1110010100"
Explanation: s is a single balanced block whose interior, "10101100", splits
into three smaller back-to-back blocks "10", "10", and "1100". Sorting those
descending puts "1100" first, giving a maximized interior of "11001010";
wrapping that back in the outer 1...0 produces "1110010100".
```

### Example 2

```text
Input: s = "101100"
Output: "110010"
Explanation: s splits into two back-to-back balanced blocks, "10" and
"1100". Neither block can be improved on its own, so the only useful move is
swapping their order — "1100" beats "10" lexicographically, so it goes
first.
```

### Constraints

- `1 <= s.length <= 50`
- Every character of `s` is `'0'` or `'1'`.
- `s` is balanced in the sense defined above.

## Hints

### Hint 1

Track a running count that adds one for `1` and subtracts one for `0`. Every
time the count returns to zero, a top-level balanced block has just closed —
these blocks are the pieces a swap can reorder. Recursively maximize the
interior of each block, re-wrap it in its outer `1...0`, and finally sort the
maximized blocks in descending order before joining them: a string that
reduces to a single top-level block still has interesting work to do, since
that block's own interior may split into several smaller blocks worth
reordering.
